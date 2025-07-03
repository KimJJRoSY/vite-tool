import { loadStorage, saveStorage } from "./storage";
import S from "./style.module.css";
import { addTodo, deleteTodo, toggleTodo, updateTodo } from "./todo";
import { StorageKey, type TodoList } from "./type";

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
  const value = input.value.trim();
  if (!value) return;

  addTodo(value);
  input.value = "";
  render();
}

// todos 데이터를 2개 이상 추가해서 리스트 렌더링 바꿔주세요.

function render() {
  const todoList: TodoList = loadStorage();
  console.log(todoList);

  list.innerHTML = "";

  todoList.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = String(todo.id);
    li.innerHTML = `    
  <input name="checkbox" type="checkbox" ${todo.completed ? "checked" : ""} />
  <span contenteditable="true">${todo.content}</span>
  <button type="button" class="delete">삭제</button>`;
    list.appendChild(li);

    const btn = li.querySelector("button")!;
    const checkbox = li.querySelector('input[type="checkbox"]');
    const span = li.querySelector("span"!);
    const id = todo.id;

    btn?.addEventListener("click", () => {
      deleteTodo(id);
      render();
    });
    checkbox?.addEventListener("change", () => {
      console.log(todo.id);
      //배열을 반환 => 기존 데이터 배열(해당 Id 아이템을 찾아 completed를 반전)
      toggleTodo(todo.id);
      render();
    });

    // blur 이벤트 -> 해당 인풋에 포커스 될때 input.focus() -> 포커스 아웃될때는 blur임
    span?.addEventListener("blur", () => {
      console.log("change");
      // span의 글자 가져옴
      const newContent = span.textContent?.trim() || "";
      // updateTodo()
      if (newContent && newContent !== todo.content) {
        updateTodo(id, newContent);
        render();
      }
    });
  });
}
render();

form?.addEventListener("submit", handleSubmit);

// 삭제 버튼 클릭했을 때, 데이터 삭제
// 1. 버튼을 선택 -
// 2. 버튼에 클릭 이벤트 바인딩 ->
// 3. 선택 항목 제거 -> filter
// 4. 스토리지 저장,
// 5. 리렌딩
