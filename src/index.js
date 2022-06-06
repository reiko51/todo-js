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
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TO DO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //li生成
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);
    //button作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグに追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    //divタグを完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(deleteButton.parentNode);
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

//未完了リストから指定の行を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親タグ（div）を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

//追加ボタンに関数を割り当てる
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
