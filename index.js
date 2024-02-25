const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countLabel");
let count =0;

increaseBtn.onclick = function(){
    if (count < 100) {
        count++;
        countlabel.textContent = count;
    } else {
        window.alert("Maximum limit reached!");
    }
}
document.addEventListener("keypress", function(event) {
    // Check if the pressed key is spacebar
    if (event.key === " " || event.key === "Spacebar") {
        if (count < 100000) {
            count++;
            countlabel.textContent = count;
        } else {
            window.alert("Maximum limit reached!");
        }
    }
});
decreaseBtn.onclick = function(){
    if (count > -100) {
        count--;
        countlabel.textContent = count;
    } else {
        window.alert("Maximum limit reached!");
    }
}
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the Backspace key
    if (event.key === "Backspace") {
        if (count > -100000) {
            count--;
            countlabel.textContent = count;
        } else {
            window.alert("Minimum limit reached!");
        }
    }
});


resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}