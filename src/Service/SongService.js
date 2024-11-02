export async function getAllSong(){
    let data;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    await fetch("http://localhost:8080/api/songs", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            data = result;
        })
        .catch((error) => console.error(error));
    return data;
}
export async function getThumbnail(id) {
    let thumbnail;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    await fetch(`http://localhost:8080/api/songs/thumbnail?id=${id}`, requestOptions)
        .then((response) => response.blob())
        .then((result) => {
            thumbnail = URL.createObjectURL(result);
        })
        .catch((error) => console.error(error));
    return thumbnail;
}

export async function getSongByArtist(nickname){
    let data;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    await fetch(`http://localhost:8080/api/songs/artist?nickname=${nickname}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            data = result;
        })
        .catch((error) => console.error(error));
    return data;
}
export default {getAllSong, getThumbnail,getSongByArtist}