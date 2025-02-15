(function() {
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
  {src: "images/人間生活工学/片岡.webp", title: "tkms versons", description: "#飲酒運転 #人間工学"},
  {src: "images/人間生活工学/片岡.webp", title: "飲酒と眠気がドライバーの生理反応に与える影響", description: "#飲酒運転 #人間工学"},
  {src: "images/人間生活工学/片岡.webp", title: "tkms verson", description: "#飲酒運転 #人間工学"},
  {src: "images/人間生活工学/片岡.webp", title: "飲酒と眠気がドライバーの生理反応に与える影響", description: "#飲酒運転 #人間工学"},
  {src: "images/人間生活工学/片岡.webp", title: "tkms verson", description: "#飲酒運転 #人間工学"},

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
];

 
function updateWorks() {
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

window.addEventListener("load", updateWorks);

  
})();