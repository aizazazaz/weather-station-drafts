input.onButtonPressed(Button.A, function () {
    serial.writeLine("[Weather Station] Switched to USB")
    serial.redirectToUSB()
    serial.setBaudRate(BaudRate.BaudRate9600)
    serial.writeLine("[Weather Station] Switched to USB")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("[Weather Station] Switched to UART")
    serial.redirect(
    SerialPin.P15,
    SerialPin.P14,
    BaudRate.BaudRate9600
    )
    serial.writeLine("[Weather Station] Switched to UART")
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
weatherbit.startWeatherMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
serial.writeLine("[Weather Station] Starting!")
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    serial.writeLine("W1=" + input.runningTime() + " " + weatherbit.temperature() / 100 + " " + weatherbit.humidity() / 1024 + " " + weatherbit.pressure() / 256 + " " + weatherbit.soilMoisture() / 900 + " " + weatherbit.soilTemperature() / 100 + " " + weatherbit.windSpeed() + " " + weatherbit.windDirection() + " " + weatherbit.rain() + " " + weatherbit.altitude())
    basic.pause(500)
    serial.writeLine("W2=" + input.acceleration(Dimension.X) + " " + input.acceleration(Dimension.Y) + " " + input.acceleration(Dimension.Z) + " " + input.acceleration(Dimension.Strength) + " " + input.lightLevel() + " " + input.magneticForce(Dimension.X) + " " + input.magneticForce(Dimension.Y) + " " + input.magneticForce(Dimension.Z) + " " + input.magneticForce(Dimension.Strength))
    basic.pause(500)
})
