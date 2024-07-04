FROM node:latest
WORKDIR /app

# 依存関係をコピーしてインストール
COPY package.json yarn.lock ./
RUN yarn install

# アプリケーションのコードをコピー
COPY . .

# デフォルトのコマンドは開発サーバーを起動すること
CMD ["yarn", "dev"]