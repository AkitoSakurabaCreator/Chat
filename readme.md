# 某アプリを作ってみた

ReactとFireBaseを駆使してリアルタイムで送受信できるチャット。
某チャットアプリのようにチャンネル別にチャットすることが可能。

## なぜ開発したのか

React自体をそもそもで使ったことがないので学習するためのいいテーマだったり、
近年使用されているリアルタイムチャット技術を学習且つ実際に利用するために開発をしてみようということが開発理由です。

個人的には、漏洩とかも怖いので、セキュリティ面でも勉強や自作のものであれば自分が安心できるという点が大きいです。

## インストールと起動
### リポジトリーをクローン
```bash
git clone https://github.com/AkitoSakurabaCreator/Chat.git
cd chat-app
```

### 起動
```bash
npm run serve

npm run dev
(個人的に使います)
```

## デプロイ
#### Firebaseでのデプロイ
```bash
npm run build
(ビルドが終わったら↓)

firebase deploy
```


## デモ

デプロイした実際のデモ[実際のデモサイトへ遷移する](https://chat-app-350bb.web.app/)

最初に出てくるログインボタンでSSOサインインを行うと自動的にユーザー情報が取得されアカウントへ反映されます。
`名前`, `メールアドレス,``プロフィール画像`が取得されます。

## サードパーティ

### プロジェクト

* [React](https://react.dev/) 
* [Firebase](https://firebase.google.com/)
## スクリーンショット
### [アプリ動作画面](https://github.com/tinode/webapp/)

<p align="center">
  <img src="docs/web-desktop.jpg" alt="Desktop web: full app" width=810 />
</p>
