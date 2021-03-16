function formatDate(date) {
  const newDate = new Date(date.substr(0, date.indexOf("T")));
  const formattedDate = newDate.toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

function formatName(name, symbol) {
  return `${name} (${symbol.toUpperCase()})`;
}

function formatLongName(name, symbol) {
  return (
    <div>
      {name}
      <br />({symbol.toUpperCase()})
    </div>
  );
}

const smallCurrency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumFractionDigits: 2,
});
const largeCurrency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "usd",
  maximumFractionDigits: 0,
});
const number = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export {
  formatDate,
  formatName,
  formatLongName,
  smallCurrency,
  largeCurrency,
  number,
};
