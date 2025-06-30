import About from "../pages/About";
import Contact from "../pages/contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import gsap from "gsap";

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

export async function router() {
  // 뒤에 경로를 읽어옴 ! -> endpoint
  const path = location.pathname;

  const app = document.querySelector("#app");

  // routes[키]에 접근하면 html 값을 render에 넣음
  const render = routes[path] || NotFound;

  gsap.defaults({
    ease: "power3.inOut",
    duration: 0.7,
  });
  await gsap.to(app, { opacity: 1, x: "-100%" });

  // 페이지 이동할 때마다 비워줌
  app.innerHTML = "";
  // 페이지에 해당하는 값 넣어줌
  app.insertAdjacentHTML("beforeend", render());

  await gsap.fromTo(app, { opacity: 0, x: "100%" }, { opacity: 1, x: 0 });
}
export function navigate(path) {
  // 새로고침이 일어나지 않으면서 path가져옴
  // path는 헤더에서 가져옴
  console.log("history::::", history);
  history.pushState({}, "", path);
  router();
}

// 뒤로가기 앞으로 가기
window.addEventListener("popstate", router);
