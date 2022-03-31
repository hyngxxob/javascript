(function () {
    paintTodo();
})();

function paintTodo() {
    const header = document.getElementById('header');

    const title = document.createElement("h1");

    const inputBox = document.createElement("input");
    inputBox.style.width = "80%";
    inputBox.style.fontSize = "2rem";
    inputBox.setAttribute('id', 'input');
    inputBox.type = 'text';

    const inputButton = document.createElement("button");
    inputButton.style.marginLeft = "5%";
    
    title.innerHTML = "T&nbsp;&nbsp;O&nbsp;&nbsp;D&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;i&nbsp;&nbsp;s&nbsp;&nbsp;t "
    title.style.marginBottom = "5%";

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
        const items_container = document.getElementById("items_container");

        const list_item = document.createElement("div");
        list_item.setAttribute('id','list-item');

        const todo = document.createElement("span");
        todo.setAttribute('id', 'todo');
        todo.style.width = "100%";
        todo.innerHTML = input;

        const chkBox = document.createElement("input");
        chkBox.style.marginRight = "3%";
        chkBox.setAttribute('type','checkbox');
        chkBox.addEventListener('click', chk_indicator)

        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.addEventListener('click', deleteList);

        
        list_item.appendChild(chkBox);
        list_item.appendChild(todo);
        list_item.appendChild(removeButton);
        items_container.appendChild(list_item);

        console.log("Input pressed");
        document.getElementById("input").value = "";
    }
}

function deleteList(e) {
    const removeOne = e.target.parentElement;
    removeOne.remove();
}

function chk_indicator(e) {
    const indicator = e.target.checked;
    if(indicator) {
        e.target.nextSibling.id = "todo_Checked";
    } else {
        e.target.nextSibling.id = "todo";
    }
}