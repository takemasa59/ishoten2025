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
  
  
  