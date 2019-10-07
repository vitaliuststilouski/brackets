module.exports = function check(str, bracketsConfig) {
    let includeOneOfBracketConfig;
    if (str.length % 2 !== 0) {
        return false;
    } else {
        bracketsConfig = bracketsConfig.map(element => element[0] + element[1]);
        do {
            includeOneOfBracketConfig = bracketsConfig.some(bracketsPair => {return str.includes(bracketsPair)});
            bracketsConfig.forEach(bracketsPair => (str = str.replace(bracketsPair, '')));
        } while (includeOneOfBracketConfig);
        return !str;
    }
}
