// UC8: Store Daily Wage in a Map and Compute Total Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

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
let totalWorkingDays = 0;
let dailyWageMap = new Map();

// Loop until max hours or max days is reached
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(empCheck);
    totalEmpHours += workHours;

    // Store daily wage in a Map
    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWageMap.set(totalWorkingDays, dailyWage);
}

// Compute total wage from Map
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);

console.log("Day-wise Wages: ", dailyWageMap);
console.log("Total Employee Wage Computed from Map: $" + totalWage);
