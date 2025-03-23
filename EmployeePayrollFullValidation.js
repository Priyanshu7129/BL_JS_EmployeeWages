// UC14: Validate Employee ID, Salary, Gender, and Start Date Using Regex and Error Handling
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

    // Getter and Setter for ID with validation
    get id() {
        return this._id;
    }
    set id(id) {
        if (id > 0) {
            this._id = id;
        } else {
            throw new Error("Invalid ID! Must be a positive number.");
        }
    }

    // Getter and Setter for Salary with validation
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        } else {
            throw new Error("Invalid Salary! Must be a positive number.");
        }
    }

    // Getter and Setter for Gender with validation
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender === "M" || gender === "F") {
            this._gender = gender;
        } else {
            throw new Error("Invalid Gender! Must be 'M' or 'F'.");
        }
    }

    // Getter and Setter for Start Date with validation
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let today = new Date();
        if (startDate <= today) {
            this._startDate = startDate;
        } else {
            throw new Error("Invalid Start Date! Cannot be a future date.");
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

    // Invalid Cases - Uncomment to Test
    // let employee3 = new EmployeePayroll(-3, "Jake", 6000, "M", new Date("2024-02-15")); // Invalid ID
    // let employee4 = new EmployeePayroll(4, "Jack", -1000, "M", new Date("2024-02-15")); // Invalid Salary
    // let employee5 = new EmployeePayroll(5, "Anna", 6000, "X", new Date("2024-02-15")); // Invalid Gender
    // let employee6 = new EmployeePayroll(6, "Sara", 8000, "F", new Date("2025-01-01")); // Future Date
} catch (error) {
    console.error("Error: " + error.message);
}
