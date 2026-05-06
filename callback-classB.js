function greetMe(name,callback){
    setTimeout(() => {
        callback(null, "Good afternoon"+name)
    }, 3000);
}

greetMe('David', (error,message) => {
    if(error){
        console.log(error)
    }
    console.log(message)
})
console.log("I am free to handle this before printing david");


function getUserById(id,callback){
    setTimeout(() => {
        const user={
            id:5,
            username:'Chaste',
            email:'chaste@yopmail.com'
        }
        callback(null,user);
    },3000)
}

getUserById(5, (err,user) => {
    if(err){
        console.log(err);
    }
    console.log(user);
});