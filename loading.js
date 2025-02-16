window.onload = function() {
    // スクロールを無効にする
    document.body.style.overflow = 'hidden';

    // 30秒後にスクロールを有効にする
    setTimeout(function() {
        document.body.style.overflow = 'auto';
        const loader = document.querySelector(".loader");
        loader.classList.add("loaded");

        const content = document.querySelector(".content");
        content.style.visibility = "visible";

        // `.scroll_down` を表示
        const scrollDown = document.querySelector(".scroll_down");
        scrollDown.style.opacity = "1";
        scrollDown.style.visibility = "visible";
    }, 10);
};

// スクロールイベントで `.scroll_down` を隠す
document.addEventListener("DOMContentLoaded", function () {
    const scrollDownElement = document.querySelector(".scroll_down");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            scrollDownElement.classList.add("hidden");
        }
    });
});
