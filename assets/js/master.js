
///Global access section, do not remove!
let average1 = 0;
let average2 = 0;
let average3 = 0;
const average1p = (average1 / 30) * 100;
///Global access section


// Danials js

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
averageLabel.setAttribute("for", "s2navrage");
averageContainer.appendChild(averageLabel);

let averageInput = document.createElement("input");
averageInput.type = "text";
averageInput.id = "s2navrage";
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
        average1 = (total / count);
        averageInput.value = ((average1 / 30) * 100).toFixed(2) + "%";
    } else {
        averageInput.value = "enter at least a number";
    }
});

/////reset code: 
const resetStudent1Btn = document.getElementById("resetStudent1Btn");


resetStudent1Btn.addEventListener("click", function () {
    // Get all inputs
    const student1Inputs = document.querySelectorAll("#student1 input.grade-inputs");
    const averageInput = document.getElementById("s2navrage");

    // Reset all
    student1Inputs.forEach(input => input.value = '');

    averageInput.value = '';
});



// end of calculate
// end of Danials js

///kosars js
/// select  student 2 in forms
const student2form = document.getElementById('student2')

///select the inputs for assignments
const s2a1inp = document.getElementById('s2a1inp')
const s2a2inp = document.getElementById('s2a2inp')
const s2a3inp = document.getElementById('s2a3inp')

//// Select the fields of percentage marks
const s2a1mark = document.getElementById('s2a1mark')
const s2a2mark = document.getElementById('s2a2mark')
const s2a3mark = document.getElementById('s2a3mark')

///select button 
const calculateBtn = document.getElementById('calcbtn');
//select the avrage display field
const avrageStudent2 = document.getElementById('s2avrage')



function calculateMarks(e) {

    e.preventDefault(); // Prevent the form from refreshing the page

    ///converting to numbers: should just accept numbers now
    //.value refers to the current value entered by the user
    const a1 = Number(s2a1inp.value);
    const a2 = Number(s2a2inp.value);
    const a3 = Number(s2a3inp.value);

    //making sure the number is between 0-30
    if (a1 >= 0 && a1 <= 30 && a2 >= 0 && a2 <= 30 && a3 >= 0 && a3 <= 30) {
        // if condition applies, proceed with your calculation
        const mark1s2 = (a1 / 30) * 100;
        const mark2s2 = (a2 / 30) * 100;
        const mark3s2 = (a3 / 30) * 100;

        ///using tofixed to avoid decimal
        s2a1mark.value = mark1s2.toFixed(2);
        s2a2mark.value = mark2s2.toFixed(2);
        s2a3mark.value = mark3s2.toFixed(2);

        average2 = (mark1s2 + mark2s2 + mark3s2) / 3;
        avrageStudent2.value = average2.toFixed(2)

    }
    else {
        alert('numbers are bigger than 30 or smaller than 0');


    }


}


// Function to reset all input and result fields
function resetFields() {
    s2a1inp.value = '';
    s2a2inp.value = '';
    s2a3inp.value = '';
    s2a1mark.value = '';
    s2a2mark.value = '';
    s2a3mark.value = '';
    averageStudent2.value = '';
}


// Attach the event listener to handle form submission
student2form.addEventListener('submit', calculateMarks);

///end of kosars js


// farnaz js
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

    average3 = Math.round(((avg1 + avg2 + avg3) / 3))
    document.getElementById('s3avrage').value = `${average3} %`

})
// End of farnaz's Js


////calculate class avrage///
//kosar's code///

const buttonAv = document.querySelector('.buttonAv');
const avrageOfClass = document.getElementById('classAverage');
buttonAv.addEventListener('click', () => {
    const average1p = (average1 / 30) * 100;
    if (average1p > 0 && average2 > 0 && average3 > 0) {
        const classAverage = (average1p + average2 + average3) / 3;
        avrageOfClass.value = classAverage.toFixed(2) + " %";
    } else {
        alert("Please make sure all students' averages are calculated.");
    }
});


//reset class avrage
const resetClass = document.getElementById("resetclass");
resetClass.addEventListener("click", function () {

    avrageOfClass.value = ''

})

//end of kosar's code///