export const formattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-DE', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
