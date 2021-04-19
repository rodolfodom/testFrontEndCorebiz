export default async function sendData(body) {
  //create data object

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(body),
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Send data
  try {
    const response = await fetch(
        "https://corebiz-test.herokuapp.com/api/v1/newsletter",
        requestOptions
      ),
      json = await response.json();
    if (json.status) throw json;
    return json.message;
  } catch (error) {
    return error.message;
  }
}
