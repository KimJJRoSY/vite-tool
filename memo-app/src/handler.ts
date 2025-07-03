import gsap from "gsap";
import { main } from "./main";
import { deleteMemo, insertMemo } from "./service/service";
import { supabase } from "./supabase/supabase";
import type { Tables } from "./supabase/database.types";

let draggingEl: HTMLElement | null = null;

export function handleDragStart(e: DragEvent) {
  const target = e.target as HTMLElement;
  const memo = target.closest(".memo");

  if (memo && e.dataTransfer) {
    draggingEl = memo as HTMLElement;
    e.dataTransfer!.effectAllowed = "move";
    console.log("dddd");
    memo.classList.add("dragging");
  }
}

/* 드래그 중이지 않은 엘리먼트를 찾음 -> 현재 마우스의 위치에 따라감 
-> 드래그 중이지 않은 엘리먼트의 크기 절반을 마우스가 넘었다면 
해당 엘리먼트를 대체함 
*/
function getDragAfterElement(
  container: HTMLElement,
  y: number
): HTMLElement | null {
  const draggableElements = [
    ...container.querySelectorAll(".memo:not(.dragging)"),
  ] as HTMLElement[];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: -Infinity, element: null as HTMLElement | null }
  ).element;
}

export function handleDragOver(e: DragEvent) {
  e.preventDefault();

  const afterElement = getDragAfterElement(main, e.clientY);

  if (!draggingEl) return;

  /* 바꿔치기 */
  if (afterElement === null) {
    main.appendChild(draggingEl);
  } else {
    main.insertBefore(draggingEl, afterElement);
  }
}

export function handleDragEnd() {
  if (draggingEl) {
    draggingEl.classList.remove("dragging");
    draggingEl = null;
  }
}

/* 
1. DELETE 통신을 하자
2. 이벤트 위임 처리 -> 삭제 버튼을 클릭하면 article의 data-id를 가져와야함 
3. supabase .eq(id: 가져온ID)
*/

export async function handleDelete(e: MouseEvent) {
  const target = e.target as Element;
  const btn = target.closest("button");
  const article = target.closest("article");

  if (!(btn && article)) return;
  const id = article.dataset.id;

  if (confirm("삭제하시겠습니까?")) {
    deleteMemo(Number(id)!);
  }
}

export function handleOpenPop() {
  const tl = gsap
    .timeline()
    .to("#dialog", { autoAlpha: 1, duration: 0.2 })
    .to(".pop", { y: 0, ease: "power3.inOut" });
}

export function handleCreate(e: MouseEvent) {
  e.preventDefault();
  const title = document.querySelector("#title") as HTMLInputElement;
  const description = document.querySelector(
    "#description"
  ) as HTMLInputElement;
  const priority = document.querySelector("#priority") as HTMLSelectElement;

  insertMemo({
    title: title.value,
    description: description.value,
    priority: priority.value as Tables<"memo">["priority"],
  });
  //초기화
  title.value = "";
  description.value = "";
  priority.value = "high";
}

export function handleClosePop() {
  const tl = gsap
    .timeline()
    .to(".pop", { y: "100%", ease: "power3.inOut" })
    .to("#dialog", { autoAlpha: 0, duration: 0.2 });
}
