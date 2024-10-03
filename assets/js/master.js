// danial's Js

let studentOneForm = document.createElement('form');
studentOneForm.id = "student1";
studentOneForm.classList.add('form');
document.querySelector("#student1").appendChild(studentOneForm);


function assignmentCreator(number) {
    let assignmentContainer = document.createElement('div');

    // assignment input
    let AssignmentInputContainer = document.createElement('div');
    AssignmentInputContainer.id = `assignment-nu${number}-input`;
    AssignmentInputContainer.classList.add('s2a1');

    let AssignmentInputLabel = document.createElement('label');
    AssignmentInputLabel.setAttribute('for', `Assignment-nu${number}-input`);
    AssignmentInputLabel.textContent = `Assignment ${number}`;
    AssignmentInputContainer.appendChild(AssignmentInputLabel);

    let assignmentInput = document.createElement('input');
    assignmentInput.type = 'text';
    assignmentInput.name = `assignment-nu${number}`;
    assignmentInput.className = 'grade-inputs';
    assignmentInput.id = `Assignment-nu${number}-input`;
    assignmentInput.placeholder = ' Mark';
    assignmentInput.required = true;
    AssignmentInputContainer.appendChild(assignmentInput);

    let maxNumber = document.createElement('p');
    maxNumber.style.display = 'inline-block';
    maxNumber.textContent = '/30';
    AssignmentInputContainer.appendChild(maxNumber);
    // end of assignment input

    // assignment output
    let AssignmentOutputContainer = document.createElement('div');
    AssignmentOutputContainer.id = `assignment-nu${number}-output`;
    AssignmentOutputContainer.classList.add('s2a1mark');
    studentOneForm.appendChild(AssignmentOutputContainer);

    let AssignmentOutputLabel = document.createElement('label');
    AssignmentOutputLabel.setAttribute('for', `Assignment-nu${number}-output`);
    AssignmentOutputLabel.textContent = `Mark result #${number} `;
    AssignmentOutputContainer.appendChild(AssignmentOutputLabel);

    let assignmentOutput = document.createElement('input');
    assignmentOutput.type = 'text';
    assignmentOutput.name = `assignment-nu${number}-mark`;
    assignmentOutput.className = 'grade-outputs';
    assignmentOutput.id = `Assignment-nu${number}-output`;
    assignmentOutput.placeholder = ' %';
    assignmentOutput.disabled = true;
    AssignmentOutputContainer.appendChild(assignmentOutput);
    // end of assignment output

    assignmentContainer.appendChild(AssignmentInputContainer);
    assignmentContainer.appendChild(AssignmentOutputContainer);

    return assignmentContainer;
}

let studentGradesLength = 3;

for (let i = 0; i < studentGradesLength; i++) {
    studentOneForm.appendChild(assignmentCreator(i + 1));
}

// submit btn 
let submitContainer = document.createElement("div");
submitContainer.className = "submitAv";
studentOneForm.appendChild(submitContainer);

let studentOneSubmitButton = document.createElement("input");
studentOneSubmitButton.type = "submit";
studentOneSubmitButton.value = "Calculate average";
studentOneSubmitButton.className = "submit";
studentOneSubmitButton.id = "submitbtn";
submitContainer.appendChild(studentOneSubmitButton);
// end of submit btn

// average grade result
let averageContainer = document.createElement("div");
averageContainer.className = "student2avrage";
studentOneForm.appendChild(averageContainer);

let averageLabel = document.createElement("label");
averageLabel.setAttribute("for", "s2avrage");
averageContainer.appendChild(averageLabel);

let averageInput = document.createElement("input");
averageInput.type = "text";
averageInput.id = "s2avrage";
averageInput.placeholder = "%";
averageInput.disabled = true;
averageContainer.appendChild(averageInput);
// end of average grade

// calculate
studentOneSubmitButton.addEventListener("click", function (event) {
    event.preventDefault()

    const gradeInputs = document.querySelectorAll(".grade-inputs");
    const gradeOutputs = document.querySelectorAll(".grade-outputs");

    let total = 0;
    let count = 0;

    for (let i = 0; i < gradeInputs.length; i++) {
        const input = parseFloat(gradeInputs[i].value);
        if (!isNaN(input) && input >= 0 && input <= 30) {
            total += input;
            count++;
            gradeOutputs[i].placeholder = ((input / 30) * 100).toFixed(2) + "%";
        } else if (input <= 0 || input >= 30) {
            gradeOutputs[i].placeholder = "between 0-30";
        } else if (isNaN(input)) {
            gradeOutputs[i].placeholder = "please enter a number"
        }
    }

    if (count > 0) {
        const average = (total / count);
        averageInput.value = ((average / 30) * 100).toFixed(2) + "%";
    } else {
        averageInput.value = "enter at least a number";
    }
});
// end of calculate

// End of danial's Js


// farnaz
const submitButton = document.getElementById('submit')

const input1 = document.getElementById('s3a1inp')
input1.addEventListener('input', function () {
    if (input1.value > 30) input1.value = 30
})
const input2 = document.getElementById('s3a2inp')
input2.addEventListener('input', function () {
    if (input2.value > 30) input2.value = 30
})
const input3 = document.getElementById('s3a3')
input3.addEventListener('input', function () {
    if (input3.value > 30) input3.value = 30
})
submitButton.addEventListener('click', function (event) {

    event.preventDefault()
    const num1 = document.getElementById("s3a1inp").value
    const num2 = document.getElementById("s3a2inp").value
    const num3 = document.getElementById("s3a3").value


    const avg1 = Math.round((num1 / 30) * 100)
    const avg2 = Math.round((num2 / 30) * 100)
    const avg3 = Math.round((num3 / 30) * 100)

    document.getElementById('s3a1mark').value = `${avg1} %`
    document.getElementById('s3a2mark').value = `${avg2} %`
    document.getElementById('s3a3mark').value = `${avg3} %`

    const total = Math.round(((avg1 + avg2 + avg3) / 3))
    document.getElementById('s3avrage').value = `${total} %`

})
// End of danial's Js