# React勉強
React.js & Next.js 超入門を参考に勉強する．

## docker 関連
windowsにnode.jsをインストールしたくないため，Dockerを使って開発することにする．
imageはnode:14を用いる
```
docker-compose up -d
docker-compose exec app /bin/bash

docker-compose down
```

## プロジェクトの作成まで
プロジェクトの作成
dockerコンテナに入って以下のコマンドでプロジェクト作成
```
npx create-react-app <プロジェクト名>
```

> Success! Created react_app at /app/react_app
> Inside that directory, you can run several commands:
> 
>   `yarn start`
>     Starts the development server.
> 
>   `yarn build`
>     Bundles the app into static files for production.
> 
>   `yarn test`
>     Starts the test runner.
> 
>   `yarn eject`
>     Removes this tool and copies build dependencies, configuration files
>     and scripts into the app directory. If you do this, you can’t go back!
> 
> We suggest that you begin by typing:
>   
>   `cd react_app`<br>
>   `yarn start`
>   
