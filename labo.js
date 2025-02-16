(function() {
  const images2 = [
      { src: "images/モビリティデザイン.png", icon: "images/labo_icon/モビリティ.svg", title: "モビリティデザイン研究室",description: "本研究室はモビリティデザインを主とする研究室である。生活の豊かさを目指し、交通や輸送機器に関する研究・開発を行い、具体的なデザインのコンセプト・造形作品を提案する。" },
      { src: "images/コマーシャルデザイン.png", icon: "images/labo_icon/コマーシャル.svg", title: "コマーシャルデザイン研究室",description: "世の中のすべての商品にデザインの関与する余地があると考える。本研究室では消費の局面における商品のありかた、ものと消費者をつなぐコミュニケーションの方法、コンテクスト形成の方法などを模索する。" },
      { src: "images/コミュニケーションデザイン.png", icon: "images/labo_icon/コミュニケーション.svg", title: "コミュニケーションデザイン研究室",description: "本研究室では、視覚的表現を基に利用者に適切な情報を伝えるデザインを模索している。また、紙やスクリーンなどのメディアでのデザインを分析し、効率的なメディア活用についても研究する。" },
      { src: "images/コンテクスチュアルデザイン.png", icon: "images/labo_icon/コンテクチュアル.svg", title: "コンテクスチュアルデザイン研究室",description: "社会的・歴史的文脈において人間活動とデザインの関係性を読み解きながら、自然や文化との共生のもとで人びとがよりよく生きることに向けて、場の形成や人びとの行動・経験文化のありかたをデザインとして提案する。" },
      { src: "images/意匠形態学.png", icon: "images/labo_icon/意匠形態学.svg", title: "意匠形態学研究室",description: "本研究室は、あらゆる「物」「事」について形態学的視点から分析的および直感的アプローチを繰り返し、そのものの「すがた」「かたち」の意味について考察していく研究室である。" },
      { src: "images/人間生活工学研究室.png", icon: "images/labo_icon/人間生活工学.svg", title: "人間生活工学研究室",description: "本研究室は日本で最初に設立された工業デザインの人間工学研究室である。ヒトの生理学的・心理学的・形態学的な諸特性を研究することで、人間と機器や環境のあるべき関係を探求し、より良いデザインの提案を行う。" },
      { src: "images/材料計画.png", icon: "images/labo_icon/材料計画.svg", title: "材料計画研究室",description: "材料が有している固有特性と属性との関係をデザイン科学の視点に立脚して研究し、材料計画の観点から「モノ-ヒト-環境」系における新たな価値の創造を目指す。" },
      { src: "images/心理・行動科学研究室.png", icon: "images/labo_icon/心理行動学.svg", title: "心理・行動科学研究室",description: "心理・行動科学研究室は、デザインの領域における問題解決に心理学や行動科学の知見を応用することによって、データを明示し、科学的根拠に基づいたデザインの実現を目指す研究室である。" },
      { src: "images/サステナブルデザイン.png", icon: "images/labo_icon/サステナブル.svg", title: "サステナブルデザイン研究室",description: "本研究室は、エコビジネス手法やエコデザイン戦略、持続可能な教育を通じて、持続可能な製品・サービス開発に取り組む工業デザイナーを育成し、地域・世界の持続可能な社会に貢献することを目的としている。" },
      { src: "images/デザイン文化計画.png", icon: "images/labo_icon/デザイン文化計画.svg", title: "デザイン文化計画研究室",description: "「野に出て生活を学ぶ」をモットーとし、地域の生活者を師としてその生活文化に込められた知恵や思いを汲み取ることで、物の色や形を決定するだけにとどまらない豊かな生活のためのデザインを実現する。" },
      { src: "images/システムプランニング.png", icon: "images/labo_icon/システムプランニング.svg", title: "システムプランニング研究室",description: "本研究室ではプロダクトやサービスを始め、多岐に渡るデザインを提案する。産学協同研究のプロジェクトや海外ワークショップに参画し、より実践的なデザインワークを行う。" },
      { src: "images/環境デザイン.png", icon: "images/labo_icon/環境.svg", title: "環境デザイン研究室",description: "人々の暮らしの中にある様々な様態の現場に密着しより望ましい環境を具現化するデザインを研究している。家具や遊具、空間計画・演出、緑環境、商環境、地域など人がつくりだした環境全てを総合的に対象としている。" },
      { src: "images/人間情報科学.png", icon: "images/labo_icon/人間情報科学.svg", title: "人間情報科学研究室", description: "本研究室では、より人間特性に合致したヒューマンインタフェースの実現を目指し、人間の多用な情報処理に関する諸問題について、生体工学やデジタル技術等を使い多視点から研究と提案を行う。"}
  ];
  
  const works = [
      [
        { src: "images/モビリティ/赤坂.webp", title: "自転車の交通ルール改善に向けた注意喚起デバイス", description: "#自転車は原則歩道右側を通行すべし #うるさい" },
        { src: "images/モビリティ/細川.webp", title: "車内空間の情報との距離感のコントロールを可能にする自動車インテリアのCMF提案", description: "#ヒートガン #レジン #ボコボコ" },
        { src: "images/モビリティ/中村.webp", title: "文花団地の課題を解決するモビリティ", description: "#墨田区 #ご当地モビリティ #特例特定小型原付" },
        { src: "images/モビリティ/赤坂.webp", title: "自転車の交通ルール改善に向けた注意喚起デバイス", description: "#自転車は原則歩道右側を通行すべし #うるさい" },
        { src: "images/モビリティ/細川.webp", title: "車内空間の情報との距離感のコントロールを可能にする自動車インテリアのCMF提案", description: "#ヒートガン #レジン #ボコボコ" },
        { src: "images/モビリティ/中村.webp", title: "文花団地の課題を解決するモビリティ", description: "#墨田区 #ご当地モビリティ #特例特定小型原付" },
        { src: "images/モビリティ/赤坂.webp", title: "自転車の交通ルール改善に向けた注意喚起デバイス", description: "#自転車は原則歩道右側を通行すべし #うるさい" },
        { src: "images/モビリティ/細川.webp", title: "車内空間の情報との距離感のコントロールを可能にする自動車インテリアのCMF提案", description: "#ヒートガン #レジン #ボコボコ" },
        { src: "images/モビリティ/中村.webp", title: "文花団地の課題を解決するモビリティ", description: "#墨田区 #ご当地モビリティ #特例特定小型原付" },
      ],
      [
        { src: "images/コマーシャル/早坂.webp", title: "理系就活の可能性を広げる「営業ボードゲーム」の制作", description: "#ボードゲーム #営業 #コンサル" },
        { src: "images/コマーシャル/杉.webp", title: "子供の自己肯定感向上を図る子供に作ってもらうオリジナル絵本", description: "#オリジナル絵本 #子供" },
        { src: "images/コマーシャル/畠山.webp", title: "SNSを利用して15年前に流行したキャラクターのリブートを試みる", description: "#豆しば #アニメーション" },
        { src: "images/コマーシャル/松藤.webp", title: "訪日外国人の購買意欲を促進する土産菓子パッケージの提案ー小江戸川越を舞台にー", description: "#インバウンド消費 #地域経済活性化" },
        { src: "images/コマーシャル/杉山RGB.webp", title: "形状、重さの観点から抱き心地を追求した、使用者に安心感を与える抱き具の制作", description: "#安心感 #包み込まれる #重さと形" },
        { src: "images/コマーシャル/早坂.webp", title: "理系就活の可能性を広げる「営業ボードゲーム」の制作", description: "#ボードゲーム #営業 #コンサル" },
        { src: "images/コマーシャル/杉.webp", title: "子供の自己肯定感向上を図る子供に作ってもらうオリジナル絵本", description: "#オリジナル絵本 #子供" },
        { src: "images/コマーシャル/畠山.webp", title: "SNSを利用して15年前に流行したキャラクターのリブートを試みる", description: "#豆しば #アニメーション" },
        { src: "images/コマーシャル/松藤.webp", title: "訪日外国人の購買意欲を促進する土産菓子パッケージの提案ー小江戸川越を舞台にー", description: "#インバウンド消費 #地域経済活性化" },
        { src: "images/コマーシャル/杉山RGB.webp", title: "形状、重さの観点から抱き心地を追求した、使用者に安心感を与える抱き具の制作", description: "#安心感 #包み込まれる #重さと形" },
      ],
      [
      { src: "images/コミュ/渡辺.webp", title: "植物の造形美を表現した花の種のパッケージの制作", description: "#パターン #パッケージ #植物 #造形" },
      { src: "images/コミュ/真田.webp", title: "スマートフォンを用いたカラオケでのコミュニケーション手法の提案", description: "#スマホペンライト #ライブ感 #自己表現" },
      { src: "images/コミュ/森永.webp", title: "レトロな印象を与えるカタカナフォントの制作", description: "レトロ #フォント" },
      { src: "images/コミュ/北村.webp", title: "ストーリーテリングを活かしたサブスクサービスにおけるアイキャッチデザインの提案", description: "#ストーリーテリング #アイキャッチ" },
      { src: "images/コミュ/真田.webp", title: "スマートフォンを用いた\nカラオケでのコミュニケーション手法の提案", description: "#スマホペンライト #ライブ感 #自己表現"},
      { src: "images/公園プロジェクト/砂川.webp", title: "利用者の優しさを引き出すサインの提案〜隅田公園において〜", description: "#公園 #サインデザイン #挨拶 #いきもの感 #鏡" },
      { src: "images/コミュ/渡辺.webp", title: "植物の造形美を表現した花の種のパッケージの制作", description: "#パターン #パッケージ #植物 #造形" },
      { src: "images/コミュ/真田.webp", title: "スマートフォンを用いたカラオケでのコミュニケーション手法の提案", description: "#スマホペンライト #ライブ感 #自己表現" },
      { src: "images/コミュ/森永.webp", title: "レトロな印象を与えるカタカナフォントの制作", description: "レトロ #フォント" },
      { src: "images/コミュ/北村.webp", title: "ストーリーテリングを活かしたサブスクサービスにおけるアイキャッチデザインの提案", description: "#ストーリーテリング #アイキャッチ" },
      { src: "images/コミュ/真田.webp", title: "スマートフォンを用いた\nカラオケでのコミュニケーション手法の提案", description: "#スマホペンライト #ライブ感 #自己表現"},
      { src: "images/公園プロジェクト/砂川.webp", title: "利用者の優しさを引き出すサインの提案〜隅田公園において〜", description: "#公園 #サインデザイン #挨拶 #いきもの感 #鏡" },
  ],
  [
    { src: "images/コンテク/桝田.webp", title: "煙霧体を操作するインタラクティブ体験装置の提案", description: "#煙 #霧 #インタラクション" },
    { src: "images/コンテク/佐久間.webp", title: "視覚障害者のための屋内空間における新しい案内手法の提案", description: "#視覚障害者 #空間イメージ #対等" },
    { src: "images/コンテク/錦織.webp", title: "野菜摂取量概算アプリケーションとその活用の提案", description: "#野菜 #栄養素 #食事管理" },
    { src: "images/コンテク/尾原.webp", title: "初対面の相手に認識してもらうための自己紹介の手法", description: "#自己紹介 #友達作り" },
    { src: "images/コンテク/白根.webp", title: "並置混色を楽しみながら理解する表現方法の探求", description: "#並置混色 #知覚心理" },
    { src: "images/コンテク/桝田.webp", title: "煙霧体を操作するインタラクティブ体験装置の提案", description: "#煙 #霧 #インタラクション" },
    { src: "images/コンテク/佐久間.webp", title: "視覚障害者のための屋内空間における新しい案内手法の提案", description: "#視覚障害者 #空間イメージ #対等" },
    { src: "images/コンテク/錦織.webp", title: "野菜摂取量概算アプリケーションとその活用の提案", description: "#野菜 #栄養素 #食事管理" },
    { src: "images/コンテク/尾原.webp", title: "初対面の相手に認識してもらうための自己紹介の手法", description: "#自己紹介 #友達作り" },
    { src: "images/コンテク/白根.webp", title: "並置混色を楽しみながら理解する表現方法の探求", description: "#並置混色 #知覚心理" },
  ],
  [
    { src: "images/意匠/阿部.webp", title: "風景の領域をレイアウトに取り入れた漫画の制作-漫画『虚実の境界』を描いて-", description: "#漫画 #虚実 #境界線 #混乱" },
    { src: "images/意匠/野畠.webp", title: "旅するテーブル-食事を通じて人と人とを繋ぐ移動式テーブル-", description: "#縁食 #一期一会 #食の力" },
    { src: "images/意匠/中島.webp", title: "着用者の表情変化を相手に隠さない仮面の制作", description: "#仮面 #表情" },
    { src: "images/意匠/小松野.webp", title: "吹き付け和紙と発泡スチロールを用いた中空かつ開口部のない一枚から成る紙の立体成形", description: "#紙 #立体成形 #紙漉き" },
    { src: "images/意匠/阿部.webp", title: "風景の領域をレイアウトに取り入れた漫画の制作-漫画『虚実の境界』を描いて-", description: "#漫画 #虚実 #境界線 #混乱" },
    { src: "images/意匠/野畠.webp", title: "旅するテーブル-食事を通じて人と人とを繋ぐ移動式テーブル-", description: "#縁食 #一期一会 #食の力" },
    { src: "images/意匠/中島.webp", title: "着用者の表情変化を相手に隠さない仮面の制作", description: "#仮面 #表情" },
    { src: "images/意匠/小松野.webp", title: "吹き付け和紙と発泡スチロールを用いた中空かつ開口部のない一枚から成る紙の立体成形", description: "#紙 #立体成形 #紙漉き" },
  ],
  [
    { src: "images/人間生活工学/片岡.webp", title: "飲酒と眠気がドライバーの生理反応に与える影響", description: "#飲酒運転 #人間工学"},
    {src: "images/人間生活工学/tkms.webp", title: "歩容による主観的ウェルビーイングと生理反応の関係", description: "#歩行 #幸せ"},
    {src: "images/人間生活工学/片岡.webp", title: "飲酒と眠気がドライバーの生理反応に与える影響", description: "#飲酒運転 #人間工学"},
    {src: "images/人間生活工学/tkms.webp", title: "歩容による主観的ウェルビーイングと生理反応の関係", description: "#歩行 #幸せ"},
    {src: "images/人間生活工学/片岡.webp", title: "飲酒と眠気がドライバーの生理反応に与える影響", description: "#飲酒運転 #人間工学"},
    {src: "images/人間生活工学/tkms.webp", title: "歩容による主観的ウェルビーイングと生理反応の関係", description: "#歩行 #幸せ"},
  
  ],
  [
    { src: "images/材料計画/久保.webp", title: "角度によって見え方が変わるアクリル樹脂製サインの提案", description: "#透明 #光 #サイン" },
    { src: "images/材料計画/平子.webp", title: "香りと色の調和に着目した香るネイルの印象分析", description: "#香るネイル #新感覚ネイル #香りと色の調和" },
    { src: "images/材料計画/隅野.webp", title: "製品から「ほっこり」とした印象を感じる要素について", description: "#ほっこり #温かみ" },
    { src: "images/材料計画/日野.webp", title: "聴覚過敏の方々が使用するイヤーマフの選択肢を広げる", description: "#イヤーマフ #音軽減" },
    { src: "images/材料計画/慶田城.webp", title: "アコースティックギターのピックに代わるサンプルの提案", description: "#アコギ #ブラシ #ハンマー" },
    { src: "images/材料計画/田原.webp", title: "材料押出法の3Dプリンターを用いた自作モデルの造形", description: "#3Dプリンター #FDM #プラスチック" },
    { src: "images/材料計画/芹澤.webp", title: "ペットへの愛着形成の要因分析と製品への応用", description: "#ペット #製品 #愛着" },
  ],
  [
    { src: "images/心理/上条.webp", title: "キャラクターに対する好感度の要因とは：知識と経験の影響", description: "#ｷｬﾗｸﾀｰ #好感度 #共感 #かわいい #性格 #知識 #経験" },
    { src: "images/心理/佐藤.webp", title: "歌詞の表示方法の違いがミュージックビデオの印象に与える影響", description: "#MV #文字PV #イージング" },
    { src: "images/心理/上条.webp", title: "キャラクターに対する好感度の要因とは：知識と経験の影響", description: "#ｷｬﾗｸﾀｰ #好感度 #共感 #かわいい #性格 #知識 #経験" },
    { src: "images/心理/佐藤.webp", title: "歌詞の表示方法の違いがミュージックビデオの印象に与える影響", description: "#MV #文字PV #イージング" },
    { src: "images/心理/上条.webp", title: "キャラクターに対する好感度の要因とは：知識と経験の影響", description: "#ｷｬﾗｸﾀｰ #好感度 #共感 #かわいい #性格 #知識 #経験" },
    { src: "images/心理/佐藤.webp", title: "歌詞の表示方法の違いがミュージックビデオの印象に与える影響", description: "#MV #文字PV #イージング" },
  ],
  [
    { src: "images/サステナブル/山田晃.webp", title: "紙皿と紙スプーンとして再利用可能なケーキボックス", description: "#ケーキ #テイクアウト #サステナブル" },
    { src: "images/サステナブル/藤井.webp", title: "自転車用モジュラーアクセサリの持続可能なデザイン", description: "#自転車 #ライト #風力 #SDGs" },
    { src: "images/サステナブル/山田晃.webp", title: "紙皿と紙スプーンとして再利用可能なケーキボックス", description: "#ケーキ #テイクアウト #サステナブル" },
    { src: "images/サステナブル/藤井.webp", title: "自転車用モジュラーアクセサリの持続可能なデザイン", description: "#自転車 #ライト #風力 #SDGs" },
    { src: "images/サステナブル/山田晃.webp", title: "紙皿と紙スプーンとして再利用可能なケーキボックス", description: "#ケーキ #テイクアウト #サステナブル" },
    { src: "images/サステナブル/藤井.webp", title: "自転車用モジュラーアクセサリの持続可能なデザイン", description: "#自転車 #ライト #風力 #SDGs" },
  ],
  [
    { src: "images/デザイン文化計画/栗田.webp", title: "南房総市千倉町における白間津のオオマチの持続可能なあり方", description: "#祭りバカ #地域の絆 #みんなで楽しむハレの日" },
    { src: "images/デザイン文化計画/南.webp", title: "墨田区における生活者による資源発見・資源活用型のデザインワークショップの実践", description: "#墨田区 #ワークショップ #地域資源 #KJ法" },
    { src: "images/デザイン文化計画/岩下.webp", title: "鋸南町にある空き家を活用した地域の人々の関わりの促進", description: "#自然の中でご飯とおはなし #地元の人が改修した空き家" },
    { src: "images/デザイン文化計画/仁木.webp", title: "墨田区における水害対策用品「避難の緊急度によって形を変化させる防災バッグ」", description: "#水害対策 #防災バッグ #食料棚" },
    { src: "images/デザイン文化計画/田村.webp", title: "歴史的造形物の3Dデータ取得・保存と活用", description: "3D #歴史的造形物 #埴輪 #ハニワ #はにわ" },
    { src: "images/デザイン文化計画/細田.webp", title: "万祝の型紙図案のデジタルデータの取得・活用に基づく新たな表現方法の模索とグッズの提案", description: "#千葉県 #漁師の着物 #デジタルデータの取得と活用" },
    { src: "images/デザイン文化計画/栗田.webp", title: "南房総市千倉町における白間津のオオマチの持続可能なあり方", description: "#祭りバカ #地域の絆 #みんなで楽しむハレの日" },
    { src: "images/デザイン文化計画/南.webp", title: "墨田区における生活者による資源発見・資源活用型のデザインワークショップの実践", description: "#墨田区 #ワークショップ #地域資源 #KJ法" },
    { src: "images/デザイン文化計画/岩下.webp", title: "鋸南町にある空き家を活用した地域の人々の関わりの促進", description: "#自然の中でご飯とおはなし #地元の人が改修した空き家" },
    { src: "images/デザイン文化計画/仁木.webp", title: "墨田区における水害対策用品「避難の緊急度によって形を変化させる防災バッグ」", description: "#水害対策 #防災バッグ #食料棚" },
    { src: "images/デザイン文化計画/田村.webp", title: "歴史的造形物の3Dデータ取得・保存と活用", description: "3D #歴史的造形物 #埴輪 #ハニワ #はにわ" },
    { src: "images/デザイン文化計画/細田.webp", title: "万祝の型紙図案のデジタルデータの取得・活用に基づく新たな表現方法の模索とグッズの提案", description: "#千葉県 #漁師の着物 #デジタルデータの取得と活用" },
  ],
  [
    { src: "images/シスプラ/盧.webp", title: "より没入感のあるインタラクティブ芸術体験：AIと共創する浮世絵インタラクション", description: "#Co-design with machine #HCI #浮世絵 #没入体験" },
    { src: "images/産業環境/竹中.webp", title: "墨田区のものづくりの過程を可視化し認知拡大を図る", description: "#町工場 #事業者 #職人 #トレーディングカード" },
    { src: "images/商店街/山田.webp", title: "街の回遊を促し、PR効果を生み出すバッグとテイクアウトシステムの提案", description: "#テイクアウトバッグ #オリジナルグッズ" },
    { src: "images/商店街/田中.webp", title: "つなげるほどに人も繋がるあづまテラスのストリートファニチャー", description: "#井戸端会議 #個店が所有 #使うのは一緒に" },
    { src: "images/ヤマハ/蓮見.webp", title: "会話における人の関係性を物理的に図式化した会話の遊具の提案", description: "#親と子 #初対面" },
    { src: "images/ヤマハ/式田.webp", title: "町で暮らす多様な人々を主体的な体験者に変化させる遊具のデザイン", description: "#遊び #MOVEMENT #鏡と鏡" },
    { src: "images/ヤマハ/池末.webp", title: "はだし感覚を駆使して「気付き」を誘発させるすみだを歩くための靴の提案", description: "#はだし感覚 #靴 #新たな気付き" },
  ],
      [
        { src: "images/子供/宮脇.webp", title: "放課後遊びを対象に自然な会話を促進する道具の研究", description: "#子ども #遊び #ベーゴマ" },
        { src: "images/子供/井上.webp", title: "子どもの外遊びにおける集団遊びに溶け込みやすくなる遊びの研究", description: "#四吾小 #異年齢 #外遊び #集団遊び #リング鬼" },
        { src: "images/ヤマハ/沖原.webp", title: "福神橋の下における非日常的空間体験の提案", description: "#橋の下 #非日常 #ストリートファニチャー" },
        { src: "images/共創環境/山川.webp", title: "聴覚と視覚に着目した\n空間に心地良い気配をもたらすプロダクトの提案", description: "#気配 #会話音 #振動スピーカー #モビール" },
        { src: "images/共創環境/鶴見.webp", title: "複数人による意見交換に着目した\n重ねて書き込む透明ボードの提案", description: "#透明 #重ねる #ホワイトボード" },
        { src: "images/共創環境/稲垣.webp", title: "香りを用いて手間を楽しみ「書く」による発散を促すプロダクトの提案", description: "#書く #手間を楽しむ#香り" },
        { src: "images/公園プロジェクト/松信.webp", title: "隅田公園における足跡を利用したサインデザインの提案", description: "#公園 #あしあと #サインデザイン" },
        { src: "images/産業環境/赤司.webp", title: "墨田区のものづくりの過程を可視化し認知拡大を図る", description: "#端材 #標本化 #エポキシ樹脂" },
        { src: "images/産業環境/橋本.web", title: "墨田区のものづくりの過程を可視化し認知拡大を図る", description: "#ランディングページ #情報設計 #LP #TP" },
        { src: "images/商店街/坂本.webp", title: "商店街の魅力発信とファン獲得を目指した謎解き街歩きの提案", description: "#謎解き街歩き #気付けばあなたもあづまテラスファン" },
        { src: "images/商店街/清水.webp", title: "夜のあづまテラスにおいて人の気配を感じられる照明の提案", description: "#夜のあづまテラスに着目 #照明" },
        { src: "images/商店街/藤崎.webp", title: "商店街に新たな居場所を創出し、地域の顔となる拠点の提案", description: "#拠点 #休憩スペース" },
      ],
      [],
  ];

  let currentIndex = 0;
  let fadeIn;
  
  function updateImageAndDescription() {
      const mainImage2 = document.getElementById("main-image2");
      const laboPic = document.getElementById("labo_pic");
      const imageIcon = document.getElementById("labo-icon");
      const imageTitle = document.getElementById("labo-title");
      const imageDescription = document.getElementById("labo-description");
      const covering2 = document.getElementById("covering2");
  
      if (fadeIn) clearInterval(fadeIn);
      mainImage2.style.opacity = 0;
      let size = 100;
      let opacity = 0;
  
      laboPic.src = images2[currentIndex].src;
      imageIcon.src = images2[currentIndex].icon;
      imageTitle.textContent = images2[currentIndex].title;
      imageDescription.textContent = images2[currentIndex].description;
  
      fadeIn = setInterval(() => {
          size += 40;
          opacity += 0.05;
          covering2.style.transform = `scale(${1 + size / 500})`;
          mainImage2.style.opacity = opacity;
          laboPic.style.opacity = opacity;
          if (size >= 4500) clearInterval(fadeIn);
      }, 50);
  }
  
  function updateWorks() {
    const workSet = works[currentIndex];

  if (!workSet || workSet.length === 0) {
    // データがない場合、すべての要素を非表示
    [...Array(13)].forEach((_, i) => {
      const workDiv = document.getElementById(`work${i}`);
      const workDiv2 = document.getElementById(`work2-${i}`);
      if (workDiv) workDiv.style.display = "none";
      if (workDiv2) workDiv2.style.display = "none";
    });
    return;
  }
      [...Array(13)].forEach((_, i) => {
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
    
  
  [...Array(13)].forEach((_, i) => {
      document.getElementById(`button2-${i + 1}`).addEventListener("click", () => {
          currentIndex = i;
          updateImageAndDescription();
          updateWorks();
      });
  });
  

  const buttons = document.querySelectorAll('.refbutton2'); // ボタンリスト
  const counter = document.getElementById("counter"); // 1/13 を表示する要素
  
  // ボタンのクリック時の動作をまとめた関数
  function updateSelection() {
      // すべてのボタンから selected クラスを削除
      buttons.forEach(btn => btn.classList.remove('selected'));
      
      // 現在のボタンに selected クラスを追加
      buttons[currentIndex].classList.add('selected');
  
      // 「1/13」の表示を更新（currentIndex は 0 から始まるので +1 する）
      counter.textContent = `${currentIndex + 1}/${buttons.length}`;
  }
  
  // ボタンのクリックイベント
  document.getElementById("next-button2").addEventListener("click", () => {
      // 次のボタンへ進む
      if (currentIndex === buttons.length - 1) {
          currentIndex = 0; // 最初のボタンへ
      } else {
          currentIndex++;
      }
      updateSelection(); // 表示を更新
      updateImageAndDescription();
      updateWorks();
  });
  
  document.getElementById("prev-button2").addEventListener("click", () => {
      // 前のボタンへ戻る
      if (currentIndex === 0) {
          currentIndex = buttons.length - 1; // 最後のボタンへ
      } else {
          currentIndex--;
      }
      updateSelection(); // 表示を更新
      updateImageAndDescription();
      updateWorks();
  });

    // ボタン全てにクラス refbutton がついている場合
     //const buttons = document.querySelectorAll('.refbutton2');
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
        updateImageAndDescription();
    });
  
  window.addEventListener("load", updateImageAndDescription);
  window.addEventListener("load", updateWorks);
        
})();