
export const getDataFromLocalStorage = (key)=>{
    if(typeof(key) !== 'string'){
        return ;
    }

    const data = localStorage.getItem(key);

    if(data === null){
        return null;
    }

    const parsedData = JSON.parse(data);

    if(parsedData.expiry > Date.now()){
        return parsedData.value;
    }
    else{
        localStorage.removeItem(key);
        return null;
    }  
}

export const setDataToLocalStorage = (time , key , value)=>{
    if(typeof(time) !== "number"){
        return;
    }
    
    if(typeof(key) !== "string"){
        return;
    }

    if( typeof(value) !== "object" || Array.isArray(value) === true ){
        return;
    }

    const data = {
        value : value, 
        expiry : Date.now() + time
    };
    console.log(typeof(time));
    const stringifiedData = JSON.stringify(data);

    localStorage.setItem(key , stringifiedData);
}