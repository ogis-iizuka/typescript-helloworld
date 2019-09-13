//以下の写経
//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

//明示的にimplementsしなくても、属性があれば自動的にimplementsされる。
//この場合はPersonをimplementsしている。
class Student{

    fullName : string;

    //コンストラクタ引数にpublicで指定した場合は、公開フィールドとなる。
    constructor(public firstName : string,public lastName : string){
        this.fullName = firstName + " " + lastName;
    }

}

interface Person {
    firstName : string,
    lastName : string
}

function greeter(person:Person){
    return "Hello," + person.firstName + " " + person.lastName;
}

//let user = "Jane User";
//let user = {firstName : "Jane",lastName : "User"}
let user = new Student("Jane","User")

console.log(greeter(user))
//document.body.textContent = greeter(user);
