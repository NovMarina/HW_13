const buttons = document.querySelectorAll(".allTasks > button");
const taskIds = [];
buttons.forEach(btn => taskIds.push(btn.dataset.task));

buttons.forEach(button => {
    button.onclick = () => {
        const selectedId = button.dataset.task;
        taskIds.forEach(id => {
            const block = document.getElementById(id);
            if (block) {
                block.classList.toggle("hidden", id !== selectedId);
            }
        });
    };
});
//----------------------------------------------------------------------
const text1 = document.querySelector(".task_1_1>p");
const text2 = document.querySelector(".task_1_2>p");
const inputSize = document.querySelector(".input_size");
const inputClr = document.querySelector(".input_clr");

document.querySelector(".task_1_1").onclick = function (event) {
    const target = event.target;
    if (target.dataset.size) {
        text1.style.fontSize = target.dataset.size + 'px';
    } else if (target.dataset.color) {
        text1.style.color = target.dataset.color;
    }
};

function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}

document.querySelectorAll(".task_1_2 .set")[0].onclick = function () {
    const valueSize = +inputSize.value.trim();
    if (!isNaN(valueSize) && valueSize > 0) {
        text2.style.fontSize = valueSize + 'px';
    }
};

document.querySelectorAll(".task_1_2 .set")[1].onclick = function () {
    const valueClr = inputClr.value.trim().toLowerCase();
    if (isValidColor(valueClr)) {
        text2.style.color = valueClr;
    } else {
        alert("Wrong color format.");
    }
};
//_______________________________________________________________________
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const action = document.getElementById("action_select");
const resultBox = document.querySelector(".result>p");

document.querySelector(".btnCalc").addEventListener("click", function () {
        const num1 = +number1.value.trim();
        const num2 = +number2.value.trim();
        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
            switch (action.value) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                default:
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        alert("Division by zero");
                        return;
                    }
                    break;
            }
            resultBox.textContent = result + '';
        } else
            alert("Wrong numbers");
    }
);
//------------------------------------------------------------
const inputPalindromText = document.getElementById("inputText");
const btnCheck = document.querySelector(".check");
const resPalindromeBox = document.querySelector(".palindromResult > span");

const truePalindrome = () => {
    resPalindromeBox.style.color = "green";
    resPalindromeBox.textContent = "Is a Palindrome!";
};

const falsePalindromeBox = () => {
    resPalindromeBox.style.color = "red";
    resPalindromeBox.textContent = "Is not a Palindrome!";
};

btnCheck.addEventListener("click", function () {
    const text = inputPalindromText.value.trim().toLowerCase();
    const reversedText = text.split("").reverse().join("");
    const isPalindrome = text === reversedText;
    isPalindrome ? truePalindrome() : falsePalindromeBox();
});