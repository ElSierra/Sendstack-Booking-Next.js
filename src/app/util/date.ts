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
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};

export const timeFromDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export const stringDateTimeFormat = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
  return formattedDate;
};
