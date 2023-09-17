## 非同期処理の勉強

##### promise

・promise は３の状態「pending, resolve, reject」を持つ。resolve:成功、reject:失敗

・.then()でつなぐことで、前の処理を待ってから、次の処理を実施できる。

##### async/await

・上記の Then でつなぐと、処理が長くなり、見にくくなる。そのため、fetch で投げた結果を Promise で返す関数にして、その関数を呼び出すところで async/await を利用すると、どのタイミングで処理が待たれるかがわかりやすくなる。基本はこれを使うこと。

###### 補足

・server 側で処理できることを確認済み。フロントエンドをＲｅａｃｔで作成、ＡＰＩ設計して、バックエンドの server(node.js)で作成して、「Github リポジトリのリスト」を作りたい。Github の description を利用するとそれをトリガーにリスト化できそう。
