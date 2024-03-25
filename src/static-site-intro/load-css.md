# cssを読み込む
ここからは実際にcssを適用させていきます。  

**ここから編集するファイルはhtmlファイルです**

htmlファイルのheadタグの中で`link`と打つと補完が表示されます。
そこで`link:css`を選択し`enter`を押します。

![cssを読み込む](./img/load-css.png)

そうすると`<link rel="stylesheet" href="style.css">`このように補完されます。
この`href="<hogehoge>"`のところではcssファイル名を入れます。
（このままでも動くのですが）
試しに`""`の中(`style.css`)を消して`./`と打ってみましょう。

![hokan](./img/load-css-hokan.png)

そうすると現在のフォルダにあるファイルの候補を表示してくれます。
そこで`style.css`を指定します。  

bodyタグのなかも編集します。

```html
    <div class="main">
        <h1>Hello World</h1>
    </div>
```

最終的なhtmlファイルのコードを示します。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="main">
        <h1>Hello World</h1>
    </div>
</body>

</html>
```

これでcssの読み込みは終了です。