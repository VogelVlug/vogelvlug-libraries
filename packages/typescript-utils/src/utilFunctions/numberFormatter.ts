export const numberFormatter = (num?: number, digits?: number): string => {
  if (num === 0 || !num) return "0";
  const negative = num < 0;
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "Qa" },
    { value: 1e18, symbol: "Qi" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(num) >= item.value;
    });
  const formattedNum = item
    ? (Math.abs(num) / item.value)
        .toFixed(digits)
        .replace(".", ",")
        .replace(rx, "$1") + item.symbol
    : "0";
  return negative ? "-" + formattedNum : formattedNum;
};