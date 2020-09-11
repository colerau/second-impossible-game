// console.log("yeet");

const BACKEND_URL = "http://localhost:3000";
fetch(`${BACKEND_URL}/users`)
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp));

