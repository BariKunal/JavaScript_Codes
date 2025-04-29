function AddText() {
    let inputTag = document.getElementById("txtTag")
    let ul = document.getElementById("addTask");
    if (inputTag.value === "") {
        alert("Add Text First")
    }
    else{

        let textDiv = document.createElement("div");
        textDiv.style.height="40px"
        textDiv.style.width="330px"
        textDiv.style.border="1px solid black"
        textDiv.style.display="flex"
        textDiv.style.justifyContent="space-between"
        textDiv.style.alignItems="center"
    
        let btnRemove = document.createElement("button")
        btnRemove.innerText="Remove"
        btnRemove.style.height="40px"
        btnRemove.style.width="70px"
        textDiv.innerHTML=inputTag.value;
        textDiv.appendChild(btnRemove)
        ul.appendChild(textDiv)
        inputTag.value = ""
    
        btnRemove.addEventListener("click", function(){
            textDiv.remove()
        })
    }
}