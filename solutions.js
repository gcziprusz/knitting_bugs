

// 2. Logic Error: Incorrect conditional (using assignment instead of comparison)
function checkYarnColor(color) {
    const favoriteColor = "blue";
    if (color = favoriteColor) {  // BUG: Should use `==` or `===` instead of `=`
        console.log("This yarn matches your favorite color!");
    } else {
        console.log("This yarn is a different color.");
    }
}

// 3. Parameter Issue: Missing argument
function startKnitting(yarn, pattern) {
    if (!yarn || !pattern) {
        console.log("Error: Yarn and pattern are required to start knitting.");
        return;
    }
    console.log(`Knitting with ${yarn} yarn using the ${pattern} pattern.`);
}

startKnitting("Wool"); // BUG: Missing the pattern argument

// 4. Array Issue: Accessing an out-of-bounds index
function chooseNeedleSize() {
    const needleSizes = [3.5, 4.0, 4.5, 5.0];
    console.log("Needle Sizes:", needleSizes);
    return needleSizes[4];  // BUG: Index 4 is out of bounds (should be needleSizes[3] or less)
}

// 5. Iteration Issue: Infinite loop
function countStitches() {
    let stitches = 0;
    while (stitches < 10) {
        console.log(`Stitch #${stitches}`);
        // BUG: Missing increment of `stitches`, causing an infinite loop
    }
}

// 6. Debugging Issue: Using console.log instead of debugger
function knitRow() {
    console.log("Starting to knit a row..."); // BUG: Should use `debugger;` for step-by-step debugging
    for (let i = 0; i < 5; i++) {
        console.log(`Knit stitch ${i + 1}`);
    }
}

// 7. Type Coercion Issue: Unexpected type coercion
function combineYarns(yarn1, yarn2) {
    const combinedLength = yarn1.length + yarn2.length;
    console.log(`Combined yarn length: ${combinedLength}`);  // BUG: If yarn1 or yarn2 is a string, this will concatenate instead of adding numbers
}

combineYarns(50, "30");  // Mixing number and string


// 1. Syntax Error: Missing closing bracket in the function
function chooseYarn() {
    const yarns = ["Wool", "Cotton", "Silk", "Acrylic"];
    console.log("Available Yarns:", yarns.join(", "));
    return yarns[0];
    // BUG: Missing closing bracket here
// }

// Call functions to demonstrate bugs and modular code
chooseYarn();
checkYarnColor("red");
startKnitting("Wool");
chooseNeedleSize();
countStitches();  // Be cautious with this one, as it's an infinite loop!
knitRow();
combineYarns(50, "30");
