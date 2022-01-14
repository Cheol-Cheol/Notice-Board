// TODO: 요구사항 분석
// LocalStorage Read & Write
// - [] LS에 데이터를 저장한다.
//  - [x] 게시글을 생성할 때
//  - [] 게시글을 수정할 때
//  - [] 게시글을 삭제할 때
// - [] LS에 있는 데이터를 읽어온다.

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(post) {
    localStorage.setItem("post", JSON.stringify(post));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("post"));
  },
};

function App() {
  this.notice = [];
  // [{...}, {...}, {...}, 번호, 제목, 내용, 작성일, 작성자]

  if (store.getLocalStorage()) {
    this.notice = store.getLocalStorage();
  }

  const render = () => {
    const template = this.notice
      .map((item, index) => {
        return `<li data-li-num>
      <div class="notice-list__num">${index + 1}</div>
      <div class="notice-list__title">${item.title}</div>
      <div class="notice-list__date">${item.date}</div>
      </li>`;
      })
      .join("");

    $(".notice-list").innerHTML = template;
  };

  render();
}
App();
