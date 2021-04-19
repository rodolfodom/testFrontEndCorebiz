export default async function getProducts() {
  const response = await fetch(
      "https://corebiz-test.herokuapp.com/api/v1/products"
    ),
    json = await response.json();
  return json;
}
