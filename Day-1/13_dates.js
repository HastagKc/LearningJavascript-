// dates

let currentDate = new Date();
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toISOString());
// console.log(currentDate.toLocaleTimeString());

// console.log(typeof currentDate); //object

let specificDate = new Date(2024, 0, 12);
// console.log(specificDate.toString());
// console.log(specificDate.toDateString());

//* Get components of the current date
const year = currentDate.getFullYear();
console.log(year); // print full year 2024

const month = currentDate.getMonth(); // 0-based index
console.log(month); // Jan --> 0

const day = currentDate.getDate();
console.log(currentDate.toDateString()); // Sat Jan 27 2024

const hour = currentDate.getHours();
console.log(hour); // based on 24 hours

const minute = currentDate.getMinutes();
console.log(minute);

const second = currentDate.getSeconds();
console.log(second);

const millisecond = currentDate.getMilliseconds();
console.log(millisecond);

// Format dates for display
const formattedDate = `${year}-${month + 1}-${day} ${hour}:${minute}:${second}`;
console.log("Formatted Date 1:", formattedDate);

let nepalCurrentDate = new Date();

// date formater in kolkata time Zone
const indianTimeFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Kolkata",
});
console.log("Indian Time Zone: ", indianTimeFormatter.format(nepalCurrentDate));

// date formatter in Kathmandu time zone
const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Kathmandu",
});

const formattedDate2 = formatter.format(currentDate);
console.log("Formatted Date 2:", formattedDate2);

// Parse a date string
const dateString = "2024-01-27T12:30:00Z";
const parsedDate = new Date(dateString);
console.log("Parsed Date:", parsedDate.toString());

// Manipulate dates
currentDate.setDate(currentDate.getDate() + 7).toString();
currentDate.setHours(currentDate.getHours() - 3);

console.log("Modified Date:", currentDate.toDateString());

//* timestamp

const currentTimeStamp = Date.now();
console.log(currentDate.toString());

// starting time stamp of 1970 jan-01
console.log(currentDate.getTime());

// timestamp to date
let timestamp = "1706949050065";

let formateIndate = parseInt(timestamp, 10);
console.log(typeof formateIndate);
let convertIntoDate = new Date(formateIndate); // Date() parameter should be Number
console.log(convertIntoDate.toString());
