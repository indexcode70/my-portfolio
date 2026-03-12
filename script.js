const myWorks = [
    {
    title: "おみくじ",
    description: "クリックするとおみくじが引けます。javaScriptの数的オブジェクトと配列インデックスを学びました。",
    tech: "HTMl / CSS / javaScript",
    link:"https://indexcode70.github.io/omikuji-app/"
    },

    {
    title: "天気予報アプリ",
    description: "天気と気温を表示します。APIキーを取得し、条件分岐で背景の色が変わるようにしました。",
    tech: "HTMl / CSS / javaScript",
    link: "https://indexcode70.github.io/weather-app/"
    },

    {
    title: "お買い物リスト",
    description: "今日買うものを分かりやすく確認できます。LocalStorageを使用して入力した文字を保存できるように工夫しました。",
    tech: "HTML / CSS / javaScript",
    link: "https://indexcode70.github.io/shopping-memo_app/"   
    },


    // 新しいサイトができたら、ここに追加するだけで反映される
    
];

// 作品カードを生成して画面に表示する関数
function displayWorks() {
    const container = document.getElementById('works-container');

    myWorks.forEach(work => {
        // カードの入れ物を作る
        const card = document.createElement('div');
        card.className = `work-card`;

        // カードの中身を組み立てる
        card.innerHTML = `
        <h3>${work.title}</h3>
        <p class="tech-stack">使用技術: ${work.tech}</p>
        <p>${work.description}</p>
        <a href="${work.link}"class="view-button" target="_blank">作品を見る</a>
        `;

        container.appendChild(card);
    });
}

// ページが読み込まれたら実行
displayWorks();