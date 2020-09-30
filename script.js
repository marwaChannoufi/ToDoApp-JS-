document.querySelector('.todo-header').addEventListener('submit',function addItem(e){
    e.preventDefault();
    var input = document.getElementById("input").value
if(input!==''){
    document.querySelector('.list-to-do').innerHTML =`
                                                    <li class="item">
                                                        <input type="button" class="btn-done style sty-btn" value="complete"></button>
                                                        <input type="button" class="btn-delate style sty-btn" value="delate"></button>
                                                        <p class="to-do style sty-p">${input}</p>
                                                    </li> `
+ document.querySelector('.list-to-do').innerHTML
 document.getElementById("input").value="";
                }
let complete = Array.from(document.querySelectorAll('.btn-done'));
complete.map(el => el.addEventListener('click',()=>{
    console.log('bonjour')
     el.nextElementSibling.nextElementSibling.classList.toggle("toggle")
    if(el.value==="complete"){
        el.value="undo"
       
     } 
     else  el.value="complete"
                        

}))
let delate = Array.from(document.querySelectorAll('.btn-delate'));
delate.map(el => el.addEventListener('click',()=>{el.parentElement.remove()}))
})

