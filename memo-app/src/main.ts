import { fetchMemo } from "./service/service";
import "./style.css";

export const main = document.querySelector("main") as HTMLElement;

fetchMemo();
