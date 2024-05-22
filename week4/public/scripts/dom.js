let globalId = 1;

function markAsDone(btnId){
    console.log(btnId);
    const btnFlag = document.getElementById(btnId);
    
    if(btnFlag.innerHTML == "Done"){
        btnFlag.innerHTML = "Mark as Done";
    }
    else{
        btnFlag.innerHTML = "Done";
    }
}

function createChild(title, description, id){
    const child = document.createElement("div");
    
    // create 2 div's and 1 button
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
    const child3 = document.createElement("button");
    const btnId = `list-btn-${globalId}`;

    child3.setAttribute("id", btnId);
    child3.setAttribute("onclick", `markAsDone('${btnId}')`);

    // add title, description and Button holder
    child1.innerHTML = title;
    child2.innerHTML = description;
    child3.innerHTML = "Mark as Done";

    // append all children to parent child
    child.appendChild(child1);
    child.appendChild(child2);
    child.appendChild(child3);
    // set id of child as globalId
    child.setAttribute("id", `list-${globalId}`);
    globalId ++;

    return child;
}

function addTodo(){
    // console.log("Inside adTODO");
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    const child = createChild(title, description, globalId);
    
    // append child to list class div
    document.getElementById("list").appendChild(child);
}

function addTodoBackend(state){
    const parent =  document.getElementById("list");
    parent.innerHTML = "";
    for(let i=0; i<state.length; i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}

setInterval(async ()=> {
    // console.log("Inside setInterval");
    const res = await fetch(`https://sum-server.100xdevs.com/todos`);
    const data = await res.json();
    // console.log(data);
    addTodoBackend(data.todos);
}, 1000);