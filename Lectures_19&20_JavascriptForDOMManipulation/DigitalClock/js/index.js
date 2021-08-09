/*
function displayAlert() {
  const siteTitle = document.querySelector("#site-title");
  console.log("siteTitle", siteTitle);
    const siteTitleById = document.getElementById("site-title");
    console.log("siteTitleById", siteTitleById);
    const siteTitleByTagName = document.getElementsByTagName("h2")[0];
    console.log("siteTitleByTagName", siteTitleByTagName);
    siteTitle.innerText = "Current Time";
}
setTimeout(displayAlert, 4000);
*/

function displayTime() {
  const currentDate = new Date();
  console.log("Function to display time", currentDate);
  const currentTime = document.querySelector("#current-time");
  currentTime.innerText = currentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}
const timer = setInterval(displayTime, 1000);
function stopClock() {
  clearInterval(timer);
}
// displayTime();
//
