export default async function searchSong(name) {
    let data;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      await fetch(`http://localhost:8080/api/songs/search?name=${name}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            data = result;
        })
        .catch((error) => console.error(error));
      return data;
}