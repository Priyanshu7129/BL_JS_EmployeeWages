// UC9: Use Arrow Functions for Daily Wage and Hour Calculations
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours based on employee type
const getWorkHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

let totalEmpHours = 0;
let totalWorkingDays = 0;
let dailyWageMap = new Map();
let dailyHourMap = new Map();

// Loop until max hours or max days is reached
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(empCheck);
    totalEmpHours += workHours;

    // Store daily wage and hours in Maps
    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWageMap.set(totalWorkingDays, dailyWage);
    dailyHourMap.set(totalWorkingDays, workHours);
}

// a. Calculate total wage and total hours worked using reduce
let totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
let totalHours = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);
console.log("Total Hours: " + totalHours + " | Total Wage: $" + totalWage);

// b. Show full working days, part-time working days, and no working days
let fullWorkingDays = [];
let partWorkingDays = [];
let noWorkingDays = [];

dailyHourMap.forEach((hours, day) => {
    if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
    else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
    else noWorkingDays.push(day);
});

console.log("Full Working Days: ", fullWorkingDays);
console.log("Part-Time Working Days: ", partWorkingDays);
console.log("No Working Days: ", noWorkingDays);
