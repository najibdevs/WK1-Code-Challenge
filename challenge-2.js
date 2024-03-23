// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.



function checkspeed(speed) {
    // Define the speed limit and the points per kilometer over the limit.
    const speedLimit = 70
    const kmPerPoint = 5

    // Check if the speed is within the allowed range.
    if (speed < speedLimit + kmPerPoint) {
        console.log("OK")
    } else {
        // Calculate the number of points to be deducted from the license.
        const points = Math.floor((speed - speedLimit) / kmPerPoint)

        // Determine the appropriate action based on the points.
        if (points >= 12) {
            console.log("License suspended")
        } else {
            console.log("Points:", points)
        }
    }
}

// Example usage of the checkspeed function.
checkspeed(80)
