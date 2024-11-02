export default function updateNickname(nickname){
    if(localStorage.getItem("token") == null){
        alert("Bạn cần đăng nhập!");
        return;
    }
    let data;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

    const raw = JSON.stringify({
        "nickname": nickname
    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/api/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        data = result
    })
    .catch((error) => console.error(error));
    return data;
}