function calculator(){

    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value
    var operator = document.getElementById("operator").value


    // function checkInput(input) {
    //     if (input === undefined) {
    //       alert("Input is undefined. Please provide a value.");
    //     } else {
    //       // Process the input here
    //       console.log("Input value:", input1);
    //     }
    //   }
      
    //   // Example usage:
    //   const userInput = prompt("Enter a value:");
    //   checkInput(userInput);

    let result;

    switch (operator) {
        case "add":
          result = Number(input1) + Number(input2);
          break;
      }
    switch (operator) {
        case "subtract":
            result = Number(input1) - Number(input2);
            break;
    }
    switch (operator) {
        case "multiply":
            result = Number(input1) * Number(input2);
            break;
    }
    switch (operator) {
        case "divide":
            result = Number(input1) / Number(input2);
            break;
    }

    let resultTag = document.getElementById("result")

    resultTag.innerHTML = result
}