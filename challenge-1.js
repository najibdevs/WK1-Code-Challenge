// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

// FOR THIS PROJECT USE LIVE SERVER TO RUN THE PROGRAM


// This script continuously prompts the user to enter a number between 0 and 100 until they cancel.
while (true) {
    // Prompt the user to enter a number.
    let input = prompt("Enter a number between 0 and 100:")

    // If the user cancels, exit the loop.
    if (input === null) {
        break
    }

    // Parse the input into a floating-point number.
    let marks = parseFloat(input)
    
    // Check if the input is within the valid range.
    if (marks >= 0 && marks <= 100) {  
        let grade

        // Determine the grade based on the input marks.
        if (marks > 79) {
            grade = "A"
        } else if (marks >= 60 && marks <= 79) {
            grade = "B"
        } else if (marks >= 50 && marks <= 59) {
            grade = "C"
        } else if (marks >= 40 && marks <= 49) {
            grade = "D"
        } else {
            grade = "E"
        }
        
        // Display the calculated grade to the user.
        alert(`Grade: ${grade}`)
    } else {
        // If the input is not within the valid range, display an error message.
        alert("Invalid input! Please enter a number between 0 and 100.")
    }    
}



