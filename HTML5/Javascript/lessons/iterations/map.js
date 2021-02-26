const temperatureCelsius = [0,22,31,40,45,12,3]
const toFahrenheit = value => (value * 9) + 32

// MAP RETURNS NEW ARRAY  
const temperatureFahrenheit = temperatureCelsius.map(toFahrenheit);

console.log(temperatureCelsius)
console.log(temperatureFahrenheit)