// UC7: Perform Operations Using Array Helper Functions
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
let dailyWageArray = [];

// Loop until max hours or max days is reached
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(empCheck);
    totalEmpHours += workHours;

    // Store daily wage in array
    dailyWageArray.push({ day: totalWorkingDays, wage: workHours * WAGE_PER_HOUR });
}

// a. Calculate total wage using reduce
let totalWage = dailyWageArray.reduce((sum, day) => sum + day.wage, 0);
console.log("Total Wage using Reduce: $" + totalWage);

// b. Show Day along with Daily Wage using map
let dayWageMap = dailyWageArray.map(day => `Day ${day.day}: $${day.wage}`);
console.log("Daily Wages: ", dayWageMap);

// c. Show Days when Full-time wage (160) was earned using filter
let fullTimeDays = dailyWageArray.filter(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Days with Full-time Wage: ", fullTimeDays.map(day => `Day ${day.day}`));

// d. Find first occurrence when Full-time wage was earned using find
let firstFullTimeDay = dailyWageArray.find(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full-time Wage Earned on: ", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");

// e. Check if every element of Full-time wage array is truly holding Full-time wage
let allFullTime = fullTimeDays.every(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Every Full-time entry correct: ", allFullTime);

// f. Check if there is any Part-time wage
let anyPartTime = dailyWageArray.some(day => day.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-time Wage? ", anyPartTime);

// g. Find the number of days the Employee worked
let workingDaysCount = dailyWageArray.length;
console.log("Number of Days Employee Worked: ", workingDaysCount);
