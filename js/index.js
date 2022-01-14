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

  //   $(".button-form").addEventListener("submit", (e) => {
  //     e.preventDefault();
  //   });
  const getDate = () => {
    let today = new Date();

    let year = today.getFullYear();
    yy = String(year).substring(2, 4);
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${yy}-${month}-${date}`;
  };

  $(".notice-btn").addEventListener("click", () => {
    const postTitle = $(".notice-form__title").value;
    const editorData = editor.getData();

    if (!postTitle || !editorData) {
      return;
    }
    this.notice.push({
      title: postTitle,
      content: editorData,
      date: getDate(),
    });
    store.setLocalStorage(this.notice);
  });
}
App();
/* <a href="./post.html">
  <li>
    <div class="notice-list__num">1</div>
    <div class="notice-list__title">첫 게시글 업로드</div>
    <div class="notice-list__date">21-12-30</div>
  </li>
</a>; */
