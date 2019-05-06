class Register{
    constructor(){
        this.inputUserName = document.querySelector("#inputUserName");
        this.inputPassword = document.querySelector("#inputPassword");
        this.btn = document.querySelector("#btn");
        this.bindEvent();
    }
    bindEvent(){
        this.btn.onclick = () =>{
            let username = this.inputUserName.value,
                password = this.inputPassword.value;
                console.log(username,password);

            tools.ajax("POST","../api/v1/register.php",{username,password},data =>{
                console.log(data);
            })    
            return false;
        }
    }
}
new Register();