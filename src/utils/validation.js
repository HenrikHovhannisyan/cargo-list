export const validateCargo = ({ name, origin, destination, departureDate }) => {
  if (!name || !origin || !destination || !departureDate) {
    return "Пожалуйста, заполните все поля!";
  }
  return "";
};
