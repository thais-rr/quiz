let number = 7

function quiz(){
    const answer = prompt(`What is ${number} + ${number}?`)
    if (answer == number + number) {
        number = number + number
        quiz()
    }
}

quiz()