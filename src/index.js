import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //やっていることはこれ↓と同じ
  // console.log((document.createElement("li").innerText = "テスト中"));

  //button（完了）タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // completeButton.addEventListener("click", () => {
  // alert("completeButton");
  // });

  //button（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("deleteButton");
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // const ul = document.getElementById("incomplete-list");
  // ul.appendChild(div);
  // console.log(ul);
};

//追加ボタンに関数を割り当てる
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
