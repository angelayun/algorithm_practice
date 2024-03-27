const help = () => {
  let line = "3+2*{1+2*[-4/(8-6)+7]}";
  let letterStack = [],
    numStack = [];
  const calc = (num1, num2, oper) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (oper) {
      case "+":
        return num1 + num2;
      case "-":
        return num2 - num1;
      case "*":
        return num1 * num2;
      case "/":
        return ~~(num2 / num1);
    }
  };
  let flag = false;
  for (let i = 0; i < line.length; i++) {
    let a = line[i];
    if (a == "-" && Number.isNaN(Number(line[i - 1]))) {
      flag = true;
      continue;
    }
    if (Number.isNaN(Number(a))) {
      if (a == ")") {
        debugger;
        while (letterStack[letterStack.length - 1] != "(") {
          let num1 = numStack.pop();
          let num2 = numStack.pop();
          let oper = letterStack.pop();
          numStack.push(calc(num1, num2, oper));
        }
        letterStack.pop();
        debugger;
      } else if (a == "]") {
        while (letterStack[letterStack.length - 1] != "[") {
          let num1 = numStack.pop();
          let num2 = numStack.pop();
          let oper = letterStack.pop();
          numStack.push(calc(num1, num2, oper));
        }
        letterStack.pop();
        debugger;
      } else if (a == "}") {
        while (letterStack[letterStack.length - 1] != "{") {
          let num1 = numStack.pop();
          let num2 = numStack.pop();
          let oper = letterStack.pop();
          numStack.push(calc(num1, num2, oper));
        }
        letterStack.pop();
        debugger;
      } else {
        letterStack.push(a);
      }
    } else {
      numStack.push((flag ? -1 : 1) * a);
      if (flag) {
        flag = false;
      }
    }
  }
  console.log(letterStack);
  console.log(numStack);
};
export default help;
line = line
  .replaceAll("{", "(")
  .replaceAll("}", ")")
  .replaceAll("[", "(")
  .replaceAll("]", ")");
