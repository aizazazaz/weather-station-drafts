def on_temperature_higher_than():
    serial.write_line("[Weather Station] Warning: High temperature detected! (>40 Deg Celsius)")
BME280.temperature_higher_than(40, on_temperature_higher_than)

def on_gesture_eight_g():
    serial.write_line("[Weather Station] Warning: Heavy impact detected!")
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_button_pressed_a():
    serial.write_line("[Weather Station] Switched to USB")
    serial.redirect_to_usb()
    serial.set_baud_rate(BaudRate.BAUD_RATE9600)
    serial.write_line("[Weather Station] Switched to USB")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    serial.write_line("[Weather Station] Warning: Free fall detected!")
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_gesture_six_g():
    serial.write_line("[Weather Station] Warning: Mid impact detected!")
input.on_gesture(Gesture.SIX_G, on_gesture_six_g)

def on_data_received():
    basic.pause(100)
serial.on_data_received("P1", on_data_received)

def on_button_pressed_b():
    serial.write_line("[Weather Station] Switched to UART")
    serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)
    serial.write_line("[Weather Station] Switched to UART")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    serial.write_line("[Weather Station] Warning: Rapid convulsions detected!")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_data_received2():
    basic.pause(100)
serial.on_data_received("P0", on_data_received2)

def on_gesture_three_g():
    serial.write_line("[Weather Station] Warning: Low impact detected!")
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

weatherbit.start_weather_monitoring()
weatherbit.start_rain_monitoring()
weatherbit.start_wind_monitoring()
serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)
BME280.address(BME280_I2C_ADDRESS.ADDR_0X76)
# basic.pause(1000)
# serial.write_line("W1=" + str(input.running_time() / 1000) + " " + str(weatherbit.temperature() / 100) + " " + str(weatherbit.humidity() / 1024) + " " + str(weatherbit.pressure() / 256)  + " " + str(weatherbit.altitude()))
# basic.pause(1000)
# serial.write_line("W2=" + str(weatherbit.soil_moisture()) + " " + str(weatherbit.soil_temperature() / 100))
# basic.pause(1000)
# serial.write_line("W3=" + str(weatherbit.wind_speed()) + " " + weatherbit.wind_direction() + " " + str(weatherbit.rain()))
# basic.pause(1000)
# serial.write_line("W4=" + str(input.acceleration(Dimension.X)) + " " + str(input.acceleration(Dimension.Y)) + " " + str(input.acceleration(Dimension.Z)) + " " + str(input.acceleration(Dimension.STRENGTH)))
# basic.pause(1000)
# serial.write_line("W5=" + " " + str(input.magnetic_force(Dimension.X)) + " " + str(input.magnetic_force(Dimension.Y)) + " " + str(input.magnetic_force(Dimension.Z)) + " " + str(input.magnetic_force(Dimension.STRENGTH)))
# serial.write_line(str(input.light_level()))
# str(input.light_level()))

def on_forever():
    serial.write_line("" + "\n" + "W1=" + ("" + str(input.running_time())) + " " + ("" + str(weatherbit.temperature() / 100)) + " " + ("" + str(BME280.humidity())) + " " + ("" + str(BME280.pressure(BME280_P.H_PA))) + " " + ("" + str(weatherbit.wind_speed())) + " " + weatherbit.wind_direction() + " " + ("" + str(weatherbit.rain())))
    serial.write_line("" + "\n" + "W2=" + ("" + str(input.acceleration(Dimension.X))) + " " + ("" + str(input.acceleration(Dimension.Y))) + " " + ("" + str(input.acceleration(Dimension.Z))) + " " + ("" + str(input.acceleration(Dimension.STRENGTH))) + " " + ("" + str(input.magnetic_force(Dimension.X))) + " " + ("" + str(input.magnetic_force(Dimension.Y))) + " " + ("" + str(input.magnetic_force(Dimension.Z))) + " " + ("" + str(input.magnetic_force(Dimension.STRENGTH))))
    basic.pause(1000)
basic.forever(on_forever)
