# このリポジトリについて

Python でデスクトップアプリの GUI を React で開発するためのライブラリ eel を使えるようにするためのテンプレート

## 利用させていただいた元リポジトリ

[https://github.com/python-eel/Eel](https://github.com/python-eel/Eel)

こちらの examples ディレクトリの 07-CreateReactApp のコードを元にしています

App.tsx などがクラスコンポーネントだったので関数コンポーネントに変更

また自分用に ChakraUI や Recoil が使えるようになっています（この文章を執筆時点でこの環境でそれらが正常に動作するかは確認できておりません。ChakraUI のコンポーネントは使えてるから多分大丈夫なはず）

vsCode でコード整形できるように eslint と prettier も設定しています

## 環境

Python3 ver9.13

git version 2.37.1.windows.1

npm 8.19.2

node.js v16.18.0

react 17.0.2

**※anaconda などで Python を入れている場合動作確認しておりません。使えない可能性があります。**

## How to use

### Python で仮想環境でプロジェクトを作る

- projectEnvs などのディレクトリを任意の場所に作ってそこをカレントディレクトリにし、python コマンドで仮想環境を作る

```
cd C:\Users\［******］\Py_workSpace\projectEnvs

python -m venv [プロジェクト名]
```

- 出来上がったプロジェクトフォルダに移動、仮想環境に入ってライブラリをインストール

```
cd ./[プロジェクトディレクトリ]

.\Scripts\Activate.ps1　　//このコマンドで仮想環境に入れる(Powershellの場合)

.\Scripts\activate.bat    //コマンドプロンプトの場合はbatファイルの方を指定

(sample_eel) PS C:\Users\［*******］\Py_workSpace\projectEnvs\sample_eel>
//表示がこのようになっていれば仮想環境に入れています

pip install bottle bottle-websocket future whichcraft eel pyinstaller
```

### このリポジトリをプロジェクト内に Clone して利用する

- プロジェクト内に新しく web ディレクトリを作成してその中に Clone
  ディレクトリは空じゃないとエラーが出ます。

```
cd C:\Users\［*******］\Py_workSpace\projectEnvs\sample_eel>web

git clone [リポジトリURL] .
//既存の空のディレクトリにCloneするため最後は「.」
```

- 追跡リポジトリをプロジェクトで使用するものに変更
  変更できてるかの確認は`git remote -v`

```
git remote set-url origin [新しいプロジェクトのリポジトリURL]

git pull origin
```

- カレントディレクトリにて npm インストールとビルド
  ChakraUI や recoil やらのライブラリを元から使っているので、packagejson を確認して使用しないものは削除してください

```
nmp install　//ライブラリのインストール

npm run build　//index.htmlのビルド

git add .

git commit -m "コミットメッセージ"

git push origin main
```

### 動作を確認

- 通常起動

```
Python .\eel_sample_python.py
```

React の index.html の画面が立ち上がれば OK

この場合はビルド後の index.html を読み込んでいます

- Develop 起動
  Powershell を二つ起動しそれぞれで別のコマンドを打つ

```
Python .\eel_sample_python.py true   //trueの引数をつけてPythonファイルを起動
```

```
npm start
```

localhost3000 で先ほどと同じように起動すれば成功

こちらは Public 下の index.html を読み込んでいるので編集すると画面に反映されます

### 実行ファイル作成

```
python -m eel eel_sample_python.py build --onefile --name react-eel-app
```

react-eel-app はファイル名なので自由に変更してください

dist ディレクトリが新しく生成されてその直下に exe ファイルができています

ダブルクリックするとアプリが起動します

web ディレクトリごとデスクトップにコピーして起動しても動作したので、このファイルを渡せば Python 環境がない PC でも利用できます
