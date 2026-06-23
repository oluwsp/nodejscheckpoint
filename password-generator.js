// Import the generate-password module
// Install it first with: npm install generate-password
const generator = require("generate-password");

// Function to generate a random password
// This function creates a password with customizable options
function generateRandomPassword() {
  // Configure password generation options
  const passwordOptions = {
    length: 12,           // Password length (12 characters)
    numbers: true,        // Include numbers (0-9)
    symbols: true,        // Include symbols (!@#$%^&*)
    uppercase: true,      // Include uppercase letters (A-Z)
    lowercase: true,      // Include lowercase letters (a-z)
    excludeAmbiguous: true // Avoid confusing characters like l, 1, L, O, 0
  };

  // Generate the password using the specified options
  const password = generator.generate(passwordOptions);

  // Display the generated password to the console
  console.log("Generated Password:", password);

  // Return the password for use in other parts of the program if needed
  return password;
}

// Call the function to generate and display a random password
generateRandomPassword();
