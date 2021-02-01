// TODO: Write code to define and export the Employee class
class Employee {

    constructor(id, email, github) {
        this.id = `${data.id}`;
        this.email = `${data.email}`;
        this.github = `${data.github}`;
    }
        
    logInfo() {
        // Wasnt sure if the console logs needed to be in a for loop, also dont know if i should use `this` or `data`
        for (const key in this) {

            console.log(`ID: ${this.id}`);
            console.log(`Email: ${this.email}`);
            console.log(`Github: ${this.github}`);

        }
    }

}

module.exports = Employee;