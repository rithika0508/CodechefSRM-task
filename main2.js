function add_list(e){

    var add_input=document.getElementById("text");
    var btn=document.querySelector(".add_task>button");

    var un_fin=document.getElementById("unfinished");
    var fin=document.getElementById("finished");
    var create1=document.createElement("li");
    var create2=document.createElement("button");
    create2.className='del';
    var create3=document.createElement("button");
    create3.className='tick';
    create1.className='list';
    create2.innerHTML="delete";
    create3.innerHTML="✔"; 
    if(add_input.value!==""){
        create1.textContent=add_input.value;
        add_input.value="";
        console.log(create1);
        un_fin.appendChild(create1);
        create1.appendChild(create2);
        create1.appendChild(create3);
    }
    create3.addEventListener('click',function(){
        var shift=this.parentNode
        shift.remove();
        fin.appendChild(shift);
    })
    create2.addEventListener('click',function(){
        var remove=this.parentNode
        remove.remove();
    })
}