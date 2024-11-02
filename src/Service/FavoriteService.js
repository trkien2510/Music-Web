export default async function getFavorite(username) {
    let data;
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    await fetch(`http://localhost:8080/api/favorites?username=${username}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        data = result;
      })
      .catch((error) => console.error(error));
      return data;
}
