import { renderMemo, type MemoData } from "../card";
import { data } from "../data";
import { main } from "../main";

export function fetchMemo() {
  data.forEach((memo: MemoData) => {
    renderMemo(main, memo);
  });
}
