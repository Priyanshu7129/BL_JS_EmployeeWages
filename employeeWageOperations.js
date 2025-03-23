// UC11: Perform Object Operations Using Arrow Functions
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
let employeeDailyData = [];

// Loop until max hours or max days is reached
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(empCheck);
    totalEmpHours += workHours;

    // Store data in an object and push it to an array
    let dailyData = {
        day: totalWorkingDays,
        hoursWorked: workHours,
        wageEarned: workHours * WAGE_PER_HOUR
    };
    employeeDailyData.push(dailyData);
}

// a. Calculate total wage and total hours worked using reduce
const totalWage = employeeDailyData.reduce((sum, data) => sum + data.wageEarned, 0);
const totalHours = employeeDailyData.reduce((sum, data) => sum + data.hoursWorked, 0);
console.log(`Total Hours: ${totalHours} | Total Wage: $${totalWage}`);

// b. Show full working days using forEach
const fullWorkingDays = [];
employeeDailyData.forEach((data) => {
    if (data.hoursWorked === FULL_TIME_HOURS) fullWorkingDays.push(data.day);
});
console.log("Full Working Days: ", fullWorkingDays);

// c. Show part-time working days using map by reducing to a string array
const partTimeDays = employeeDailyData
    .filter(data => data.hoursWorked === PART_TIME_HOURS)
    .map(data => `Day ${data.day}`);
console.log("Part-Time Working Days: ", partTimeDays);

// d. Show no working days using map function
const noWorkingDays = employeeDailyData
    .filter(data => data.hoursWorked === 0)
    .map(data => `Day ${data.day}`);
console.log("No Working Days: ", noWorkingDays);
