// console.log("Today is not so cold")
// console.log("but we still managed to come class after")

// document.getElementById("myh1").textContent="xyz"

// let x;
// x=10;

// let y;
// y="full stack devloper";

// let z="9.8"
// console.log(typeof x,x)
// console.log(typeof y,y)
// console.log(typeof z,z)

// let age=24;
// let gpa=9.8;
// let name1="Meet";

// console.log(`my name is ${name1}\nI am ${age} years old \nmy GPA is${gpa}` )


// let name = "Meet Sondarva"
// let exp1 = "data scientits at samsung (2019-2020)"
// let exp2 = " senior manager at Blackrock-IT (2020-2021)"

// document.getElementById(myh1)


// 
// 

// document.getElementById("sub").onclick = 
// function(){
// document.getElementById("content").innerHTML = document.getElementById("i1").value
// }


// document.addEventListener("DOMContentLoaded", function () {
//     function show() {
//         // Get values from input fields
//         let name = document.getElementById("myName").value;
//         let email = document.getElementById("myEmail").value;
//         let dob = document.getElementById("myDOB").value;
//         let division = document.getElementById("myDivision").value; // From dropdown
//         let enrollNumber = document.getElementById("myEnroll").value;
//         let city = document.getElementById("myCity").value;

//         // Log collected data to the console
//         console.log({ name, email, dob, division, enrollNumber, city });

//         // Display thank you message
//         document.getElementById("thankYouMessage").style.display = "block";
//     }

//     // Add event listener to the button
//     document.getElementById("mybutton").addEventListener("click", show);
// });

// let value = document.getElementById("value")
// let count = 0

// function inc(){
//     count += 1
//     value.textContent = count
// }

// function dec(){
//     count -= 1
//     value.textContent = count
// }

// function res(){
//     count = 0
//     value.textContent = count
// }

document.addEventListener("DOMContentLoaded", function () {
    function show() {
        // Get values from input fields
        let name = document.getElementById("myName").value;
        let email = document.getElementById("myEmail").value;
        let dob = document.getElementById("myDOB").value;
        let division = document.getElementById("myDivision").value; // From dropdown
        let enrollNumber = document.getElementById("myEnroll").value;
        let city = document.getElementById("myCity").value;

        // Log collected data to the console
        console.log({ name, email, dob, division, enrollNumber, city });

        // Display thank you message
        document.getElementById("thankYouMessage").style.display = "block";
    }

    // Add event listener to the button
    document.getElementById("mybutton").addEventListener("click", show);
});