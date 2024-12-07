function calcBMI(){
    const userHeight = document.getElementById('height').value /100
    const userWeight = document.getElementById('weight').value

    const calc = userWeight/(userHeight ** 2)
    result.innerHTML = Math.floor(calc)

    if(calc < 18.5){
        bmiCategory.innerHTML ="Underweight"
    }
    else if(calc>=18.5 && calc<24.9){
        bmiCategory.innerHTML ="Normal Weight"
    }
    else if(calc>=25 && calc<29.9){
        bmiCategory.innerHTML ="OverWeight"
    }
    else if(calc>30){
        bmiCategory.innerHTML ="Obesity"
    }
    else{
        alert('Enter your height and weight ...!!')
    }
}

function clearValue(){
    height.value = ""
    weight.value = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("bmiCategory").innerHTML = ""
}