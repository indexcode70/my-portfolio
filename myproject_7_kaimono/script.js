// ページ読み込み時に実行
window.onload = () => {
    const savedDate = localStorage.getItem('shoppingList');
    if (savedDate) {
        const items = JSON.parse(savedDate);
        items.forEach(item => {
            // ここで保存されていたデータを使って付箋を再構築する
            const li = document.createElement('li');
            li.textContent = item.text;
            li.classList.add('item');

            // 保存されていた色があればそれを塗る
            if (item.color) {
                li.style.backgroundColor = item.color;
                li.style.borderLeftColor = 'rgba(0,0,0,0.1)';
            }
            
            if (item.completed) li.classList.add('is-done');

            li.addEventListener('click', () => {
                li.classList.toggle('is-done');
                saveList();
            });
            shoppingList.appendChild(li);
        });
    }
};


const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');    // 親を捕まえる  
const clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', () => {
    const text = itemInput.value;   // 入力された文字

    if (text !== "") {        // 何か入力された時だけ実行
        const li = document.createElement('li');    // 新しい<li>を作る
        li.textContent = text;  // <li>に文字を入れる
        li.classList.add('item');    // classを着せる

        //------　付箋の色を変える-----
        // 付箋の色の候補を配列する
        const colors = ['#ffffa5', '#ffd1dc', '#d0f0fd', '#e2f0cb', '#ffccaa'];

        // 配列の中からランダムに1つの番号(0~4)を選ぶ
        // Math.randomは0~1未満の数字に長さ(要素の個数)をかけて端数を切り捨てる
        const randomIndex = Math.floor(Math.random() * colors.length);  // Math.floorで少数点以下を切り捨ててきれいな整数にする
        const selectedColor = colors[randomIndex];

        // 選ばれた色を付箋の背景色にセットする
        li.style.backgroundColor = selectedColor;
        // 左側のアクセント(border-left)も背景色を少し暗くした色にする
        li.style.borderLeftColor = 'rgba(0,0,0,0.1)';



        // クリックされるたびにis-doneクラスをつけ外しする
        li.addEventListener('click', () => {
           li.classList.toggle('is-done');
           saveList();
        });

        shoppingList.appendChild(li);
        itemInput.value = "";   // 入力欄を空にする
        saveList(); 
    }
});

clearBtn.addEventListener('click', () => {
    if (confirm('本当に全て消していいですか？')) {  // 確認ダイアログを出す
        shoppingList.innerHTML = "";  // 親の中身を空にする
    }
});

// リストの状態を保存する関数
function saveList() {
    const items = [];
    
    // 全ての付箋(item)を捕まえて、文字と完了状態を記録する
    document.querySelectorAll('.item'). forEach(li => {
        items.push({
            text: li.textContent,
            completed: li.classList.contains('is-done'),
            color: li.style.backgroundColor
        });
    });
    
    // 保存箱(LocalStorage)に「list」という名前で保存
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {  // 押されたキーがEnterだったら、追加ボタンと同じ動きをさせる
        addBtn.click();   // 追加ボタンをクリック
    }
})
