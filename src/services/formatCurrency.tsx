export function formatCurrrency(valor: number): string {
  const valorFormatado = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}
