import S from "./style.module.css";
import type { TodoList } from "./type";

/* 

1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
2. css module을 사용해 스타일링을 해주세요.
3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
4. input의 value값을 가져와주세요.
5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

*/

const tag = `
  <div class="${S.container}">
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>
    <hr />
    <ul id="renderPlace">

    </ul>
  </div>
`;
document.querySelector("#app")?.insertAdjacentHTML("beforeend", tag);

const input = document.querySelector("#todo") as HTMLInputElement;
const list = document.querySelector("#renderPlace") as HTMLUListElement;

const form = document.querySelector("form");

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  render();
}

// todos 데이터를 2개 이상 추가해서 리스트 렌더링 바꿔주세요.

function render() {
  const todoList: TodoList = [
    { id: Date.now(), content: "배고파", completed: true },
    { id: Date.now(), content: "되고파", completed: false },
    { id: Date.now(), content: "너의오뽜", completed: false },
  ];
  console.log(todoList);

  //   list.appendChild(li);

  todoList.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = String(todo.id);
    li.innerHTML = `    
  <input name="checkbox" type="checkbox" ${todo.completed ? "checked" : ""} />
  <span contenteditable="true">${todo.content}</span>
  <button type="button" class="delete">삭제</button>`;
    list.appendChild(li);
  });
}
render();

form?.addEventListener("submit", handleSubmit);
