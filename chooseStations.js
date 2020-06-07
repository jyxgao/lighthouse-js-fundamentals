const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations (station) {
  let goodStations = [];
  //Check each element of the input array
  for (let i = 0; i < station.length; i++) {
    if (station[i][1] >= 20 && (station[i][2] === "school" || station[i][2] === "community centre")) {
      goodStations.push(station[i][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));