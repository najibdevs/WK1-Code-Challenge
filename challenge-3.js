// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// Define a function to calculate NHIF deductions based on gross pay
function calculateNHIFDeductions(grossPay) {
    // Check gross pay against different thresholds and return corresponding deduction
    if (grossPay < 6000) {
        return 150
    } else if (grossPay < 8000) {
        return 300
    } else if (grossPay < 12000) {
        return 400
    } else if (grossPay < 15000) {
        return 500
    } else if (grossPay < 20000) {
        return 600
    } else if (grossPay < 25000) {
        return 750
    } else if (grossPay < 30000) {
        return 850
    } else if (grossPay < 35000) {
        return 900
    } else if (grossPay < 40000) {
        return 950
    } else if (grossPay < 45000) {
        return 1000
    } else if (grossPay < 50000) {
        return 1100
    } else if (grossPay < 60000) {
        return 1200
    } else if (grossPay < 70000) {
        return 1300
    } else if (grossPay < 80000) {
        return 1400
    } else if (grossPay < 90000) {
        return 1500
    } else if (grossPay < 100000) {
        return 1600
    } else {
        return 1700
    }
}

// Define a function to calculate NSSF contribution based on pensionable pay
function calculateNSSFContribution(pensionablePay) {
    // Define NSSF tier I rate and maximum tier II
    const tierIRate = 0.06
    const tierIIMax = 36000
    // Calculate NSSF contribution based on pensionable pay and return the minimum of the calculated contribution and tier II maximum contribution
    return Math.min(pensionablePay * tierIRate, tierIIMax * tierIRate);
}

// Define a function to calculate net salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits
    // Calculate NHIF deductions based on gross salary
    const nhifDeductions = calculateNHIFDeductions(grossSalary)
    // Calculate NSSF deductions based on basic salary
    const nssfDeductions = calculateNSSFContribution(basicSalary)

    // Calculate net salary by subtracting NHIF and NSSF deductions from gross salary
    const netSalary = grossSalary - nhifDeductions - nssfDeductions

    // Return an object containing gross salary, NHIF deductions, NSSF contribution, and net salary
    return {
        grossSalary: grossSalary,
        NHIFDeductions: nhifDeductions,
        NSSFContribution: nssfDeductions,
        netSalary: netSalary
    };
}

// Define basic salary and benefits
const basicSalary = 50000
const benefits = 10000
// Calculate salary details using the provided basic salary and benefits
const salaryDetails = calculateNetSalary(basicSalary, benefits)
// Output the calculated salary details
console.log(salaryDetails)
