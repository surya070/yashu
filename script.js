let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");

let messages = [
    "No", 
    "Please no 😭", 
    "C'mon just say yes 😢", 
    "Why u do dis?", 
    "Bruh just say yes 😭", 
    "Shaata you have no other option"
];

let count = 0;
let moving = false;

function sayYes() {
    document.getElementById("question").innerHTML = "YAY! ❤️ Can't wait for our date!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

function changeYesText() {
    if (count < messages.length-1) {
        noButton.innerHTML = messages[count];
        yesButton.style.fontSize = (70 + count * 7) + "px";
        count++;
    } 

    else {
        moving = true;
        count++;
        noButton.innerHTML = messages[count];
        noButton.addEventListener("mousemove", avoidNo);
    }
}

function avoidNo(event) {
    if (moving) {
        let randomX = Math.random() * (window.innerWidth - 100);
        let randomY = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    }
}