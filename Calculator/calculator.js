const magic_num = 40000; // magic number
 
// perform arithmetic operations - Jethalal ki salary ka hisab
console.log("Arithmetic Operations: \n");
console.log("Salary: " , magic_num);
console.log("Add bonus in salary (10%): ", magic_num + (magic_num * 0.1));
console.log("Subtraction (5% tax): ", magic_num - (magic_num * 0.05));
console.log("Multiplication - Annual salary: ", magic_num * 2);
console.log("Division - per month salary: ", magic_num / 12);
console.log("Modulus: ", magic_num % 3000);

console.log("----------------------------------");

//swaping - Tapu Sena Ka Fun Experiment!
console.log("Two number Swaping: \n");
let n1 = magic_num;
let n2 = 3000;

console.log("n1: ", n1);
console.log("n2: ", n2);

// swapping withoute third variable
console.log("Before Swapping: n1 = ", n1, "n2 = ", n2);

n1 = n1 + n2; // 40000 + 3000 = 43000
n2 = n1 - n2; // 43000 - 3000 = 40000
n1 = n1 - n2; // 43000 - 40000 = 3000

console.log("After Swapping: n1 = ", n1, "n2 = ", n2);

console.log("----------------------------------");

// grading system - Bhide Sir Ke Students Ka Result!
const marks = 86;
let grade;

if (marks >= 90) 
{
    grade = "A1 - Topper of the Class";    
}
else if (marks >= 75 && marks <= 89)
{
    grade = "A2 - Good Effort";    
}
else if (marks >= 50 && marks <= 74) 
{
    grade = "B - Need Improvement";    
}
else
{
    grade = "Fail - Padho Beta Padho";
}

document.body.innerHTML += // + : new html content ko add karne ke liye 
    "<h2>Grading System</h2>" +
    "<p>Marks: " + marks + "</p>" +
    "<p>Grade: " + grade + "</p>";

console.log("----------------------------------");

// grocery billing - Dayaben Ki Garba Shopping!
const SamakRice = 300;
const PotatoChips = 80;
const SingharaFlour = 280;
const RajgiraFlour = 595;
const RiceFlour = 250;

const totalCost = SamakRice + PotatoChips + SingharaFlour + RajgiraFlour + RiceFlour; 
const gst = totalCost * 0.05; // 5% GST
const bill = totalCost + gst; // final bill

console.log("Final Bill: ", bill);

document.body.innerHTML += // + : new html content ko add karne ke liye
    "<h2>Grocery Billing</h2>" +
    "<h3>Grocery Items: </h3>" +
    "<ul>" +
        "<li>SamakRice: " + SamakRice + "</li>" +
        "<li>PotatoChips: " + PotatoChips + "</li>" +
        "<li>SingharaFlour: " + SingharaFlour + "</li>" +
        "<li>RajgiraFlour: " + RajgiraFlour + "</li>" +
        "<li>RiceFlour: " + RiceFlour + "</li>" +
    "</ul>" +
    "<h3>Final Bill: " + bill + "</h3>";

console.log("----------------------------------");

// Interest Calculator - Popatlal Ka Shaadi Fund!
const principal = magic_num;
const rate = 7;
const time = 4;

const interest = (principal * rate * time) / 100; // interest
const totalAmount = principal + interest; // total amount

console.log("Interest: ", interest);
console.log("Total Amount: ", totalAmount);

document.body.innerHTML += // + : new html content ko add karne ke liye
    "<h2>Interest Calculator</h2>" + 
    "<h4>Interest: " + interest + "</h4>" + 
    "<h4>Total payable amount: " + totalAmount + "</h4>";


console.log("----------------------------------");

// Salary Slip - Taarak Mehta Ki Bonus Calculation!
const basicSalary = magic_num;
const hra = basicSalary * 0.2 // 20%
const da = basicSalary * 0.1 // 10%
const tax = basicSalary * 0.05 // 5%

const GrossSalary = basicSalary + hra + da;
const NetSalary = GrossSalary - tax;

console.log("Net Salary: ", NetSalary);

document.body.innerHTML += // + : new html content ko add karne ke liye
    "<h2>Salary Slip</h2>" + 
    "<p>Basic Salary: " + basicSalary + "</p>" + 
    "<p>HRA: " + hra + "</p>" + 
    "<p>DA: " + da + "</p>" + 
    "<p>TAX: " + tax + "</p>" + 
    "<p>Gross Salary: " + GrossSalary + "</p>" + 
    "<p>Net Salary: " + NetSalary + "</p>";

console.log("----------------------------------");

// Suspense Twist - Society Ki Khushi Ka Raaz!
console.log("Society Ki Khushi Ka Raaz: ");
if (bill > 1000) 
{
    console.log("Dayaben ki Garba Shopping Successful!");    
}
if (totalAmount > 50000) 
{
    console.log("Shaadi fix kar lo, Popatlal!");    
}
if (NetSalary > basicSalary) 
{
    console.log("Taarak Mehta ka Balance Perfect Hai!");    
}