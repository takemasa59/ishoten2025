
        (function() {
            const images2 = [
                { src: "images/モビリティデザイン.png", title: "モビリティデザイン研究室",description: "本研究室はモビリティデザインを主とする研究室である。生活の豊かさを目指し、交通や輸送機器に関する研究・開発を行い、具体的なデザインのコンセプト・造形作品を提案する。" },
                { src: "images/コマーシャルデザイン.png", title: "コマーシャルデザイン研究室",description: "世の中のすべての商品にデザインの関与する余地があると考える。本研究室では消費の局面における商品のありかた、ものと消費者をつなぐコミュニケーションの方法、コンテクスト形成の方法などを模索する。" },
                { src: "images/コミュニケーションデザイン.png", title: "コミュニケーションデザイン研究室",description: "本研究室では、視覚的表現を基に利用者に適切な情報を伝えるデザインを模索している。また、紙やスクリーンなどのメディアでのデザインを分析し、効率的なメディア活用についても研究する。" },
                { src: "images/コンテクスチュアルデザイン.png", title: "コンテクスチュアルデザイン研究室",description: "社会的・歴史的文脈において人間活動とデザインの関係性を読み解きながら、自然や文化との共生のもとで人びとがよりよく生きることに向けて、場の形成や人びとの行動・経験文化のありかたをデザインとして提案する。" },
                { src: "images/意匠形態学.png", title: "意匠形態学研究室",description: "本研究室は、あらゆる「物」「事」について形態学的視点から分析的および直感的アプローチを繰り返し、そのものの「すがた」「かたち」の意味について考察していく研究室である。" },
                { src: "images/人間生活工学研究室.png", title: "人間生活工学研究室",description: "本研究室は日本で最初に設立された工業デザインの人間工学研究室である。ヒトの生理学的・心理学的・形態学的な諸特性を研究することで、人間と機器や環境のあるべき関係を探求し、より良いデザインの提案を行う。" },
                { src: "images/材料計画.png", title: "材料計画研究室",description: "材料が有している固有特性と属性との関係をデザイン科学の視点に立脚して研究し、材料計画の観点から「モノ-ヒト-環境」系における新たな価値の創造を目指す。" },
                { src: "images/心理・行動科学研究室.png", title: "心理・行動科学研究室",description: "心理・行動科学研究室は、デザインの領域における問題解決に心理学や行動科学の知見を応用することによって、データを明示し、科学的根拠に基づいたデザインの実現を目指す研究室である。" },
                { src: "images/サステナブルデザイン.png", title: "サステナブルデザイン研究室",description: "本研究室は、エコビジネス手法やエコデザイン戦略、持続可能な教育を通じて、持続可能な製品・サービス開発に取り組む工業デザイナーを育成し、地域・世界の持続可能な社会に貢献することを目的としている。" },
                { src: "images/デザイン文化計画.png", title: "デザイン文化計画研究室",description: "「野に出て生活を学ぶ」をモットーとし、地域の生活者を師としてその生活文化に込められた知恵や思いを汲み取ることで、物の色や形を決定するだけにとどまらない豊かな生活のためのデザインを実現する。" },
                { src: "images/システムプランニング.png", title: "システムプランニング研究室",description: "本研究室ではプロダクトやサービスを始め、多岐に渡るデザインを提案する。産学協同研究のプロジェクトや海外ワークショップに参画し、より実践的なデザインワークを行う。" },
            ];

            const works = [
                [
                  { src: "images/コマーシャル/早坂.webp", title: "理系就活の可能性を広げる「営業ボードゲーム」の制作", description: "ボードゲーム #営業 #コンサル" },
                  { src: "images/コマーシャル/杉.webp", title: "子供の自己肯定感向上を図る子供に作ってもらうオリジナル絵本", description: "#オリジナル絵本 #子供" },
                  { src: "images/コマーシャル/畠山.webp", title: "SNSを利用して15年前に流行したキャラクターのリブートを試みる", description: "#豆しば #アニメーション" },
                  { src: "images/images/コマーシャル/松藤.webp", title: "訪日外国人の購買意欲を促進する土産菓子パッケージの提案ー小江戸川越を舞台にー", description: "#インバウンド消費 #地域経済活性化" },
                  { src: "images/コマーシャル/杉山RGB.webp", title: "形状、重さの観点から抱き心地を追求した、使用者に安心感を与える抱き具の制作", description: "安心感 #包み込まれる #重さと形" },
                ],
                [
                  { src: "images/子供/宮脇.webp", title: "放課後遊びを対象に自然な会話を促進する道具の研究", description: "#子ども #遊び #ベーゴマ" },
                  { src: "images/子供/井上.webp", title: "子どもの外遊びにおける集団遊びに溶け込みやすくなる遊びの研究", description: "#四吾小 #異年齢 #外遊び #集団遊び #リング鬼" },
                  { src: "images/ヤマハ/沖原.webp", title: "福神橋の下における非日常的空間体験の提案", description: "#橋の下 #非日常 #ストリートファニチャー" },
                  { src: "images/共創環境/山川.webp", title: "聴覚と視覚に着目した\n空間に心地良い気配をもたらすプロダクトの提案", description: "#気配 #会話音 #振動スピーカー #モビール" },
                  { src: "images/共創環境/鶴見.webp", title: "複数人による意見交換に着目した\n重ねて書き込む透明ボードの提案", description: "#透明 #重ねる #ホワイトボード" },
                  { src: "images/共創環境/稲垣.webp", title: "香りを用いて手間を楽しみ「書く」による発散を促すプロダクトの提案", description: "#書く #手間を楽しむ#香り" }
                ]
              ];

            let currentIndex = 0;
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

            function updateWorks() {
                [...Array(10)].forEach((_, i) => {
                  const workData = works[currentIndex][i]; // データを取得
                  const workImage = document.getElementById(`work-image${i }`);
                  const workTitle = document.getElementById(`work-title${i }`);
                  const tags = document.getElementById(`work-tags${i}`);
                  const workDiv = document.getElementById(`work${i}`);

                  const workImage2 = document.getElementById(`work-image2-${i }`);
                  const workTitle2 = document.getElementById(`work-title2-${i }`);
                  const tags2 = document.getElementById(`work-tags2-${i}`);
                  const workDiv2 = document.getElementById(`work2-${i}`);
              
                  if (workData) {
                    // データがある場合、内容を更新
                    workImage.src = workData.src;
                    workImage.alt = workData.title;
                    workTitle.textContent = workData.title;
                    tags.textContent = workData.description;
                    workImage2.src = workData.src;
                    workImage2.alt = workData.title;
                    workTitle2.textContent = workData.title;
                    tags2.textContent = workData.description;
              
                    // 要素を表示
                    workDiv.style.display = "flex";
                    workDiv2.style.display = "flex";
                  } else {
                    // データがない場合、親の div を非表示
                    workDiv.style.display = "none";
                    workDiv2.style.display = "none";
                  }
                });
              }
              
        
            [...Array(10)].forEach((_, i) => {
                document.getElementById(`button2-${i + 1}`).addEventListener("click", () => {
                    currentIndex = i;
                    updateImageAndDescription();
                    updateWorks();
                });
            });

            document.getElementById("next-button2").addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images2.length;
                updateImageAndDescription();
                updateWorks();
            });

            document.getElementById("prev-button2").addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % images2.length;
                updateImageAndDescription();
                updateWorks();
            });
        
        
            window.addEventListener("load", updateImageAndDescription);
            window.addEventListener("load", updateWorks);
        })();
        





