export const formatDate = (date: Date):string => {
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
 return formattedDate
};
