const savetolocalStorage = (person) =>{
    let nam = getlocalStorage();

    if(!nam.includes(person)){
        nam.push(person)
    }

    localStorage.setItem("nam", JSON.stringify(nam));
}

const getlocalStorage = () =>{

    let localStorageData = localStorage.getItem("nam");
   
    // if(localStorage.getItem("nam")){
    // array = JSON.parse(localStorage.getItem("nam"));
    // }

    if(localStorageData === null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removefromlocalStorage = (person) =>{
    let nam = getlocalStorage();

    let nameIn = nam.indexOf(person);

    nam.splice(nameIn, 1);

    localStorage.setItem("nam", JSON.stringify(nam));
}

const randomize = (n) =>{

    let arr = getlocalStorage();
    let w = arr.length;
    let empty = [];
    let size = 0;


    // empty = arr.map(num =>({num, sort: Math.random()})).sort()


    let i = 0;
    
    // let holding = [...arr].sort(()=> Math.floor(Math.random() - 0.5));
    // size = Math.ceil(w / n);

    // for(let i = 0; i < n; i++){
    //     let sm = holding.splice(0, size);

    //     if(i == n -1 && sm.length < 2){
    //         sm = holding.splice(0, holding.length);
    //     }
    //     empty.push(sm)

    // }

    // return empty;


    if(w % n === 0){
        size = Math.floor(w / n);
        while(i < w){
            empty.push(arr.slice(i, i += size));
        }
    }else{
        n--;
        size = Math.floor(w / n);
        if(w % size === 0){
            size--;
            while(i < size * n){
                empty.push(arr.slice(i, i += size));
            }
            empty.push(arr.slice(size * n));
        } 
    }
    return empty;


}

export { randomize, savetolocalStorage, getlocalStorage, removefromlocalStorage }