export default async function login(username, password){
    let data;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "username": username,
        "password": password
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      await fetch("http://localhost:8080/api/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            data = result;
        })
        .catch((error) => console.error(error));
    return data
}