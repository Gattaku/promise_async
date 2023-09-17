// const url1 = "https://api.github.com/users/Gattaku/repos";

// const getGithubRepository = (accessPage) => {
//     fetch(accessPage).then(res => res.json())
//         .then(json => {
//             console.log(`これは非同期処理成功時のメッセージです`);
//             return json;
//         }).catch(error => {
//             console.error(`これは非同期処理失敗時のメッセージです : ${error}`);
//             return null;
//         })
// }


// const message = "Githubの１番目に入っているrepository";
// const getRepositorys = getGithubRepository(url1);
// console.log(`${message} : ${getRepositorys[0].name}`)