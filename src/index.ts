
function GetItem (key: string) : any {

    if (!localStorage.getItem(key)) {
        console.log("There is no such item in localstorage");
        return;
    }

    return localStorage.getItem(key);
}

function SetItem (key: string, value: any) : void {
    if (localStorage.getItem(key)) {
        console.log("There is item in localstorage with this key");
        return;
    }

    if (typeof value != "string") 
        value = value.toString();

    localStorage.setItem(key, value);

    return;
}

function RemoveItem(key: string) : void {
    if (!localStorage.getItem(key)) {
        console.log("There is no such item in localstorage");
        return;
    }

    localStorage.removeItem(key);

    if (!localStorage.getItem(key)) {
        console.log("Succesfully deleted");
    }

    return;
}

function ClearAll() : void {
    localStorage.clear();
    return ;
}


// SetItem("element", 232);
// SetItem("number", 232);

// RemoveItem("element");

// for(let i = 0; i < 20; i++) {
//     SetItem(i.toString(), i);
// }

// console.log(GetItem("2"))

// ClearAll();

RemoveItem("2")