// UC4: Calculate Wages for a Month (Assuming 20 Working Days)
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;

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

let totalEmpHours = 0;

// Looping through each working day
for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkHours(empCheck);
}

let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;

console.log("Total Employee Hours in a Month: " + totalEmpHours);
console.log("Total Employee Wage for the Month: $" + totalEmpWage);
