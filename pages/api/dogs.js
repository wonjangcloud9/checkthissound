export default async function handler(req, res) {
  return await fetch("https://dogs-api.nomadcoders.workers.dev").then(
    (response) => response.json()
  );
}
