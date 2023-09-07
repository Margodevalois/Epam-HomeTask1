const getNextWorkingDate = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getUTCDay();
  
    if (dayOfWeek === 0) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
      } else if (dayOfWeek === 6) {
        currentDate.setUTCDate(currentDate.getUTCDate() + 2);
      } else if (dayOfWeek === 5) {
          currentDate.setUTCDate(currentDate.getUTCDate() + 3);
      } else {
        currentDate.setUTCDate(currentDate.getUTCDate() + 1); 
      }
  
    return currentDate.toUTCString().split(" ").slice(0, 4).join(" "); // Return date in YYYY-MM-DD format
};
