export function useTime() {
  const getTime = () => {
    // Get the current date and time
    const now = new Date();

    // Define an array of month names for formatting
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract date components
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time
    const formattedTime = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

    return formattedTime;
  };
  const  getDifference=(time)=> {
  // Get the current date and time
  const now = new Date();

  // Create another date object for the second time
  const secondTime = new Date(time);

  // Calculate the difference in milliseconds
  const timeDifference = secondTime - now;

  // Convert the time difference from milliseconds to other units if needed
  const milliseconds = timeDifference;
  const seconds = timeDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  return Math.abs(hours) < 24;
}


  return { getTime, getDifference };
}


