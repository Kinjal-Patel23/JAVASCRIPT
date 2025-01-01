// ES6

const studInfo = () => // used arrow function , function keyword is not required
{
    // create a variable

    const stud_name = "Lara"; // constant value
    let stud_age = 18
    let passed = true

    if (passed) // check if the students passed
    {   
        console.log("Student Name: ", stud_name) // print student name
        console.log("Student age: ", stud_age) // print student age   
    }

}

studInfo(); // function call