export const getDates = (startEvent, endEvent) => {
  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  const dateStart = new Date(startEvent.seconds * 1000);
  const dateEnd = new Date(endEvent.seconds * 1000);

  const year = dateStart.getFullYear();
  const month = padTo2Digits(dateStart.getMonth() + 1);
  const day = padTo2Digits(dateStart.getDate());
  const startHour = padTo2Digits(dateStart.getHours());
  const startMin = padTo2Digits(dateStart.getMinutes());
  const endHour = padTo2Digits(dateEnd.getHours());
  const endMin = padTo2Digits(dateEnd.getMinutes());

  const date = `${day}/${month}/${year}`;
  const start = `${startHour}:${startMin}`;
  const end = `${endHour}:${endMin}`;
  
  return {
    date, start, end
  };
};