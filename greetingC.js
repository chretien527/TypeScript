function greeting(name,callback){
    setTimeout(() => {
        callback(null,"Good afternoon " + name)
    }, 3000);
}

greeting("Belise",(error,result) => {
    if(error){
        console.error(error)
    } 
    console.log(result)
})