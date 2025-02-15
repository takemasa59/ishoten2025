const images = [
    { src: "images/shotengai.png", title: "商店街プロジェクト",description: "墨田の下町で商店街の価値向上に向けたブランド作りを行なっている。商業者から医療従事者、区議会議員まで、地域に関わる多様なメンバーとチームになり、あらゆる企画・制作を通じて魅力的な空間づくりを目指す。" },
    { src: "images/kodomo.png", title: "こどもプロジェクト",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
    { src: "images/koen.png", title: "公園プロジェクト",description: "墨田区の公園を対象に、公園というパブリックな空間をより多くの人にとっての良い居場所とすることを目指すプロジェクト。管理者側と利用者側を繋ぐ案内サインやコミュニケーションツールなどの提案を行っている。" },
    { src: "images/kyosokankyo.png", title: "共創環境プロジェクト",description: "千葉大学墨田サテライトキャンパス5Fを対象に、学生の創造的ワークを促しサポートする家具や環境のあり方を提案・考察することを目指して活動している。" },
    { src: "images/sangyokanko.png", title: "産業観光プロジェクト",description: "墨田区産業振興課と連携し、町工場の端材と事業者をサンプリングする「すみだまてりあ」を企画。端材や人のストーリーを活かしたプロダクトを制作し、墨田の産業活性化を目指す。" },
    { src: "images/yamaha.png", title: "ヤマハプロジェクト",description: "多様なPLAYERを生み出す体験及び道具・環境のデザイン表現」をテーマに掲げたヤマハ株式会社との共同研究。音・音楽に限らず下町を舞台に学生個人の興味を尊重した拡大解釈的アプローチで活動している。" },
];
let currentIndex = 0;
let fadeIn;

function updateImageAndDescription() {
    // 必要な要素を取得
    const mainImage = document.getElementById("main-image-desktop");
    const mainImageMobile = document.getElementById("main-image-mobile"); // モバイル用画像
    const projectPic = document.getElementById("project_pic");
    const imageTitle = document.getElementById("project-title");
    const imageDescription = document.getElementById("project-description");
    const covering = document.getElementById("covering");

    // 既存のフェードインを停止
    if (fadeIn) {
        clearInterval(fadeIn);
    }

    // 黒くする
    mainImage.style.opacity = 0; // 画像を黒くする（デスクトップ）
    mainImageMobile.style.opacity = 0; // 画像を黒くする（モバイル）
    projectPic.style.opacity = 0;
    covering.style.opacity = 1; // カバーを表示

    // アニメーション開始（黒くなってから画像を変更）
    setTimeout(() => {
        // 画像と説明を変更
        projectPic.src = images[currentIndex].src;
        imageTitle.textContent = images[currentIndex].title;
        imageDescription.textContent = images[currentIndex].description;

        // フェードインアニメーション開始
        let size = 50;
        let opacity = 0;

        fadeIn = setInterval(() => {
            size += 30;
            opacity += 0.05;

            // カバーのスケールアニメーション
            covering.style.transformOrigin = "center"; // 回転基準点を中心に設定
            covering.style.transform = `scale(${1 + size / 500})`;

            // メイン画像の透明度を更新
            mainImage.style.opacity = opacity;
            mainImageMobile.style.opacity = opacity; // モバイル用画像の透明度も更新
            projectPic.style.opacity = opacity;

            // アニメーション終了条件
            if (size >= 4500) {
                clearInterval(fadeIn); // フェードイン完了
                covering.style.opacity = 0; // カバーを非表示にする
            }
        }, 50); // 50msごとに更新
    }, 100); // 300ms後に画像を変更（黒くなってから）

}

// ボタン全てにクラス refbutton がついている場合
const buttons = document.querySelectorAll('.refbutton');
buttons[0].classList.add('selected');

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        // currentIndexを更新
        currentIndex = i;
        updateImageAndDescription();

        // すべてのボタンから.selectedを削除
        buttons.forEach(btn => btn.classList.remove('selected'));

        // クリックされたボタンに.selectedを追加
        button.classList.add('selected');
    });
});


window.addEventListener("load", updateImageAndDescription);