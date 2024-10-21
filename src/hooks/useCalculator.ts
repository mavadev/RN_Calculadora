import { useRef, useState } from "react"

enum Operator {
  add,
  subtract,
  multiply,
  divide
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator>()

  // Construir el número
  const buildNumber = (numberStr:string) => {
    if(number.includes('.') && numberStr == '.') return;
    if(number.startsWith('0') || number.startsWith('-0')){
      // Punto decimal
      if(numberStr === '.') return setNumber(number+numberStr);
      
      // Evaluar si otro cero y no hay punto
      if(numberStr=='0' && number.includes('.')){
        return setNumber(number+numberStr)
      }

      // Evaluar si es el primer numero
      if(numberStr!='0' && !number.includes('.')){
        return setNumber(numberStr)
      }

      // Evitar 00000
      if(numberStr==='0' && !number.includes('.')) return;
    }

    setNumber(number+numberStr)
  }
  const clear = () => {
    setNumber('0');
    setPrevNumber('0')
  }
  // Eliminar número
  const deleteOperation = () => {
    let currentSign = ''
    let temporalNumber = ''

    if(number.includes('-')){
      currentSign='-'
      temporalNumber=number.substring(1)
    }
    if(temporalNumber.length > 1 )
      return setNumber(currentSign + temporalNumber.slice(0, temporalNumber.length-1))

    setNumber('0')
  }
  // Cambiar signo
  const toggleSign = () => {
    if(number.includes('-'))
      return setNumber(number.replace('-', ''))

    setNumber(`-${number}`)
  }
  // Asignar segundo número
  const setLastNumber = () => {
    if(number.endsWith('.')){
      setPrevNumber(number.slice(0,-1))
    } else {
      setPrevNumber(number)
    }
    setNumber('0')
  }
  // Operacion: Suma
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }
  // Operacion: Restar
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  }
  // Operacion: Multiplicar
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }
  // Operacion: Dividir
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }
  // Calcular resultado
  const calculateResult = () => {
    const num1 = Number(number)
    const num2 = Number(prevNumber)

    if(lastOperation.current == null || !num2) return;

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`)
        break;
      case Operator.subtract:
        setNumber(`${num2 - num1}`)
        break;
      case Operator.multiply:
        setNumber(`${(num1 * num2).toFixed(2)}`)
        break;
      case Operator.divide:
        setNumber(`${(num2 / num1).toFixed(2)}`)
        break;
        
      default:
        throw new Error('Operation not implemented')
    }

    setPrevNumber('0')
  }

  return {
    // valores
    number,
    prevNumber,
    // metodos
    buildNumber,
    clear,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult
  }
}