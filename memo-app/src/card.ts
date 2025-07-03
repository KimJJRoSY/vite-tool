export type MemoData = {
  id: number;
  priority: "high" | "medium" | "easy";
  title: string;
  description: string;
  hits: number;
};

// createMemo

const main = document.querySelector("main");

function createMemo(memo: MemoData): string {
  return `
        <article id="${memo.id}"class="memo ${memo.priority}">
          <header class="memo-header">
            <span class="badge">Medium</span>
            <button type="button">
              <img src="/trash.svg" alt="삭제 아이콘" />
            </button>
          </header>
          <div class="contents">
            <h2>${memo.title}</h2>
            <p>${memo.description}</p>
          </div>
          <footer class="memo-footer">
            <img src="/user.svg" alt="유저 아이콘" />
            <span class="hit">${memo.hits}</span>
            watch
            <img class="drag" src="/drag.svg" alt="드래그 아이콘" />
          </footer>
        </article> 
    `;
}

//renderMemo
export function renderMemo(memoList: MemoData[]) {
  memoList.forEach((memo) => {
    main?.insertAdjacentHTML("beforeend", createMemo(memo));
  });
}
