
const url2 = "https://api.github.com/users/Gattaku/repos";

const getGithubRepository = (accessPage) => {
    return new Promise((resolve, reject) => {
        fetch(accessPage).then(res => res.json())
            .then(json => {
                console.log(`これは非同期処理成功時のメッセージです`);
                return resolve(json);
            }).catch(error => {
                console.error(`これは非同期処理失敗時のメッセージです : ${error}`);
                return reject(null);
            })
    })
};




const getResult = async (accessPage) => {
    try {
        const result = await getGithubRepository(accessPage);
        console.log(`${message} : ${result[0].name}`)
    } catch (err) {
        console.error(err);
    }
}


const message = "Githubの１番目に入っているrepository";
getResult(url2);
console.log("28行目を通ってます。")