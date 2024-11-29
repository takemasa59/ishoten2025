document.addEventListener("DOMContentLoaded", () => {
    var pics = ["./images/sumida1.png", "./images/sumida2.png", "./images/sumida3.jpg"]; // 画像の配列
    var gazou1 = document.getElementsByClassName("sumida_pic")[0];
    var gazou2 = document.getElementsByClassName("sumida_pic")[1];
    var num = 0; // 初期の画像インデックス
    let opacity = 1; // 現在の透明度
    let decreasing = true; // 透明度が減少しているかどうか

    // 初期画像の設定
    gazou1.src = pics[num];
    num = (num + 1) % pics.length
    gazou2.src = pics[(num) % pics.length];

    function changeOpacity() {
        if (decreasing) {
            opacity -= 0.05;
            if (opacity <= -1) {
                opacity = 0;
                decreasing = false;

                // 次の画像に切り替える
                num = (num + 1) % pics.length;
                gazou1.src = pics[num];
            }
        } else {
            opacity += 0.05;
            if (opacity >= 2) {
                opacity = 1;
                decreasing = true;

                // 次の画像に切り替える
                num = (num + 1) % pics.length;
                gazou2.src = pics[(num) % pics.length];
            }
        }

        // 透明度を設定
        gazou1.style.opacity = opacity;
        gazou2.style.opacity = 1 - opacity;
    }

    // 100msごとに透明度を変更（1サイクル=5秒）
    setInterval(changeOpacity, 100);
    changeOpacity()
});
