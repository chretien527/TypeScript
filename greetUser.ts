type User = {
    name: string;
    age: number;
};

function greetUser(user: User): string {
    return `Hello ${user.name}, you are ${user.age} years old`;
}

console.log(greetUser({name:'Alice', age: 20}));