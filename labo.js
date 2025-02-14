
        (function() {
            const images2 = [
                { src: "images/モビリティデザイン.png", title: "モビリティデザイン研究室",description: "墨田の下町で商店街の価値向上に向けたブランド作りを行なっている。商業者から医療従事者、区議会議員まで、地域に関わる多様なメンバーとチームになり、あらゆる企画・制作を通じて魅力的な空間づくりを目指す。" },
                { src: "images/コマーシャルデザイン.png", title: "コマーシャルデザイン研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/コミュニケーションデザイン.png", title: "コミュニケーションデザイン研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/コンテクスチュアルデザイン.png", title: "コンテクスチュアルデザイン研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/意匠形態学.png", title: "意匠形態学研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/人間生活工学研究室.png", title: "人間生活工学研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/材料計画.png", title: "材料計画研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/心理・行動科学研究室.png", title: "心理・行動科学研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/サステナブルデザイン.png", title: "サステナブルデザイン研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/デザイン文化計画.png", title: "デザイン文化計画研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
                { src: "images/システムプランニング.png", title: "システムプランニング研究室",description: "こどもの自由なあそびを引き出せる環境づくりを目標に活動を行う。墨田区の公園やイベント、小学校等でこどもたちと遊び、隠れた不満や要望を感じとることでこどもの主体的な遊びを実現する。" },
            ];
            let currentIndex = 1;
            let fadeIn;
        
            function updateImageAndDescription() {
                const mainImage = document.getElementById("main-image2");
                const projectPic = document.getElementById("labo_pic");
                const imageTitle = document.getElementById("labo-title");
                const imageDescription = document.getElementById("labo-description");
                const covering2 = document.getElementById("covering2");
        
                if (fadeIn) clearInterval(fadeIn);
                mainImage.style.opacity = 0;
                let size = 100;
                let opacity = 0;
        
                projectPic.src = images2[currentIndex].src;
                imageTitle.textContent = images2[currentIndex].title;
                imageDescription.textContent = images2[currentIndex].description;
        
                fadeIn = setInterval(() => {
                    size += 40;
                    opacity += 0.05;
                    covering2.style.transform = `scale(${1 + size / 500})`;
                    mainImage.style.opacity = opacity;
                    projectPic.style.opacity = opacity;
                    if (size >= 4500) clearInterval(fadeIn);
                }, 50);
            }
        
            [...Array(10)].forEach((_, i) => {
                document.getElementById(`button2-${i + 1}`).addEventListener("click", () => {
                    currentIndex = i;
                    updateImageAndDescription();
                });
            });

            document.getElementById("next-button2").addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images2.length;
                updateImageAndDescription();
            });

            document.getElementById("prev-button2").addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images2.length;
                updateImageAndDescription();
            });
        
        
            window.addEventListener("load", updateImageAndDescription);
        })();
        





