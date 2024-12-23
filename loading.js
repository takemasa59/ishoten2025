document.addEventListener("DOMContentLoaded", function () {
    const scrollDownElement = document.querySelector(".scroll_down");
  
    // スクロールイベントを監視
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        // スクロール開始時にクラスを追加
        scrollDownElement.classList.add("hidden");
      }
    });
  });
  