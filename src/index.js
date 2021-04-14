function calc(num1, num2, action) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        switch (action) {
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
            case "%":
                result =  num1 / 100 * num2;
                break;
            default:
            break;
        }
    } else {
        result = "Неправильные входные данные";
    }
    return result;
}
  
console.log(calc(100, 20, "%"));






