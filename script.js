const myWorks = [
    {
    title: "おみくじ",
    description: "ボタン操作で運勢をランダムに表示するアプリです。javaScriptのMathオブジェクトと配列インデックスの操作を組み合わせたロジックを実装し、基本的な動的コンテンツの生成を学びました。",
    tech: "HTMl / CSS / javaScript",
    link:"https://indexcode70.github.io/omikuji-app/"
    },

    {
    title: "お天気実況",
    description: "OpenWeatherMap APIを利用し、指定した都市の天候と気温をリアルタイムに取得し表示します。Fetch APIによる非同期処理に加え、天候データに応じて動的生成したCSSアニメーションによる演出など、視覚的な楽しさにこだわりました。",
    tech: "HTMl / CSS / javaScript",
    link: "https://indexcode70.github.io/weather-app/"
    },

    {
    title: "お買い物リスト",
    description: "日々の買い物を管理できるタスク管理アプリです、Web Storage API(LocalStorage)を活用し、ブラウザを閉じてもデータが保持される永続化を実現しました。CSSのcalc関数を用いたレスポンシブなレイアウト設計にも挑戦しています。",
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