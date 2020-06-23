/** Expects amount in cents */
const currencyFormatSA = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

export const formatCurrency = (amount: number, minorUnits = true): string =>
  currencyFormatSA.format(minorUnits ? amount / 100 : amount);
