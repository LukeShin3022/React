function Calculator(props){
    // console.log(props);
    let num1 = parseFloat(props.num1);
    let num2 = parseFloat(props.num2);
    let result = 0 ;

    switch(props.operator){
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:{
            console.log("Error");
        }
    }

    return (
        <>
            <h1>the result of {props.num1} {props.operator} {props.num2} is {result} </h1>
        </>
    );

}

export default Calculator;