export const renderAmount = value => {
  if (!value) return '0';

  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

export const kFormatter = num => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
    : `Math.sign(num) * Math.abs(num)`;
};
