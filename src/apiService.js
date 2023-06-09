import Connection from "./connection";

function ApiService(path, formData, responseCallback, method="GET"){

    const connection = Connection();

    if(method === 'GET'){
        fetch(connection + path)
        .then(response => response.json())
        .then(data => {
            responseCallback(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });
    }else{
        fetch(connection + path, {
            method: method,
            body: JSON.stringify(formData),
            headers:{'Content-type':'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            responseCallback(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });
    }
    

}

export default ApiService;