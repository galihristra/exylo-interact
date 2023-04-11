export const renderAmount = value => {
  if (!value) return '0';

  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};
