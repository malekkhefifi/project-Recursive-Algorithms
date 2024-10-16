function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log( isLeapYear(2024))
// Exemple d'utilisation
const year = 2024;
console.log(`${year} est une année bissextile : ${isLeapYear(year)}`);
function ticketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return price;
}

// Exemple d'utilisation
const userAge = 16;
console.log(`Le prix du billet est de : $${ticketPrice(userAge)}`);

function clothingAdvice(temperature, isRaining) {
    // Provide clothing advice based on temperature and rain status
    if (temperature < 15 && isRaining) {
        return 'Wear a warm coat and a raincoat.';
    } else if (temperature < 15) {
        return 'Wear a warm coat.';
    } else if (temperature >= 15 && isRaining) {
        return 'Wear light clothing and a raincoat.';
    } else {
        return 'Wear light clothing.';
    }
}
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
const n = 6;
console.log(`Le ${n}ème nombre de Fibonacci est : ${fibonacci(n)}`);
function isPalindrome(str) {
    // Nettoyer la chaîne : enlever les espaces et la ponctuation, convertir en minuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(s) {
        if (s.length <= 1) return true; // Cas de base
        if (s[0] !== s[s.length - 1]) return false; // Vérification des extrêmes
        return checkPalindrome(s.slice(1, -1)); // Récursion
    }
    
    return checkPalindrome(str);
}

// Exemple d'utilisation
const testString = "A man, a plan, a canal, Panama!";
console.log(`La chaîne est un palindrome : ${isPalindrome(testString)}`);
