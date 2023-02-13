const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const loginBtn = document.querySelector("#loginBtn")
// import axios from "./axios.js"
loginBtn.addEventListener("click",()=>{
    const username = usernameInput.value;
    const password = passwordInput.value;

    axios.post("/login",{
        username,
        password
    }).then((res)=>{
        console.log(res.data)

        const data = res.data;
        // 登录成功
        if(data.state === 1){
            // 保存后端传的token
            const token = data.data.token;
            if(token){
                localStorage.setItem("token",token)
            }
            location.href = "/photo.html"
        } else {
            alert(data.msg)
        }
    })
})
