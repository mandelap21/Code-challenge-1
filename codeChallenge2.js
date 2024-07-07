function speedDetector(speed) {
    // Validate the input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }
    
    // Speed limit
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Points: " + demeritPoints);

        // Check if the demerit points exceed 12
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Call the function to execute
speedDetector(70);
// speedDetector(-2);
// speedDetector(80);
// speedDetector(1000);


