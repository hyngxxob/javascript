(function () {
    paintTodo();
    Menubar();
})();

function paintTodo() {
    document.getElementById("map-container").style.display = "none";
    const header = document.getElementById('header');

    const title = document.createElement("h1");

    const input_container = document.createElement("div");
    input_container.setAttribute('id','input-container');

    const inputBox = document.createElement("input");
    inputBox.style.width = "60%";
    inputBox.style.fontSize = "2rem";
    inputBox.style.borderRadius = "16px";
    inputBox.style.border = "0";
    inputBox.style.padding = "0 48px";
    inputBox.setAttribute('id', 'input');
    inputBox.type = 'text';

    const inputButton = document.createElement("button");
    inputButton.style.marginLeft = "5%";
    inputButton.setAttribute('id','inputBtn')
    inputButton.innerText = "입력"
    inputButton.addEventListener("click", input_lst);
    inputBox.addEventListener("keydown",(e) =>{
        if(e.key == 'Enter'){
            input_lst();
        }
    });
    
    title.innerHTML = "T&nbsp;&nbsp;O&nbsp;&nbsp;D&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;i&nbsp;&nbsp;s&nbsp;&nbsp;t "
    title.style.marginBottom = "5%";

    header.appendChild(title);
    input_container.appendChild(inputBox);
    input_container.appendChild(inputButton);
    header.appendChild(input_container)
    
}

function Menubar() {
    const base = document.getElementById("menu-container");
    const main = document.createElement("div");
    main.setAttribute('class','menu-item');
    main.addEventListener('click', paintMain);
    main.innerHTML = "Todolist";
    

    const map = document.createElement("div");
    map.setAttribute('class','menu-item');
    map.addEventListener('click', paintMap);
    map.innerHTML = "지도";

    base.appendChild(main);
    base.appendChild(map);
}

function paintMain() {
    document.getElementById("list-container").style.display = "block";
    document.getElementById("map-container").style.display = "none";
}

function paintMap() {
    document.getElementById("map-container").style.display = "block";
    document.getElementById("list-container").style.display = "none";
    const temp = document.getElementById("map-container");
}


function input_lst(){
    const input = document.getElementById("input").value;
    if(input != "") {
        const items_container = document.getElementById("items-container");

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
 