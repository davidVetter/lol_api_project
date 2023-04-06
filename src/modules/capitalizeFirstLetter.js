// pass a string
// return the same string with the first character capitalized
export default function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}
