const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter a task.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        span.onclick = function() {
            listContainer.removeChild(li);
        };
        li.appendChild(span);
    }
    inputBox.value = "";
}