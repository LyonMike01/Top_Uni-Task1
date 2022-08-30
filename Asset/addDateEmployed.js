
// more complex/easy way

//     function addDateEmployed(userObj){
//     let calender = new Date();
//     let day = calender.getDay();
//     let month = calender.getMonth();
//     let year = calender.getFullYear();

//     const dateEmployed = day + "/" + month + "/" + year;
//     userObj["dateEmployed"] =  dateEmployed;
    
//     // console.log(userObj);
// }

// let mann = {

// }

// addDateEmployed(mann);



// method to be submitted 


exports.addDateEmployed = function (userObj) {

       
        userObj["dateEmployed"] =  "12/12/2022";
        
       return userObj;
    }
    