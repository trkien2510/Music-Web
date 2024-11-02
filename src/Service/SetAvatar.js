export default async function setAvatar(avatar) {
    if(localStorage.getItem("token") == null){
        alert("Bạn cần đăng nhập!");
        return;
    }
    let data;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const formdata = new FormData();
    formdata.append("file", avatar.files[0]);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };

    await fetch("http://localhost:8080/api/users/avatar", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        data = result
    })
    .catch((error) => console.error(error));
    return data
}