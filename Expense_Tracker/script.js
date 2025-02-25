let expenseBtn = document.getElementById("expenseBtn");
let expenseList = document.getElementById("expenses");
let totalExpense = document.querySelector(".total-expense h3");

let total = 0;

let number = 0;

expenseBtn.addEventListener("click", function (e){

    number++;

    e.preventDefault();

    let expenseName = document.getElementById("expense-name").value;
    let expenseAmount = document.getElementById("expense-amount").value;
    let expenseDate = document.getElementById("expense-date").value;
    let expenseCategory = document.getElementById("expense-category").value;

    let amount = Number(expenseAmount);

    let newExpense = [{expenseName:expenseName, expenseAmount:expenseAmount, expenseDate:expenseDate, expenseCategory:expenseCategory}];

    

    localStorage.setItem(`${number}`, JSON.stringify(newExpense));

    let getExpenses = JSON.parse(localStorage.getItem(`${number}`));

    let newExpenseItem = document.createElement("li");

    getExpenses.forEach(e => {

        newExpenseItem.innerHTML = `
            <span>${e.expenseName}</span>
            <span>₹${e.expenseAmount}</span>
            <span>${e.expenseDate}</span>
            <span>${e.expenseCategory}</span>
            <button id="editBtn">Edit</button>
            <button id="deleteBtn">Delete</button>
        `;

        expenseList.append(newExpenseItem);

    });

    total += amount;
    totalExpense.innerHTML = `Total: ₹${total}`;

    newExpenseItem.querySelector("#editBtn").addEventListener("click", function(e){
        let newName = prompt("Enter new expense name:", newExpenseItem.children[0].innerText);
        newExpenseItem.children[0].innerText = newName;
        let newAmount = prompt("Enter new expense amount:", newExpenseItem.children[1].innerText);
        newExpenseItem.children[1].innerText = newAmount;
        let newDate = prompt("Enter new expense date:", newExpenseItem.children[2].textContent);
        newExpenseItem.children[2].innerText = newDate;
        let newCategory = prompt("Enter new expense category:", newExpenseItem.children[3].textContent);
        newExpenseItem.children[3].innerText = newCategory;
    });

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-date").value = "";
    document.getElementById("expense-category").value = "";

    newExpenseItem.querySelector("#deleteBtn").addEventListener("click", function(e){
        total -= amount;
        totalExpense.innerHTML = `Total: ₹${total}`;
        newExpenseItem.remove();
        localStorage.removeItem(`${number}`);
    })
})