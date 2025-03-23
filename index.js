/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(array) {
    return array.map(employee => createEmployeeRecord(employee))
}
function createTimeInEvent(dates) {
    const [date, hour] = dates.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}
function createTimeOutEvent(dates) {
    const [date, hour] = dates.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date)
    const timeOut = this.timeOutEvents.find(e => e.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDatecalc(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}
function wagesEarnedOnDate(date) {
    return wagesEarnedOnDatecalc.call(this, date)
}
function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(employee => employee.firstName === firstNameString)
}

function calculatePayroll(findEmployeeByFirstName) {
    return findEmployeeByFirstName.reduce((memo, employee) => memo + allWagesFor.call(employee), 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

