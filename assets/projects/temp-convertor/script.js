function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let convertedTemperature;

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById('result').value = `${temperatureInput} Celsius is ${convertedTemperature.toFixed(2)} Fahrenheit`;
    } else if (unit === 'celcious') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById('result').value = `${temperatureInput} Fahrenheit is ${convertedTemperature.toFixed(2)} Celsius`;
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
        document.getElementById('result').value = `${temperatureInput} Kelvin is ${convertedTemperature.toFixed(2)} Celsius`;
    } else {
        alert('Please select a valid unit for temperature.');
    }

}