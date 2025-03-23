// UC10: Store Day, Hours Worked, and Wage Earned in an Object
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

// Display stored data
console.log("Employee Daily Data: ", employeeDailyData);
