// student object
let student = {
    name: "Rahul",
    marks: [65, 70, 80, 55, 90]
};

// function to generate report
function generateReport(stu) {
    let total = 0;

    // loop to calculate total marks
    for (let i = 0; i < stu.marks.length; i++) {
        total = total + stu.marks[i];
    }

    let average = total / stu.marks.length;

    console.log("Name:", stu.name);
    console.log("Total Marks:", total);
    console.log("Average:", average);

    if (average >= 40) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}

// function call
generateReport(student);
