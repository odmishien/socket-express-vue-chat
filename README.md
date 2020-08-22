## socket-express-vue-chat

[socket.io](https://socket.io/) と [express](https://expressjs.com/ja/) と [Vue.js](https://jp.vuejs.org/) を使ったチャットアプリのデモです

### 使い方

1. 必要なモジュールを入れる

```bash
yarn install
```

2. ローカルでexpressサーバを立てる

```bash
node index.js
```

これで `http://localhost:3000` にサーバが立ちます

3. ブラウザでいくつかウインドウを開き、`http://localhost:3000` にアクセスする

- アクセスした際にランダムで `room1` か `room2` に入るようになっています
- 実際にメッセージを送ってみて、同期的に表示されるかを確認してみてください

### 参考リンク
- [WebSocket - odmishienメモ倉庫](https://scrapbox.io/odmishien/WebSocket)
- [Socket.io, Express.jsとVue.jsを利用して簡易チャット機能をつくってみよう | アールエフェクト](https://reffect.co.jp/html/socket-io-express-js-vue-js-chat)
