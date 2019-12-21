export function formatNumber(value) {
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(2);
    }
    return shortValue + " " + suffixes[suffixNum];
}

export const formatNumber2 = value => {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export function checkForPositiveNumber(value) {
    if (Math.sign(value) === 1) return true;
    return false;
}
