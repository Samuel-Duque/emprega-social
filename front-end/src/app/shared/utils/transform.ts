// Função que recebe uma data e conta quantos dias forams ex: 2 dias, 30 dias 1 mês
export const transformDate = (date: string): string => {
  const currentDate = new Date();
  const dateToCompare = new Date(date);
  const diffTime = Math.abs(currentDate.getTime() - dateToCompare.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 1) {
    return `${diffDays} dia`;
  }
  if (diffDays < 30) {
    return `${diffDays} dias`;
  }
  const diffMonths = Math.ceil(diffDays / 30);
  if (diffMonths === 1) {
    return `${diffMonths} mês`;
  }
  return `${diffMonths} meses`;
};
