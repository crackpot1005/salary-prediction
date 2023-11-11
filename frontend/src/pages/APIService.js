export default class APIService {
  static postPredict(body) {
    console.log("body:", JSON.stringify(body));
    return fetch(`http://localhost:5000/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
}
