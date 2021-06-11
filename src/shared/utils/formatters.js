const formatDate = (date) => {
  const newDate = new Date(date.substr(0, date.indexOf("T")));
  const formattedDate = newDate.toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
};

const formatMoney = (money) => {
  return money.toLocaleString("en-us", {
    style: "currency",
    currency: "usd",
    minimumFractionDigits: setMinFractionDigits(money),
    maximumFractionDigits: setMaxFractionDigits(money),
  });
};

export const formatNumber = (number) => {
  return number.toLocaleString("en-us", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 5,
  });
};

const setMinFractionDigits = (num) => {
  if (num > 100000) return 0;
  if (num < 1) return 5;
  return 2;
};

const setMaxFractionDigits = (num) => {
  if (num > 100000) return 0;
  if (num < 0.01) return 8;
};

const formatPercent = (percentage) => {
  percentage /= 100;
  return percentage.toLocaleString("en-us", {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

export { formatDate, formatPercent, formatMoney };
