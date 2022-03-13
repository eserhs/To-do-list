let buttonDOM = document.getElementById('button');
let liDOM = document.getElementById("pll")
let alertDOM = document.getElementById('alert');
let textDOM = document.getElementById('inputText');


buttonDOM.addEventListener('click',tıkladıda);
liDOM.addEventListener('click',DeleteToLi)


const alertlive =(msj,baslık)=> `
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>${baslık}</strong>${msj}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

`






function tıkladıda(event){
    event.preventDefault()
 
    const isEmpy = str =>str.trim().length;
   
   if (isEmpy(textDOM.value)) {
        const lodo = document.createElement('div')
      
    lodo.classList.add("ulClass");
    
    const newli = document.createElement('li');
    newli.innerHTML=textDOM.value;
    newli.classList.add('li-class')
    lodo.appendChild(newli)

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='fi fi-br-cross'></i>"
    deleteButton.classList.add('chek-btn')
    lodo.appendChild(deleteButton)
    console.log(lodo)
    liDOM.appendChild(lodo);
    textDOM.value = "";
        alertDOM.innerHTML = alertlive("başarılı","Girilen yazı : ");
      
    }else {
       alertDOM.innerHTML = alertlive("başrısız","Girilen yazı : ");
       textDOM.value = "";
      
    }



};

function DeleteToLi(event) {
  const item = event.target;

 if (item.classList[0]==='chek-btn') {
   const todo = item.parentElement;
   todo.remove();
  
  

}
if(item.classList[0]==='li-class'){
  const todoli = item.parentElement;
  todoli.classList.toggle("compend");

}

}
