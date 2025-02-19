let bookBtn = document.getElementById("addBtn");
let bookTtl = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookImg = document.getElementById("bookImage");
let bookLists = document.getElementById("bookList");

bookBtn.addEventListener("click", function(e)
{
    let newBook = document.createElement("div");
    newBook.classList.add("book-card");
    
    let bookName = document.createElement("div");
    bookName.classList.add("book-title");
    bookName.innerHTML = bookTtl.value;

    let bookAuthorNm = document.createElement("div");
    bookAuthorNm.classList.add("book-author");
    bookAuthorNm.innerHTML = bookAuthor.value;

    let bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = bookImg.value; 

    newBook.append(bookName);
    newBook.append(bookAuthorNm);
    newBook.append(bookImage);
    bookLists.append(newBook);

    bookTtl.value = "";
    bookAuthor.value = "";
    bookImg.value = ""; 

}) 

function searchBtn()
{
    let searchBook = document.getElementById("searchBook").value.toLowerCase();
    let bookCards = document.querySelectorAll(".book-card");
    
    bookCards.forEach(e => {
        let searchTtl = e.querySelector(".book-title").innerText.toLowerCase();
        let searchAuthor = e.querySelector(".book-author").innerText.toLowerCase();

        if (searchTtl.includes(searchBook) || searchAuthor.includes(searchBook)) 
        {
            e.style.display = "block";    
        }
        else
        {
            e.style.display = "none";
        }
    });
}
