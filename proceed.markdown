# React 環境構築と Linter・Formatter 設定

## [参照したサイトはここをクリック](https://qiita.com/ro-komatsuna/items/271eb2c8f430e3dd99ae)

### ○ まずはじめに

- npm：Node Package を管理(manage)するコマンド
  npm は Node.js のデフォルトのパッケージ管理ツールです。npm コマンドを利用することでインターネット上のリポジトリから Node パッケージをインストールしたり、パッケージのバージョン管理をする
- npx：Node Package を実行(execute)するコマンド
  npx は Node.js のパッケージランナーツールです。バージョン 5.2 からデフォルトでインストールされるようになりました。npx コマンドを利用することで Node パッケージをより手軽に実行可能にする

### ○React をインストール

- rtd0131 がプロジェクト名
- 「npx create-react-app rtd0131」を実行  
  →「npm start」で React アイコン表示

### ○Linter の設定

- 「npx eslint —init」を実行 linter として ESlint をインストール  
  → 以下の通り質問に回答した

1. How would you like to use ESLint?  
   : To check syntax, find problems, and enforce code style
2. What type of modules does your project use?  
   :JavaScript modules(import/export)
3. Which framework does your project use?  
   :React
4. Does your project use TypeScript?  
   :No
5. Where does your code run?
   :Browser
6. How would you like to define a style for your project?  
   :Use a popular style guide  
   :Airbnb
7. What format do you want your config file to be in?  
   :JSON
8. Would you like to install them now with npm?  
   :Yes

- 「npx eslint」を実行
- 「./node_modules/.bin/eslint src/App.js」を実行
- 以下はエラー内容  
  :6:5 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  6:5 error JSX not allowed in files with extension '.js' react/jsx-filename-extension  
  7:7 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  8:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  9:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  10:16 error `code` must be placed on a new line react/jsx-one-expression-per-line  
  10:16 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  10:39 error `and save to reload. ` must be placed on a new line react/jsx-one-expression-per-line  
  12:9 error 'React' must be in scope when using JSX react/react-in-jsx-scope  
  ✖ 9 problems (9 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
- エラー解決のために「package.json」内の eslintConfig 内の記載を削除
- 「eslintrc.json」内の「rules」に”react/jsx-filename-extension”:[“error”,{“extensions”:[“.js”,”jsx”]}]を記載
- 「./node_modules/.bin/eslint —fix src/App.test.js」を実行  
  →'React' must be in scope when using JSX とエラー
- 「.eslintrc.js」の「rules」に以下を記載  
  →”react/react-in-jsx-scope”:”off”
- 再度「./node_modules/.bin/eslint —fix src/App.test.js」を実行  
  → エラーはでなかった
- 「package.json」の scripts に ESLint の実行を追加  
  →「”lint”:”eslint —ext .jsx,.js src/“」

### ○Formatter の設定

- 「npm install —save-dev —save-exact prettier」を実行  
  → エラーが出てインストールできていない(package.json にも記載されていない)
- package.json 内の「,」のつけ忘れがあった
- 「npm i -D prettier」を実行
  npm i（省略せずに記述すると npm install）はインストールの命令、-D はインストール先を devDependencies にするための指定
- 「echo {}> .prettierrc.json」で Prettier の設定ファイル  .prettierrc.json（空）を用意
- 「touch .prettierignore」で Prettier の除外ディレクトリやファイルを指定するように, .prettierignore  も追加します。
- ESLint を入れている関係で, ESLint と Prettier で競合するルールがあるので, ESLint 側に設定を追加
- 「npm install —save-dev eslint-config-prettier」で、eslint-config-prettier は, ESLint と Prettier で競合するルールを, ESLint 上でオフにするために使う
- .eslintrc.json  内の  extends  末尾に prettier を追加します。
  公式のコメント通り, Eslint の何の Plugin を使っているかによって, 必要な Prettier の記載を追加。"prettier"  は基本として入れて"prettier/react"  も入れます。
- ESLint の各種ルール（airbnb  とかの）を, prettier  系で上書きして競合ルールをオフにするため, 末尾にいれる必要がある感じです。（後に書かれたもので手前の設定を上書きます）
- プロジェクト下に「.vscode」を作成、中身は「setting.json」（VSCode の設定を記述するファイル）
- VSCode の設定：設定からワークスペースの設定をいじると自動的に.vscode 内の setting.json に設定が記載される
