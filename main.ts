BME280.TemperatureHigherThan(40, function () {
    serial.writeLine("[W1]Warning: High temperature detected! (>40 Deg Celsius)")
})
input.onGesture(Gesture.EightG, function () {
    serial.writeLine("[W1]Warning: Heavy impact detected!")
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("[W1]Switched to USB")
    serial.redirectToUSB()
    serial.setBaudRate(BaudRate.BaudRate9600)
    serial.writeLine("[W1]Switched to USB")
})
input.onGesture(Gesture.FreeFall, function () {
    serial.writeLine("[W1]Warning: Free fall detected!")
})
input.onGesture(Gesture.TiltLeft, function () {
    serial.writeLine("[W1]Warning:Tilt detected!")
})
input.onGesture(Gesture.SixG, function () {
    serial.writeLine("[W1]Warning: Mid impact detected!")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("[W1]Switched to UART")
    serial.redirect(
    SerialPin.P15,
    SerialPin.P14,
    BaudRate.BaudRate9600
    )
    serial.writeLine("[W1]Switched to UART")
})
input.onGesture(Gesture.Shake, function () {
    serial.writeLine("[W1]Warning: Rapid convulsions detected!")
})
input.onGesture(Gesture.ThreeG, function () {
    serial.writeLine("[W1]Warning: Low impact detected!")
})
weatherbit.startWeatherMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
// basic.pause(1000)
// serial.write_line("W1=" + str(input.running_time() / 1000) + " " + str(weatherbit.temperature() / 100) + " " + str(weatherbit.humidity() / 1024) + " " + str(weatherbit.pressure() / 256)  + " " + str(weatherbit.altitude()))
// basic.pause(1000)
// serial.write_line("W2=" + str(weatherbit.soil_moisture()) + " " + str(weatherbit.soil_temperature() / 100))
// basic.pause(1000)
// serial.write_line("W3=" + str(weatherbit.wind_speed()) + " " + weatherbit.wind_direction() + " " + str(weatherbit.rain()))
// basic.pause(1000)
// serial.write_line("W4=" + str(input.acceleration(Dimension.X)) + " " + str(input.acceleration(Dimension.Y)) + " " + str(input.acceleration(Dimension.Z)) + " " + str(input.acceleration(Dimension.STRENGTH)))
// basic.pause(1000)
// serial.write_line("W5=" + " " + str(input.magnetic_force(Dimension.X)) + " " + str(input.magnetic_force(Dimension.Y)) + " " + str(input.magnetic_force(Dimension.Z)) + " " + str(input.magnetic_force(Dimension.STRENGTH)))
// serial.write_line(str(input.light_level()))
// str(input.light_level()))
basic.forever(function () {
    serial.writeLine("" + "\n" + "W1=" + ("" + input.runningTime()) + " " + ("" + weatherbit.temperature() / 100) + " " + ("" + BME280.humidity()) + " " + ("" + BME280.pressure(BME280_P.hPa)) + " " + ("" + weatherbit.windSpeed()) + " " + weatherbit.windDirection() + " " + ("" + weatherbit.rain()))
    serial.writeLine("" + "\n" + "W2=" + ("" + input.acceleration(Dimension.X)) + " " + ("" + input.acceleration(Dimension.Y)) + " " + ("" + input.acceleration(Dimension.Z)) + " " + ("" + input.acceleration(Dimension.Strength)) + " " + ("" + input.magneticForce(Dimension.X)) + " " + ("" + input.magneticForce(Dimension.Y)) + " " + ("" + input.magneticForce(Dimension.Z)) + " " + ("" + input.magneticForce(Dimension.Strength)))
    basic.pause(1000)
})
