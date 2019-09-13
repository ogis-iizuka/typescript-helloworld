//明示的にimplementsしなくても、属性があれば自動的にimplementsされる。
//この場合はPersonをimplementsしている。
var Student = /** @class */ (function () {
    //コンストラクタ引数にpublicで指定した場合は、公開フィールドとなる。
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
//let user = "Jane User";
//let user = {firstName : "Jane",lastName : "User"}
var user = new Student("Jane", "User");
console.log(greeter(user));
//document.body.textContent = greeter(user);
//# sourceMappingURL=greeeter.js.map