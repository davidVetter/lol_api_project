// pass a string
// return the same string with the first character capitalized
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.substring(1);
}

module.exports = capitalizeFirstLetter;