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
        const items_container = document.getElementById("items_container");

        const list_item = document.createElement("div");
        list_item.setAttribute('id','list-item');

        const todo = document.createElement("span");
        todo.setAttribute('id', 'todo');
        todo.style.width = "100%";
        todo.innerHTML = input;

        const chkBox = document.createElement("input");
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
        document.getElementById('todo').setAttribute('id','todo_Checked');
    } else document.getElementById('todo_Checked').setAttribute('id','todo');
}