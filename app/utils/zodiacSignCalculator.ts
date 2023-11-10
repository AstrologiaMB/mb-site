export const determineZodiacSign = (birthdate: string) => {
  const dateParts = birthdate.split("-");
  const day = parseInt(dateParts[2], 10);
  const month = parseInt(dateParts[1], 10);

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "♈️";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "♉️";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "♊️";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "♋️";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "♌️";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "♍️";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "♎️";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "♏️";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "♐️";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "♑️";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "♒️";
  } else {
    return "♓️";
  }
};
