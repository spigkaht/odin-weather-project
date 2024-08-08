const apiCall = (location) => {
  return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=T67352S6CHWWZ8AYX6AM3X2W8&contentType=json`, {
    method: "GET",
    mode: 'cors'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    console.error("Fetch error: ", err);
  });
}

export { apiCall };
