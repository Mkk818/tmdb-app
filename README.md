# TMDB-app

こちらのドキュメントを参考に作成したアプリです。<br>
## [【React+TypeScript】Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100)

- Firebaseでデプロイ:https://tmdb-app0818.web.app/
<details>
<summary>ログ</summary>
1.ログイン後、プロジェクト内で`firebase init`

```
% firebase init
     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

<!-- ここにfirebase initコマンドを叩いた場所が表示される -->

Before we get started, keep in mind:

  * You are initializing within an existing Firebase project directory

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.

  // ▲▼キーで上下移動、スペースキーで選択

Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

i  Using project <!-- firebaseのプロジェクト名 --> (<!-- firebaseのプロジェクト名 -->)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that will contain Hosting assets to be uploaded with firebase deploy. If you have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html

i  Detected a .git folder at   <!-- ここにfirebase initコマンドを叩いた場所が表示される -->

i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
<!-- 自動で既存のブラウザに飛びGoogleログイン -->
Waiting for authentication...

✔  Success! Logged into GitHub as <!-- Githubのアカウント名 -->
? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) <!-- Githubのアカウント名/リポジトリ名 -->

✔  Created service account github-action-********* with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_<!-- Firebaseプロジェクト名 -->.
i  You can manage your secrets at <!-- Githubのアカウント名/リポジトリ名 -->/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build
<!-- ↑ここはそのままEnterキー -->
? GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml Yes
<!-- 何回もデプロイやってるのでファイルがあって、上書きしていいか、と言う意味。もちろんYes -->

✔  Created workflow file   <!-- ここにfirebase initコマンドを叩いた場所が表示される -->/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? master
? The GitHub workflow file for deploying to the live channel already exists. Overwrite? firebase-hosting-merge.yml Yes

✔  Created workflow file /Users/mkk/Programming/Practice//.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/********************
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
 % npm run build


> <!-- アプリ名 -->@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  58.68 kB  build/static/js/main.146e7caa.js
  1.78 kB   build/static/js/787.a33fbe1d.chunk.js
  850 B     build/static/css/main.ffe76f3c.css

The project was built assuming it is hosted at ./.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment

 % firebase deploy

=== Deploying to '  <!-- firebaseのプロジェクト名 -->
'...

i  deploying hosting
i  hosting[<!-- firebaseのプロジェクト名 -->]: beginning deploy...
i  hosting[<!-- firebaseのプロジェクト名 -->]: found 14 files in build
✔  hosting[<!-- firebaseのプロジェクト名 -->]: file upload complete
i  hosting[<!-- firebaseのプロジェクト名 -->]: finalizing version...
✔  hosting[<!-- firebaseのプロジェクト名 -->]: version finalized
i  hosting[<!-- firebaseのプロジェクト名 -->]: releasing new version...
✔  hosting[<!-- firebaseのプロジェクト名 -->]: release complete

✔  Deploy complete!

<!-- Firebaseのコンソール -->
Project Console: https://console.firebase.google.com/project/<!-- firebaseのプロジェクト名 -->/overview
<!-- デプロイしたサイトのURL -->
Hosting URL: https://<!-- firebaseのプロジェクト名 -->.web.app
```
</details>
<br>

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
