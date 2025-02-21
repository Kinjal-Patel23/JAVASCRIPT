function btnCount() {

    const quotes = [
        "Whatever you are, be a good one.",
        "Happiness is not by chance, but by choice.",
        "Take the risk or lose the chance.",
        "You are stronger than you think.",
        "Winning isn't everything, but wanting to win is.",
        "Follow your dreams, they know the way.",
        "We need not wait to see, what others do.",
        "Life is a beautiful struggle.",
        "When you feel like quiting, remember why you started.",
        "The future starts today, not tomorrow."
    ]

    let seconds = document.getElementById("numInput").value;
    let display = document.getElementById("count");
    let displayQuotes = document.getElementById("quote");

    let totalSec = Number(seconds);

    if(seconds <= 0)
    {
        display.innerText = "Enter valid input";
        return;
    }

    let counter = setInterval(() => {
        let min = Math.floor(totalSec / 60);
        let sec = totalSec % 60;

        if (min < 10) 
        {
            min = "0" + min;
        }

        if (sec < 10) 
        {
            sec = "0" + sec;    
        }

        display.innerText = `${min} : ${sec}`;

        if (totalSec <= 0) 
        {
            clearInterval(counter);
            displayQuotes.innerText = quotes[Math.floor(Math.random() * 10)]    
        }
        totalSec--;
        
    }, 1000);
}