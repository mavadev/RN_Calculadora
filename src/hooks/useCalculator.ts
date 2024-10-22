import { useEffect, useState } from "react"

export enum Operator {
  add="+",
  subtract="-",
  multiply="x",
  divide="/",
  module="%",
}

export const useCalculator = () => {
  const [prevFormula, setPrevFormula] = useState('')
  const [formula, setFormula] = useState('0')
  const [number, setNumber] = useState('0')
  const [result, setResult] = useState('0')

  useEffect(() => {
    let newFormula;
    if(prevFormula && !Number(number)) newFormula = prevFormula
    else newFormula = prevFormula + number;

    if(newFormula == formula) return;
    setFormula(newFormula);
  }, [prevFormula, number])
  
  useEffect(() => {    
    // Actualizar para cuando se borre <-
    const operations = formula.split(" ");
    const lastValue = operations[operations.length-1]

    const formPrev = operations.slice(0, -1).join(" ")
    const formNumber = !lastValue ? '0' : lastValue; 

    if(Number(formNumber)){
      const result = `${calculateFormulaResult()}`
      setResult(result)
    }

    setPrevFormula(formPrev ? formPrev + " " : '')
    setNumber(formNumber);
  }, [formula])

  // Construir el número
  const buildNumber = (numberStr:string) => {
    if(number.includes('.') && numberStr == '.') return;
    
    if (number === '0' && numberStr !== '.') {
      return setNumber(numberStr);
    }

    if (number === '-0' && numberStr !== '.') {
      return setNumber(`-${numberStr}`);
    }
    setNumber(number+numberStr)
  }

  // Limpiar calculadora
  const clear = () => {
    setPrevFormula('')
    setFormula('0')
    setNumber('0');
    setResult('0')
  }

  // Eliminar número
  const deleteOperation = () => {
    const updatedFormula = formula.slice(-1) === " " ? formula.slice(0, -3) : formula.slice(0, -1);
    setFormula(updatedFormula || "0");
  }
  
  // Cambiar signo
  const toggleSign = () => {
    if(number == "0") return;

    if(number.includes('-'))
      return setNumber(number.replace('-', ''))

    setNumber(`-${number}`)
  }
  
  // Construir previa formula + number
  const setOperation = (operator:Operator) => {
    if(!Number(number)) return;
    const newPrevFormula = `${formula} ${operator} `;
    setPrevFormula(newPrevFormula)
    setNumber('0')
  }

  // Calcular resultado
  const calculateResult = () => {
    const result = calculateFormulaResult();
    setPrevFormula('')
    setFormula( result )
    setNumber( result )
    setResult('0')
  }

  const calculateFormulaResult = () => {
    const values = formula.split(" ");
    let currentOperator: Operator | null = null;

    // Multiplicacion, division, modulo
    let intermediateValues = [];
    for (let pos = 0; pos < values.length; pos++) {
      const value = values[pos];
      const num = Number(value);
  
      if (isNaN(num)) {
        currentOperator = value as Operator
        intermediateValues.push(currentOperator);
      } else {
        if (currentOperator === Operator.multiply || currentOperator === Operator.divide || currentOperator === Operator.module) {
          intermediateValues.pop();
          const prevNum = intermediateValues.pop();
          const result = applyOperation(Number(prevNum), num, currentOperator);
          intermediateValues.push(result);
        } else {
          intermediateValues.push(num);
        }
      }
    }

    // Suma, resta
    let total = 0;
    currentOperator = null;
  
    for (let pos = 0; pos < intermediateValues.length; pos++) {
      const value = intermediateValues[pos];
      if (typeof value === "number") {
        if (!currentOperator) {
          total = value;
        } else {
          total = applyOperation(total, value, currentOperator);
        }
      } else {
        currentOperator = value as Operator;
      }
    }
  
    if(total % 1 == 0) return `${total}`;
    return total.toFixed(2);
  };

  const applyOperation = (num1: number, num2: number, operator: Operator) => {
    switch (operator) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      case Operator.module:
        return num1 % num2;
      default:
        throw new Error("Invalid operator");
    }
  };

  return {
    // valores
    prevFormula,
    formula,
    result,
    // metodos
    buildNumber,
    clear,
    deleteOperation,
    toggleSign,
    setOperation,
    calculateResult
  }
}