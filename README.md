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

### VSCode で Prettier を設定する

- 参考 URL：https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code-ja

* 上記 URL のステップ 2 が参考になる

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
