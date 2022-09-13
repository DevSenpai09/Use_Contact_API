import axios from "axios";

var config = {
  method: "get",
  url: "https://jsonplaceholder.typicode.com/users",
  headers: {},
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error.message);
  });
