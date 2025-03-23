// UC13: Validate Employee Name Using Regex and Error Handling
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Getter and Setter for Name with validation
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 chars
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw new Error("Invalid Name! Must start with a capital letter and have at least 3 characters.");
        }
    }

    // toString method to display employee details
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}

// Testing EmployeePayroll class with Try-Catch
try {
    let employee1 = new EmployeePayroll(1, "John", 5000, "M", new Date("2024-03-20"));
    console.log(employee1.toString());

    let employee2 = new EmployeePayroll(2, "Emma", 7000, "F", new Date("2023-12-10"));
    console.log(employee2.toString());

    // Invalid Name Test Case
    let employee3 = new EmployeePayroll(3, "jake", 6000, "M", new Date("2024-02-15")); // Should throw error
    console.log(employee3.toString());
} catch (error) {
    console.error("Error: " + error.message);
}
