

userObject = {
        name: "John Doe",
        employeeId: "0001AA",
        salary: "500,000,000",
        taxRate: "10%"
    }

    
const date = require("./Asset/addDateEmployed");

const taxes = require("./Asset/getTax");

function compute() {

    let userWithDate = date.addDateEmployed(userObject);
    let userWithTax = taxes.getTax(userWithDate);

    return userWithTax;
    }

console.log(compute());