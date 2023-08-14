export const getColorForPercentage = (percentage) => {
    if (percentage >= 75) {
      return "#22D07A";
    } else if (percentage >= 50) {
      return "#ff9800";
    } else if (percentage >= 25) {
      return "#f44336";
    } else {
      return "#e0e0e0";
    }
  };
  