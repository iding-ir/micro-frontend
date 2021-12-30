export const getProducts = async () => {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3001/data/products.json");

    const data = await response.json();

    resolve(data);
  });
};
