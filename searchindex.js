Object.assign(window.search, {"doc_urls":["index.html#長野高専-情報技術研究部-2024年度資料","basic_knowledge/basic_knowledge.html#基本的な知識","terminal/terminal.html#ターミナルの操作","terminal/how_to_shell.html#シェルの見方","terminal/how_to_comannd.html#コマンドの見方","terminal/how_to_comannd.html#コマンド","terminal/how_to_comannd.html#サブコマンド","terminal/how_to_comannd.html#オプション","terminal/how_to_comannd.html#引数","terminal/comannd_collection.html#よく使うコマンド集","terminal/comannd_collection.html#ls","terminal/comannd_collection.html#cd","terminal/comannd_collection.html#mv","terminal/comannd_collection.html#mkdir","terminal/comannd_collection.html#rm","terminal/comannd_collection.html#pwd"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":4,"breadcrumbs":1,"title":1},"11":{"body":6,"breadcrumbs":1,"title":1},"12":{"body":3,"breadcrumbs":1,"title":1},"13":{"body":1,"breadcrumbs":1,"title":1},"14":{"body":1,"breadcrumbs":1,"title":1},"15":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":6,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":0,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":6,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"Introduction » 長野高専 情報技術研究部 2024年度資料","id":"0","title":"長野高専 情報技術研究部 2024年度資料"},"1":{"body":"ここではこれからどの分野に進んでも必要になるであろう知識をまとめていきます。","breadcrumbs":"基本的な知識について » 基本的な知識","id":"1","title":"基本的な知識"},"10":{"body":"よくプログラミングではフォルダのことをディレクトリ(directory)と呼ばれます。（呼ばれたり呼ばれなかったり） 使い方は簡単でlsと打つだけです。最初はアイコンや色はついていないと思いますがカスタマイズするのはとても楽しいのでぜひやってみて下さい。画像で使っているは exa です。 lsの実行例 しかしlsだけでは 見えない ファイルがあります。（名前がピリオド.から始まってるもの） そのフォルダにあるすべてのファイルやフォルダを見るには-aオプションを使います。 ls -aの実行例 すると一気に表示されるファイルやフォルダが増えました。 他にもオプションがあるので調べてみてください。","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » ls","id":"10","title":"ls"},"11":{"body":"基本的に下記のように使います。 cd <移動したいディレクトリ> 知ってると便利なもの コマンド 説明 cd .. 一個前のディレクトリに移動 cd - 前回cdコマンドを実行したディレクトリに移動。 cd / ルートフォルダに移動 cd ~ ホームディレクトリに移動","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » cd","id":"11","title":"cd"},"12":{"body":"基本的に下記のように使います。 mv [オプション] <どれを/なにを> <どこに/なにに> mvコマンドの実行例（名前） apple.txtファイルがbanana.txtファイルに名前が変わっている事が確認できました。 mvコマンドの実行例（名前と場所） 名前と場所を両方変えることもでき、banana.txtがttフォルダの中にapple.txtとして保存されています。","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » mv","id":"12","title":"mv"},"13":{"body":"基本的に下記のように使います。 mkdir [オプション] <ディレクトリ名>","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » mkdir","id":"13","title":"mkdir"},"14":{"body":"rm [オプション] <ファイルやディレクトリ> フォルダを消すときは-rオプションが必要ということを忘れないようにしましょう。","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » rm","id":"14","title":"rm"},"15":{"body":"pwdは自分がいまどのディレクトリにいるのかを見るために使われるコマンドです。","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » pwd","id":"15","title":"pwd"},"2":{"body":"ここではターミナル（いわゆる黒い画面）との対話の仕方を学びます。","breadcrumbs":"ターミナルの操作 » ターミナルの操作","id":"2","title":"ターミナルの操作"},"3":{"body":"","breadcrumbs":"ターミナルの操作 » シェルの見方 » シェルの見方","id":"3","title":"シェルの見方"},"4":{"body":"ここでコマンドの例を見せます。 git commit -m \"ここにはコミットメッセージを入れるといいらしい\" ではこのコマンドはどのような要素で構成されているのでしょうか。 下記の表に示します。 要素 説明 git コマンド commit サブコマンド -m オプション \"任意の文字列\" 引数 では具体的に見ていきましょう。","breadcrumbs":"ターミナルの操作 » コマンドの見方 » コマンドの見方","id":"4","title":"コマンドの見方"},"5":{"body":"ここにはアプリ名が入ります。","breadcrumbs":"ターミナルの操作 » コマンドの見方 » コマンド","id":"5","title":"コマンド"},"6":{"body":"コマンドで指定したアプリを使って 何 をしたいのか（どの機能を利用したいのか）が入ります。","breadcrumbs":"ターミナルの操作 » コマンドの見方 » サブコマンド","id":"6","title":"サブコマンド"},"7":{"body":"オプションはコマンドの振る舞いを変更したり、追加の情報を提供したりする物です。","breadcrumbs":"ターミナルの操作 » コマンドの見方 » オプション","id":"7","title":"オプション"},"8":{"body":"引数にはコマンドに渡される追加の情報が入ります。","breadcrumbs":"ターミナルの操作 » コマンドの見方 » 引数","id":"8","title":"引数"},"9":{"body":"コマンド 説明 ls 現在のディレクトリにどのようなファイルやフォルダがあるかを見る。 cd ディレクトリを移動する。 mv ファイルの名前を変えたり場所を変えたりする。 mkdir フォルダを作成する rm ファイルの削除などを行う pwd 現在自分のいるディレクトリを確認する。","breadcrumbs":"ターミナルの操作 » よく使うコマンド集 » よく使うコマンド集","id":"9","title":"よく使うコマンド集"}},"length":16,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"0":{"2":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"d":{"df":2,"docs":{"11":{"tf":2.6457513110645907},"9":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"10":{"tf":2.0},"9":{"tf":1.0}}}},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"k":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"9":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":2,"docs":{"12":{"tf":2.0},"9":{"tf":1.0}}}},"p":{"df":0,"docs":{},"w":{"d":{"df":2,"docs":{"15":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"9":{"tf":1.0}}}}}},"breadcrumbs":{"root":{"2":{"0":{"2":{"4":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"d":{"df":2,"docs":{"11":{"tf":2.8284271247461903},"9":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"s":{"df":2,"docs":{"10":{"tf":2.23606797749979},"9":{"tf":1.0}}}},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"k":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":2,"docs":{"12":{"tf":2.23606797749979},"9":{"tf":1.0}}}},"p":{"df":0,"docs":{},"w":{"d":{"df":2,"docs":{"15":{"tf":1.4142135623730951},"9":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"14":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}}},"title":{"root":{"2":{"0":{"2":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"d":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}},"m":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":1,"docs":{"12":{"tf":1.0}}}},"p":{"df":0,"docs":{},"w":{"d":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});