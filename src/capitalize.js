export const capitalize = (str) => {
    const [firstSymbol = '', ...restSymbols] = str;
    return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};