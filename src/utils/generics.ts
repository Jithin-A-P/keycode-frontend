export const preventDefaultEvents = (event: React.MouseEvent) => {
  event.stopPropagation();
  event.preventDefault();
};
