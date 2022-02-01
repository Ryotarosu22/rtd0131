#○create-react-app
・rtd0131 がプロジェクト名
・「npx create-react-app rtd0131」を実行
→「npm start」で React のアイコンの画面が表示された
○Linter
・「npx eslint —init」を実行し linter として ESlint をインストール
→ 以下の通り質問に回答した
How would you like to use ESLint?
: To check syntax, find problems, and enforce code style
What type of modules does your project use?
:JavaScript modules(import/export)
Which framework does your project use?
:React
Does your project use TypeScript?
:No
Where does your code run?
:Browser
How would you like to define a style for your project?
:Use a popular style guide
:Airbnb
What format do you want your config file to be in?
:JSON
Would you like to install them now with npm?
:Yes
・「npx eslint」を実行
・「./node_modules/.bin/eslint src/App.js」を実行
・「package.json」内の eslintConfig 内の記載を削除
・「eslintrc.json」内の「rules」に”react/jsx-filename-extension”:[“error”,{“extensions”:[“.js”,”jsx”]}]を記載
・「./node_modules/.bin/eslint —fix src/App.test.js」を実行
→'React' must be in scope when using JSX とエラー
・「.eslintrc.js」の「rules」に以下を記載
→”react/react-in-jsx-scope”:”off”
・再度「./node_modules/.bin/eslint —fix src/App.test.js」を実行
→ エラーはでなかった
・「package.json」の scripts に ESLint の実行を追加
→「”lint”:”eslint —ext .jsx,.js src/“」
・○Formatter
・「npm i -D prettier」を実行
・「echo {}> .prettierrc.json」で Prettier の設定ファイル.prettierrc.json（空）を用意
・「touch .prettierignore」で Prettier の除外ディレクトリやファイルを指定するように,.prettierignore も追加します。
・ESLint を入れている関係で, ESLint と Prettier で競合するルールがあるので, ESLint 側に設定を追加します。
・「npm install —save-dev eslint-config-prettier」で、eslint-config-prettier は, ESLint と Prettier で競合するルールを, ESLint 上でオフにするために使うものです。
・.eslintrc.json 内の extends 末尾に prettier と"prettier/react"を追加。
・ESLint の各種ルール（airbnb とかの）を,prettier 系で上書きして競合ルールをオフにするため, 末尾にいれる必要がある感じです。（後に書かれたもので手前の設定を上書きます）
・プロジェクト下に「.vscode」を作成、中身は「setting.json」（VSCode の設定を記述するファイル）
・VSCode の設定：設定からワークスペースの設定をいじると自動的に.vscode 内の setting.json に設定が記載される

#

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
