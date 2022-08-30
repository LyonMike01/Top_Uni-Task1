
//Normal and simple way

// exports.getTax = function (userObj){
//     if (userObj.dateEmployed == "12/12/2022") {
//                 let payableTax =  userObj.salary * 0.1;
//                 userObj["tax"] = payableTax;
                
//             } 
//             return userObj;
//     }



// method to be submitted 


 exports.getTax = function (userObj){

    let date = new Date(userObj["dateEmployed"]);
    const currentYear = date.getFullYear();

    function reverseNumb (userObj){
        let amount = Number(userObj.salary.replace(/,/g, ""));
        return amount;
    };
    let salary = reverseNumb(userObj);

    if (currentYear == 2022){
        let payableTax = salary *  (parseFloat(userObj.taxRate)/100);
            userObj["tax"] = payableTax.toLocaleString("en-GB");
    }

 return userObj;

}

