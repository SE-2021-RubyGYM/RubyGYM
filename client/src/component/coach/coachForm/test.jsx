import axios from "axios";

export default function Test() {
  const url = "http://localhost:5000/api/users";

  const getData = () => {
    axios({
      method: "POST",
      url: url,
      data: {},
    })
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((e) => {});
  };

  return <div onClick={getData}>Helo world</div>;
}
