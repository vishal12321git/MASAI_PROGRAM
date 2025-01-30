function generatePassword(length, includeNumbers = true, includeSpecialChars = true) {
    const specialCharacters = "!@#$%^&*()".split("");
    const numbers = "0123456789".split("");
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");

    let password = [];

    // Ensure at least one uppercase letter
    password.push(uppercaseLetters[Math.floor(Math.random() * 26)]);

    // Ensure at least one number if required
    if (includeNumbers) {
        password.push(numbers[Math.floor(Math.random() * 10)]);
    }

    // Ensure at least one special character if required
    if (includeSpecialChars) {
        password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    }

    // Fill the remaining password length with random characters
    let allCharacters = [...uppercaseLetters, ...lowercaseLetters];

    if (includeNumbers) {
        allCharacters.push(...numbers);
    }
    if (includeSpecialChars) {
        allCharacters.push(...specialCharacters);
    }

    while (password.length < length) {
        password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }

    // Shuffle password to remove predictable patterns
    for (let i = password.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join("");
}

// Example usage
console.log(generatePassword(10, true, true));
console.log(generatePassword(8, true, false));
console.log(generatePassword(12, false, true));
console.log(generatePassword(3));
