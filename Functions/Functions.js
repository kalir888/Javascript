/* Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9 */
{
    function celsiusToFarenheit(degC) {
        let degF = (degC * 9/5) + 32;
        return degF;
    }

    function farenheitToCelsius(degF) {
        let degC = (degF - 32) * 5/9;
        return degC;
    }

    const FREEZING_POINT_IN_CELCIUS = 0;
    const BOILING_POINT_IN_CELCIUS = 100;
    const FREEZING_POINT_IN_FARENHEIT = 32;
    const BOILING_POINT_IN_FARENHEIT = 212;

    console.log("Select an Option\n1.Celsius to Farenheit\n2.Farenheit to Celsius");
    const readline = require("readline-sync");
    let userChoice = Number(readline.question());
    let degF, degC;
    switch(userChoice) {
        case 1:
            console.log("Enter the Temperature in Celsius\nRange = 0 to 100");
            degC = Number(readline.question());
            if(degC > FREEZING_POINT_IN_CELCIUS && degC < BOILING_POINT_IN_CELCIUS) {
                degF = celsiusToFarenheit(degC);
                console.log("The given Temperature in farenheit is " + degF);
            }else {
                console.log("Invalid Temperature in celcius");
            }
            break;
        case 2:
            console.log("Enter the Temperature in Farenheit\nRange = 32 to 212");
            degF = Number(readline.question());
            if(degF > FREEZING_POINT_IN_FARENHEIT && degF < BOILING_POINT_IN_FARENHEIT) {
                degC = farenheitToCelsius(degF);
                console.log("The given Temperature in farenheit is " + degC);
            }else {
                console.log("Invalid Temperature in farenheit");
            }
            break;
        default:
            console.log("Invalid Option");
    }
}

/* 3. Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime */
const IS_PRIME = 0;
const IS_NOT_PRIME = 1;
{
    function primeCheck(num) {
        let primeCheck = IS_PRIME;
        for(let i = 2; i < userNum; i++) {
            let diviCheck = userNum%i;
            if(diviCheck == 0) {
                primeCheck = IS_NOT_PRIME;
                break;
            }
        }
        if(primeCheck == IS_PRIME) {
            return true;
        }else {
            return false;
        }
    }

    function palindromeCheck(num) {
        let currentValue = num;
        let singleDigit = 0;
        let reverseNum = 0;

        while(currentValue > 0) {
            singleDigit = currentValue % 10;
            reverseNum = (reverseNum * 10) + singleDigit;
            currentValue = Math.floor(currentValue/10);
        }

        if(reverseNum == num) {
            return true;
        }else {
            return false;
        }
    }

    console.log("Enter a number : ");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    if(primeCheck(userNum) && palindromeCheck(userNum)) {
        console.log(userNum + " is prime and palindrome");
    }else if(!primeCheck(userNum) && palindromeCheck(userNum)) {
        console.log(userNum + " is palindrome but not prime");
    }else if(!palindromeCheck(userNum) && primeCheck(userNum)) {
        console.log(userNum + " is prime but not palindrome");
    }else {
        console.log(userNum + " is neither prime nor palindrome")
    }
}
