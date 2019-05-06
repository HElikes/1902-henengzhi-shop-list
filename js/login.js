class login{
    constructor(){
        this.inputUserName = document.querySelector("#inputUserName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.btn = document.querySelector("#btn");
        this.bindEvent();
    }
    bindEvent(){
        this.btn.onclick = () =>{
            let username = this.inputUserName.Value,
                password = this.inputPassword.Value;

            tools.ajax("post","../api/v1/login.php",{username,password},data =>{
                if(data.res_code === 1){
                    alert(data.res_message);
                    window.location.href = "../index.html";
                }
            })    
            return false;
        }
    }
}
new login();