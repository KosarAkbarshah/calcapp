// Danials js

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

        const avrage = (mark1s2 + mark2s2 + mark3s2) / 3;
        avrageStudent2.value = avrage.toFixed(2)

    }
    else {
        alert('numbers are bigger than 30 or smaller than 0');
        resetFields();

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

    const total = Math.round(((avg1 + avg2 + avg3) / 3))
    document.getElementById('s3avrage').value = `${total} %`

})
// End of farnaz's Js

