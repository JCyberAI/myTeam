// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {

        return this.name;

    }

    getId() {

        return this.id;
        
    }
     
    
    getEmail() {

        return this.email;
        
    }

    getRole() {

        return "Employee";
        
    }

    logInfo() {

            console.log(`ID: ${this.id}`);
            console.log(`Email: ${this.email}`);
            console.log(`Github: ${this.github}`);

    }

}

module.exports = Employee;