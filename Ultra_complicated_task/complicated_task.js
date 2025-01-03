// Mission: Grade Analyzer
function gradeAnalyzer() // create function
{
    const marks = 97;
    console.log("Marks: ", marks);

    if (marks % 5 == 0 && marks % 10 == 0) 
    {
        //Check divisibility by 5 and 10
        console.log("Elite Performer");
    }
    else if (marks >= 90 && marks <= 99) 
    {
        console.log("Top Futuristic Student");
    }
    else if (marks >= 70 && marks <= 89)
    {
        console.log("Almost There!");    
    }
    else if (marks >= 50 && marks <= 69)
    {
        console.log("Keep Working Hard!");    
    }
    else
    {
        console.log("Back to Basics!");
    }
}

// Mission: Expense Balancer
function expenseBalancer()
{
    const income = 45000; // Monthly Income
    console.log("Monthly Income: ", income);

    // Monthly Expenses 
    const food = 2500;
    const transport = 3500;
    const gadgets = 3000;

    const totalExpenses = food + transport + gadgets;
    console.log("Total Expenses: ", totalExpenses);

    if (totalExpenses > income)
    {
        console.log("System Warning: Bankrupt in Future!");    
    }
    else if (totalExpenses < income)
    {
        console.log("Future Secure!");    
    }
    else if (totalExpenses == income)
    {
        console.log("Zero Savings: Future Risky!");
    }
}

// Mission: Futuristic Password Validator
function passwordValidator()
{
    //const password = "Nobi@12";
    const password = "Nobi@1234";
    console.log("Password: ", password);

    // password length check
    if (password.length < 8) 
    {
        console.log("Password must be at least 8 characters long"); 
        return; //Agar password ki length 8 se kam hai, to conditions check nahi hongi aur function ka execution yahin stop ho jayega
    }

    let uppercase = false;
    let lowercase = false;
    let digit = false;
    let specialChar = false;

    // check each character of the password using for loop
    for (let i = 0; i < password.length; i++) 
    {
        // check for uppercase letter
        if (password[i] >= 'A' && password[i] <= 'Z') 
        {
            uppercase = true;
        }

        // check for lowercase letter
        else if (password[i] >= 'a' && password[i] <= 'z')
        {
            lowercase = true;    
        }

        // check for digit
        else if (password[i] >= '0' && password[i] <= '9') 
        {
            digit = true;    
        }

        // check special character
        else
        {
            specialChar = true;
        }
    }

    // check if all conditions are met or not
    if (uppercase && lowercase && digit && specialChar) 
    {
        console.log("Password Accepted!")    
    }
    else
    {
        console.log("Futuristic Security Breach!")
    }
}

// Mission: Logical Number Sorter
function logicalNumber()
{
    const arr = [3, 8, 1, 9, 2]; // static array

    console.log("Unsorted Array: ");
    console.log(arr.join(' ')); // horizontally array

    // for (let i = 0; i < arr.length; i++) 
    // {
    //     console.log(arr[i]);  // vertical array
    // }

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] % 2 == 0) 
        {
            arr[i] = arr[i] * arr[i]; // Even: square calculate  
            console.log("Square of even number: ");
            console.log(arr[i]); 
        }  
        else
        {
            arr[i] = arr[i] * arr[i] * arr[i]; // Odd: cube calculate
            console.log("Cube of odd number: ");
            console.log(arr[i]);
        }  
    }

    // sort descending order

    for (let i = 0; i < arr.length; i++) // 3, 8, 1, 9, 2
    {
        for (let j = i + 1; j < arr.length; j++)  // arr[1] = 8
        {
            if (arr[i] < arr[j]) // 0 < 1
            {
                // swap values
                
                let temp = arr[i]; // 3
                arr[i] = arr[j]; // 8
                arr[j] = temp; // 3
            }    
        }    
    }

    console.log("Sorted Array (Descending): ", arr);
}

// Mission: Robo-Shop Assistant
function RoboShopAssistant()
{
    const budget = 20000; // budget
    console.log("Budget: ", budget + "\n");

    console.log("Shopping List: ");
    let Goggles = 1500;
    let Handbag = 3500;
    let Bluetooth_Earphones = 3000;
    let Casual_Shoes = 4500;
    let Digital_Wrist_Watch = 2000;

    console.log("Goggles: ",Goggles);
    console.log("Handbag: ", Handbag);
    console.log("Bluetooth Earphones: ", Bluetooth_Earphones);
    console.log("Casual Shoes: ", Casual_Shoes);
    console.log("Digital Wrist Watch: ", Digital_Wrist_Watch + "\n");
    
    const total = Goggles + Handbag + Bluetooth_Earphones + Casual_Shoes + Digital_Wrist_Watch; // total expenses

    console.log("Total Price: ", total);

    if (budget >= total) // check budget sufficient or not
    {
        console.log("Shopping Successful!");    
    }
    else
    {
        if (budget < total) 
        {
            console.log("Buy Fewer Items or Cheaper Alternatives!");    
        }
    }
}

// function call

gradeAnalyzer(); // Grade Analyzer
console.log("---------------------------------");
expenseBalancer(); // expenseBalancer
console.log("---------------------------------");
passwordValidator(); // passwordValidator
console.log("---------------------------------");
logicalNumber(); // logicalNumber
console.log("---------------------------------");
RoboShopAssistant(); // RoboShopAssistant