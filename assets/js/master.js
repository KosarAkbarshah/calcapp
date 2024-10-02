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