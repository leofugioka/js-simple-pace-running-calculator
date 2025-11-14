// HTML elements:
const paceInput = document.getElementById("pace");
const timeInput = document.getElementById("time");
const valueInput = document.getElementById("value");
const valueLabel = document.getElementById("value-label");
const unitsSelect = document.getElementById("units");
const distanceInput = document.getElementById("distance");

// Field values
let pace = paceInput.checked;
let time = timeInput.checked;
const value = valueInput.value;
const units = unitsSelect.value;
const distance = distanceInput.value;

// Change "Value" text when "Pace" or "Time" is selected
paceInput.addEventListener("input", () => {
  pace = paceInput.checked;
  time = timeInput.checked;
  changeValueTextContent();
});

timeInput.addEventListener("input", () => {
  pace = paceInput.checked;
  time = timeInput.checked;
  changeValueTextContent();
});

const changeValueTextContent = () => {
  if (pace) {
    valueLabel.textContent = "Time";
  }

  if (time) {
    valueLabel.textContent = "Pace";
  }
};

console.log(pace, time, value, units, distance);
