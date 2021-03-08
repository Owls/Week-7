//1
class Person 
{

    constructor(name, age, pet) 
    {
        this.name = name;
        this.age = age;
        this.pet = pet;
    }

    getName() 
    {
        return this.name;
    }

    getAge() 
    {
        return this.age;
    }
}

let p = new Person("Jorge", 30, "Husky");
console.log(p.getName());
console.log(p.getAge());
console.log(p.pet);

//2
class Employee extends Person
{
    constructor(name, age, pet, ident, companyName) 
    {
        super(name,age,pet);

        this.companyName = companyName;
        this.ident = ident;
    } 

    getCompanyName()
    {
        return this.companyName;
    }

    getid()
    {
        return this.ident;
    }
}

let q = new Employee("Jorge", 30, "Husky", "Y7568", "Web Development Solutions Incorporated");
console.log(q.getid());
console.log(q.companyName);


//3
class Manager extends Employee
{
    constructor(name, age, pet, ident, companyName, employees)  
    {
        super(name,age,pet,ident, companyName); 
    
        this.employees = employees;
    } 

    newEmployees() 
    {
        this.employees.push(`${this.name}, ${this.ident}`);
    }
}

let r = new Manager("Bill", 35, "Borb", "Z5678", "Web Development Solutions Incorporated", ["Chips", "Dips", "& Automobiles"] );
r.newEmployees();
console.log(r.employees);


//4
class Clerk extends Employee
{
    constructor(name, age, pet, ident, companyName, superID)  
    {
        super(name,age,pet,ident, companyName); 

        this.superID = superID;
    } 

    getSuperID()
    {
        return this.superID;
    }
}

//5
let currentID = 1;

//6
let boss = new Manager("Mark", 28, "Octo", currentID++, "Web Development Solutions Incorporated", [] );
console.log(boss);

//7
let clerk1 = new Clerk("Jon", 29, "Turtle", currentID++, "Web Development Solutions Incorporated", boss.getid());
console.log(clerk1);

//8
let clerk2 = new Clerk("Norm", 45, "Turtle", boss.getid(), "Web Development Solutions Incorporated", currentID++);
console.log(clerk2);

//9
boss.newEmployees({name: clerk1.name, ident: clerk1.ident})
console.log(boss);

//10
boss.newEmployees({name: clerk2.name, ident: clerk2.ident})
console.log(boss);

//11
console.log(clerk1.getSuperID());
console.log(clerk2.getSuperID());

//12
console.log(boss.employees);