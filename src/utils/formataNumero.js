export default function formataNumero(numero) {
  return Number(numero).toLocaleString('pt-br', { minimumFractionDigits: 2 });
}
