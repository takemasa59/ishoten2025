document.addEventListener("DOMContentLoaded", () => {
  const actionButton = document.getElementById("actionButton");
  const buttonIcon = document.getElementById("buttonIcon");
  const circleEffect = document.getElementById("circleEffect");
  const menuContent = document.getElementById("menuContent");

  let isExpanded = false;

  actionButton.addEventListener("click", () => {
      const buttonRect = actionButton.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
      // 円の中心位置を設定
      circleEffect.style.left = `${buttonCenterX}px`;
      circleEffect.style.top = `${buttonCenterY}px`;
    
      if (!isExpanded) {
        // 開く処理
        circleEffect.classList.add("active");
        actionButton.classList.add("active");
        buttonIcon.classList.replace("fa-bars", "fa-times");
    
        // 0.5秒後にメニューを表示
        setTimeout(() => {
          menuContent.style.display = "flex";
          setTimeout(() => {
            menuContent.style.opacity = "1"; // フェードイン開始
          }, 300);
        }, 100);
      } else {
        // 閉じる処理
        menuContent.style.opacity = "0"; // フェードアウト開始
        setTimeout(() => {
          menuContent.style.display = "none"; // フェードアウト後に非表示
        }, 200); // フェードアウト時間0.1秒
    
        circleEffect.classList.remove("active");
        actionButton.classList.remove("active");
        buttonIcon.classList.replace("fa-times", "fa-bars");
      }
    
      isExpanded = !isExpanded;
    });
    
});


//項目タップ後閉じる処理12/31
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const menuContent = document.getElementById("menuContent");
  const circleEffect = document.getElementById("circleEffect");

  // メニューを閉じる関数
  function closeMenu() {
    menuContent.style.opacity = "0";
    menuContent.style.transition = "opacity 0.1s ease";
    setTimeout(() => {
      menuContent.style.display = "none";
      circleEffect.classList.remove("active");
      actionButton.classList.remove("active");
      buttonIcon.classList.replace("fa-times", "fa-bars");
    }, 100); // 0.1秒後に非表示
  }

  // 各メニュー項目にクリックイベントを追加
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.getAttribute("href") !== "#") {
        closeMenu();
      }
    });
  });
});

// ページ内リンクを取得
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // デフォルトの挙動を無効化
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // スムーズスクロール
        block: 'center',    // 要素を画面の中央に配置
      });
    }
  });
});

// OP中は非表示
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const openingSection = document.getElementById("scroll-container");
  
  let hasShownHeader = false;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const openingHeight = openingSection.offsetHeight;
    
    // オープニング終了後にメニューを表示
    if (scrollTop > openingHeight && !hasShownHeader) {
      header.classList.add("visible");
      hasShownHeader = true;
    }
  });
});







  
  
  