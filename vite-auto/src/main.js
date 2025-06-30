import "/src/style.css";
import { Header } from "./components/Header";
import { router } from "./router";


function defineElements() {
  customElements.define("c-header", Header);
}

defineElements();

// 새로고침해도 잘 뜨게 함
window.addEventListener("DOMContentLoaded", router);
