// state initilization
let state = {
    count : 0
}

// // // // // // // // // // // // // // // // // 
//                                              //         
// write the functionality for onclick button   //
//                                              //        
// // // // // // // // // // // // // // // // //  
function onPressButton(){
    state.count = state.count + 1;
    buttonComponentReRender();
}

// //
// 
// it is just for creating the component 
// and it's necessary attributes
// 
// //
function buttonComponent(counter){
    const button = document.createElement("button");
    button.innerHTML = `counter is ${counter}`;
    button.setAttribute("onclick", "onPressButton()");
    return button;
}


// // // //
//
// For Rendering it should get the coonatiner in which
// it is rendering, call the component that it is trying t
//o render 
// with it's state
// and append as a children
//
// // // //                                         // // // //
function buttonComponentReRender(){
    const list = document.getElementById("list");
    list.innerHTML = ``;
    // while calling component always pass state
    const button = buttonComponent(state.count);
    list.appendChild(button);
}


buttonComponentReRender();