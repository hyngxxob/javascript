(function () {
    paintTodo();
    document.addEventListener('keydown',)
})();

function paintTodo() {
    const header = document.getElementById('header');


    const title = document.createElement("h1");
    const inputBox = document.createElement("input");
    const inputButton = document.createElement("button");
    
    
    inputBox.setAttribute('id', 'input');
    inputBox.type = 'text';
    title.innerHTML = "TODO List"
    inputButton.innerText = "입력"
    inputButton.addEventListener("click", input_lst);
    inputBox.addEventListener("keydown",(e) =>{
        if(e.key == 'Enter'){
            input_lst();
        }
    });

    header.appendChild(title);
    header.appendChild(inputBox);
    header.appendChild(inputButton);
    
}

function input_lst(){
    const input = document.getElementById("input").value;
    if(input != "") {
        const lists = document.getElementById("lists");
        const removeButton = document.createElement("button");
        const list = document.createElement("div");

        list.setAttribute('id','list-item');
        list.innerHTML = input;
        removeButton.innerText = "X";
        removeButton.addEventListener('click', deleteList);

        lists.appendChild(list);
        list.appendChild(removeButton);

        console.log("Input pressed");
        document.getElementById("input").value = "";
    }
}

function deleteList(e) {
    const removeOne = e.target.parentElement;
    removeOne.remove();
}
