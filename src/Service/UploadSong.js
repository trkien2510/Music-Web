const token = localStorage.getItem("token")
export default async function uploadSong(name, thumbnail, file) {
    let response;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("thumbnail", thumbnail.files[0]);
    formdata.append("file", file.files[0]);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };
    
    await fetch("http://localhost:8080/api/songs", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        response = result;
    })
      .catch((error) => console.error(error));
    return response;
}