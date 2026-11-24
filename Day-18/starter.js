const activityName = "Space observation";
const capacity = 10;
const registered = 9;
const seatsLeft = capacity - registered; // 10 - 10 = 0
const hasSeats = seatsLeft > 0; // this condition sends the program the wrong path. 

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}
