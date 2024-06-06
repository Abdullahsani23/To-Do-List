var input = document.getElementById('textInp')
var list = document.getElementById("odList")
// add button to create a list//
function add(){
var itemList = document.createElement("li")
list.appendChild(itemList)
itemList.innerHTML = input.value
itemList.style.borderBottom ="1px solid  black"

// create a edit button//
var editBtn = document.createElement("button")
editBtn.innerHTML = "Edit"
itemList.appendChild(editBtn)
editBtn.onclick = function(){
var editInput = document.createElement("input")
editInput.type = "text"
editInput.value = input.value
list.replaceChild(editInput, itemList);

//save with enter key//
editInput.addEventListener("keypress",function(event){
if(event.key === "Enter"){
    itemList.innerHTML = editInput.value;
    list.replaceChild(itemList, editInput)

}
})

}




// delet button//
var delBtn = document.createElement("button")
delBtn.innerHTML = "Delet"
itemList.appendChild(delBtn)
delBtn.onclick = function (){
list.removeChild(itemList)
}


console.log(delBtn);
input.value =""
// console.log(itemList);

}