// UC3: Refactored Code to Use Function for Work Hours Calculation
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to get work hours based on employee type
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Generate employee status and calculate wage
let empCheck = Math.floor(Math.random() * 3);
let empHours = getWorkHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;

console.log("Employee Hours: " + empHours);
console.log("Employee Wage: $" + empWage);
