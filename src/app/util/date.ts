export const formatDate = (date: Date): string => {
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};

export const stringDateFormat = (stringDate: string): string => {
  const date = new Date(stringDate);
  const formattedDate = date
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    

  return formattedDate;
};
