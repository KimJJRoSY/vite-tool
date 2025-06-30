import "@/style.css";
import { getNode, insertLast } from "kind-tiger";
import logo from "@/assets/js.svg";
import logo_8b from "@/assets/8b.jpg";
import S from "@/style.module.css";

console.log(S);

const app = getNode("#app");
const template = `
<figure class="figure">
<img src="${logo}" />
<figcaption>자바 스크립트 로고</figcaption>
</figure>
<figure class="${S.figure}">
<img width='100px' src="${logo_8b}" />
<figcaption>8b-studio</figcaption>
</figure>


`;

insertLast(app, template);
