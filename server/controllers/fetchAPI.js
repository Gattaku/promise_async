exports.fetchFn = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(json => {
                console.log(`これは非同期処理成功時のメッセージです`);
                return resolve(json);
            }).catch(error => {
                console.error(`これは非同期処理失敗時のメッセージです : ${error}`);
                return reject(null);
            })
    })
}