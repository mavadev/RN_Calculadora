import { useState } from "react"

export const useCalculator = () => {

  const [number, setNumber] = useState('0')

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
  }

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

  const toggleSign = () => {
    if(number.includes('-'))
      return setNumber(number.replace('-', ''))

    setNumber(`-${number}`)
  }

  return {
    // estado
    number,
    buildNumber,
    clear,
    deleteOperation,
    toggleSign
    // metodos

  }
}