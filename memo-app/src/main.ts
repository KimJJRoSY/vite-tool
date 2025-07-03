import { renderMemo } from "./card";
import { data } from "./data";
import "./style.css";

fetchMemo();

function fetchMemo() {
  renderMemo(data);
}
