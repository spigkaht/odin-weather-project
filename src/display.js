const displayResult = (result) => {
  const day0 = result["days"]["0"];
  const day1 = result["days"]["1"];
  const abr1 = getDayOfWeek(day1["datetime"]);
  const day2 = result["days"]["2"];
  const abr2 = getDayOfWeek(day2["datetime"]);
  const day3 = result["days"]["3"];
  const abr3 = getDayOfWeek(day3["datetime"]);
  const day4 = result["days"]["4"];
  const abr4 = getDayOfWeek(day4["datetime"]);
  const contentDiv = document.querySelector("#content");

  const display = `
  <div class="today">
    <p>Today's weather for ${result["resolvedAddress"]}</p>
    <p>Min: ${day0["tempmin"]} Max: ${day0["tempmax"]}</p>
  </div>
  <div class="forecast">
    <p>Forecast for:</p>
    <p>${abr1} ${day1["conditions"]}</p>
    <p>Min: ${day1["tempmin"]} Max: ${day1["tempmax"]}</p>
    <p>${abr2} ${day2["conditions"]}</p>
    <p>Min: ${day2["tempmin"]} Max: ${day2["tempmax"]}</p>
    <p>${abr3} ${day3["conditions"]}</p>
    <p>Min: ${day3["tempmin"]} Max: ${day3["tempmax"]}</p>
    <p>${abr4} ${day4["conditions"]}</p>
    <p>Min: ${day4["tempmin"]} Max: ${day4["tempmax"]}</p>
  </div>
  `

  contentDiv.innerHTML = display;
}

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getUTCDay()];
};

export { displayResult };
