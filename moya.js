  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // 現在のスクロール量を取得
    const maxBlur = 250; // 最大のぼかし強度
    const maxOpacity = 1; // 最終的な透明度（完全に表示される）
  
    // スクロール量に基づいてぼかしの強度を計算
    const blurValue = Math.max(0, maxBlur - scrollY * 0.8); // スクロール量が増えるとぼかしが弱くなる
  
    // 透明度をスクロール量に応じて変更（スクロール量が増えると透明度が増加）
    const opacityValue = Math.min(scrollY / 500, maxOpacity); // スクロール量が増えると透明度が増加
  
    // `.moya_pic` の要素を取得して、filter と opacity を変更
    const moyaPic1 = document.querySelector('.moya_pic1');
    const moyaPic2 = document.querySelector('.moya_pic2');
    moyaPic1.style.filter = `blur(${blurValue}px)`; // スクロールに応じてぼかしを設定
    moyaPic2.style.filter = `blur(${blurValue}px)`; 
  });
  


 /*window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // 現在のスクロール量を取得
    const circle1 = document.querySelector('.moya_pic1 img'); // 対象要素を取得
    const circle2 = document.querySelector('.moya_pic2 img');
    const newSize = scrollY; // スクロール量に応じた半径を計算
  
    // `clip-path` を設定
    circle1.style.clipPath = `circle(${-400 +  newSize* 3}px at 70% 110%)`; // 中心座標を明示
    circle2.style.clipPath = `circle(${ 100 + newSize}px at 30% 90%)`;
  });*/

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY * 3; // 現�