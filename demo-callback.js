function greeting(name,callback){
    setTimeout(() => {
        callback(null, "Good Morning "+name)
    },3000)
}

greeting("Gift",(error,greetMessage) => {
    if(error){
        console.log("error occurred")
    }
    console.log(greetMessage)
})

function getUser(id,callback){
    setTimeout(() => {
        let user = {
            id:id,
            username:'Moise',
            email:'moise@yopmail.com'
        }
        callback(null,user)
    }, 2000)
}

getUser(1, (error, user) => {
    if(error){
        console.log("error occurred")
    }
    console.log(user)
})
