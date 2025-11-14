// HTML elements:
const radioGroup = document.querySelector("fieldset[role='radiogroup']");
const valueInput = document.getElementById("value");
const valueLabel = document.getElementById("value-label");
const valueUnitsSelect = document.getElementById("value-units");
const distanceInput = document.getElementById("distance");
const distanceUnitsSelect = document.getElementById("distance-units");

// Field values
let value = valueInput.value;
let valueUnit = valueUnitsSelect.value;
let distance = distanceInput.value;
let distanceUnit = distanceUnitsSelect.value;

// Change "Value" text when "Pace" or "Time" is selected
radioGroup.addEventListener("change", (e) => {
  const target = e.target;

  if (target.matches('input[type="radio"')) changeValueLabelTextContent(target);
});

const changeValueLabelTextContent = (target) => {
  if (target.value === "pace") {
    valueLabel.textContent = "Time";
  }

  if (target.value === "time") {
    valueLabel.textContent = "Pace";
  }
};

console.log(pace, time, value, valueUnit, distance, distanceUnit, radioGroup.value);
