import {http}   from "../axios/http";

export function apiLogin({username,password}){
    return http.post('/login',{
        username,
        password
    })
}

export function apiGetPhotos() {
    return http.get("/getPhotos");
}


export function apiUpload(file,) {
    const formData = new FormData();
    formData.append("img", file);
    return http.post("/upload", formData);
}
