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

  const deleteNumber = () => {
    if(number.length == 1) return setNumber('0')
    setNumber(number.slice(0, number.length-1))
  }

  return {
    // estado
    number,
    buildNumber,
    deleteNumber
    // metodos

  }
}