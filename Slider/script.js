let nextBtn = document.getElementsByClassName("next");
let previousBtn = document.getElementsByClassName("previous");
let bg = document.getElementsByClassName("bgImg");

let count = 0;

nextBtn[0].addEventListener("click", function(e)
{
    count+= 100;

    for (let i = 0; i < bg.length; i++)
    {
        bg[i].style.transform = `translateX(${-count}%)`;
        bg[i].style.transition = "transform 0.5s ease";
    }
});

previousBtn[0].addEventListener("click", function(e)
{
    count-= 100;

    for (let i = 0; i < bg.length; i++)
    {
        bg[i].style.transform = `translateX(${-count}%)`;
        bg[i].style.transition = "transform 0.5s ease";
    }
});


