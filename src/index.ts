
function GetItem (key: string) : any {

    if (!localStorage.getItem(key)) {
        console.log("There is no such item in localstorage");
        return;
    }

    let value : string | null = localStorage.getItem(key);

    if (value && ( value[0] == "[" || value[0] == "{")) return JSON.parse(value);  

}

function SetItem (key: string, value: any) : void {
    if (localStorage.getItem(key)) {
        console.log("There is item in localstorage with this key");
        return;
    }

    if (typeof value != "string") 
        value = JSON.stringify(value);

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

function clearAll() : void {
    localStorage.clear();
    return ;
}


SetItem("elem", [1,2,3,4,5]);
// SetItem("number", 232);

// RemoveItem("element");

// for(let i = 0; i < 20; i++) {
//     SetItem(i.toString(), i);
// }

console.log(GetItem("elem"))

9
RemoveItem("2")