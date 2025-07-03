import gsap from "gsap";
import { renderMemo } from "../card";
import { main } from "../main";
import type { Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase";

export async function fetchMemo() {
  const { data, error } = await supabase.from("memo").select();
  console.log(data);
  main.innerHTML = "";
  data &&
    data.forEach((memo) => {
      renderMemo(main, memo);
    });
}

export async function deleteMemo(id: number) {
  const response = await supabase.from("memo").delete().eq("id", id).select();
  fetchMemo();
  console.log(response);
}

export async function insertMemo({
  title,
  description,
  priority,
}: Pick<Tables<"memo">, "title" | "description" | "priority">) {
  const { error } = await supabase.from("memo").insert({
    title,
    description,
    priority,
  });
  fetchMemo();
  const tl = gsap
    .timeline()
    .to(".pop", { y: "100%", ease: "power3.inOut" })
    .to("#dialog", { autoAlpha: 0, duration: 0.2 });
}
