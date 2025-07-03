import { main } from "./main";

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
