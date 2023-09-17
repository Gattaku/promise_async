const fetchAPI = require("./fetchAPI");

exports.getResultFn = async (url) => {
    try {
        const result = await fetchAPI.fetchFn(url);
        console.log(result[0].name);
        return result;
    } catch (err) {
        console.error(error);
    }
}