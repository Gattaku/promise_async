const express = require("express");
const app = express();
const getResult = require("./controllers/getResultFn");

const PORT = 5000;

const url2 = "https://api.github.com/users/Gattaku/repos";

app.get("/", async (req, res) => {
    const result = await getResult.getResultFn(url2);
    console.log("ここは今通ってます");
    res.send(result);
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})