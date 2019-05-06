class pagination{
    constructor(){
        this.ul = document.querySelector("#page-container");
        this.next = document.querySelector("#next-page");
    }
    render(pageCount,pageIndex){
        console.log(pageCount);
        //用来生成页码li，渲染到页面上
        for(let i = 1; i <= pageCount; i ++){
            let li = document.createElement("li");
            li.className = i ===pageIndex ? "active" : "";
            li.innerHTML = `<a href="javascript:;">${i}</a>`;
            //li添加到next之前
            this.ul.insertBefore(li,this.next);
        }
    }
}

let pagination = new pagination();