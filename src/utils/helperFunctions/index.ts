export const CalcPercent = (mainCount: number, count: number): number => {
  return (count * 100) / mainCount;
};
export const CalcStatus = (
  startDate: Date,
  currentDate: Date,
  futureDate: Date
): string => {
  if (currentDate < startDate && currentDate < futureDate) return "waiting";
  // if (currentDate < startDate) return "rejected";

  if (startDate <= currentDate && futureDate >= currentDate) {
    return "active";
  } else if (futureDate < currentDate) {
    return "pending";
  } else {
    return "rejected";
  }
};
