const deleteToDo = () => {
    $(event.currentTarget).parent().remove();
    // debugger;
    // alert("wannna delete?");
}

const addItemInHTML = function(value) {
    if(value == null) {
        return
    }
    const allList = document.getElementsByClassName("all-list")
    const li = document.createElement("li")
    const itemHTML = `${value} <button onclick="deleteToDo()">Delete</button>`
    allList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value
    addItemInHTML(itemInputValue)

    let itemArray = localStorage.getItem("item");

    if ( itemArray == null ){
        // if itemArray is string or null, so we make new array with key and value zero (0).
        // itemInputValue.
        itemArray = [itemInputValue]
    }else{
        // if itemArray is not string or null, so possibility it was array.
        // if we add using "push" method. 
        itemArray = JSON.parse(itemArray);
        itemArray.push(itemInputValue)
    }

    // change array to string, so it can be saved in localStorage.
    const itemArrayStringify = JSON.stringify(itemArray);   
    
    localStorage.setItem("item",itemArrayStringify);

    itemInput[0].value = ""
}
const runNow = () => {
    const itemFromLS = localStorage.getItem("item")
    
    if (itemFromLS != null){
        const items = JSON.parse(itemFromLS);
        
        items.forEach( item => {
            addItemInHTML(item)
        })
    }
    
}
runNow();