// Função que recebe uma data e conta quantos dias forams ex: 1 hora, 2 dias, 30 dias 1 mês
export const transformDate = (date: string): string => {
  // data = 2021-09-01T00:00:00

  const currentDate = new Date();
  const dateToCompare = new Date(date);
  const diffTime = Math.abs(currentDate.getTime() - dateToCompare.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  if (diffDays === 1) {
    return `${diffDays} dia`;
  }
  if (diffDays < 30 && diffDays > 1) {
    return `${diffDays} dias`;
  }
  if (diffHours === 1) {
    return `${diffHours} hora`;
  }
  if (diffHours < 24) {
    return `${diffHours} horas`;
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) {
    return `${diffMonths} mês`;
  }
  return `${diffMonths} meses`;
};

// transforma a data para dd/mm/yyyy
export const transformDateToBR = (date: string): string => {
  // data = 2021-09-01T00:00:00
  const dateToTransform = new Date(date);
  const day = dateToTransform.getDate();
  const month = dateToTransform.getMonth() + 1;
  const year = dateToTransform.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};
