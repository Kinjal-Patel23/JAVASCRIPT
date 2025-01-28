// Greet User Function
function greetUser(name)
{
    return "Hello," + name + "!";
}

console.log(greetUser("John"));

console.log("-----------------------");

// Calculating the Sum
function calculateSum(num1 , num2)
{
    return "Sum of: " + (num1 + num2)
}

console.log(calculateSum(5, 3));

console.log("-----------------------");

//Multiply Numbers
function multiplyNumbers(num1 , num2)
{
    return "Product of: " + (num1 * num2)
}

console.log(multiplyNumbers(4, 6));

console.log("-----------------------");

//Display Current Date
function displayCurrentDate()
{
    let date = new Date()

    console.log(date.toDateString())
}

displayCurrentDate();

console.log("-----------------------");

//Square of Number
const squareNumber = function(num)
{
    return "Square of: " + (num * num)
}

console.log(squareNumber(5));

console.log("-----------------------");

// Anonymous Function
(() => {
    document.getElementById("click").addEventListener("click", function(e){
        
        document.getElementById("message").innerText = "Button Clicked!!";

    })
})();