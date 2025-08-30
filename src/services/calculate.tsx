import type InfoProps from "../interfaces/InfoProps";
import { formatCurrrency } from "./formatCurrency";

export function calculate(value1: number, value2: number): InfoProps {
  const calc = value1 / value2;

  if (calc <= 0.7) {
    return {
      title: "Compensa usar álcool",
      alcool: formatCurrrency(value1),
      gasolina: formatCurrrency(value2),
    };
  } else {
    return {
      title: "Compensa usar gasolina",
      alcool: formatCurrrency(value1),
      gasolina: formatCurrrency(value2),
    };
  }
}

// interface InfoProps {
//   title: string;
//   gasolina: string | number;
//   alcool: string | number;
// }
