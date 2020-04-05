// Steering with IR remote:
/*
power = 0
stop = 1
play = 2
menu = 4
forward = 5
snooze = 6
left = 8
enter = 9
right = 10
stereo = 12
down = 13
up = 14
sleep = 16
bell = 17
down = 18
mute = 20
minus = 21
plus = 22
*/

function horizon() {
    OLED12864_I2C.hline(
        20,
        20,
        25,
        1
    )
    OLED12864_I2C.hline(
        20,
        21,
        25,
        1
    )
    OLED12864_I2C.hline(
        20,
        22,
        25,
        1
    )
    OLED12864_I2C.hline(
        20,
        23,
        25,
        1
    )
    OLED12864_I2C.hline(
        20,
        18,
        25,
        1
    )
    OLED12864_I2C.hline(
        20,
        19,
        25,
        1
    )
}
function right() {
    horizon()
    OLED12864_I2C.vline(
        43,
        14,
        14,
        1
    )
    OLED12864_I2C.vline(
        44,
        15,
        12,
        1
    )
    OLED12864_I2C.vline(
        45,
        16,
        10,
        1
    )
    OLED12864_I2C.vline(
        46,
        17,
        8,
        1
    )
    OLED12864_I2C.vline(
        47,
        18,
        6,
        1
    )
    OLED12864_I2C.vline(
        48,
        19,
        4,
        1
    )
    OLED12864_I2C.vline(
        49,
        20,
        2,
        1
    )
}
maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 5) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Fwd: " + speed,
            1
        )
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, speed)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 13) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Back: " + speed,
            1
        )
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, speed)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 8) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Speed: " + speed,
            1
        )
        right()
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, speed)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 10) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Speed: " + speed,
            1
        )
        left()
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, speed)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 9) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Stop!",
            1
        )
        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 21) {
        speed = speed - 10
        if (speed < 50) {
            speed = 50
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Speed: " + speed,
            1
        )
    }
    if (message == 22) {
        maqueen.motorStopAll()
        speed = speed + 10
        if (speed > 255) {
            speed = 255
        }
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Speed: " + speed,
            1
        )
    }
    if (message == 17) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Bip!",
            1
        )
        music.playTone(Note.C, 200)
    }
    if (message == 12) {
        strip.rotate()
        strip.show()
    }
    if (message == 14) {
        strip.setBrightness(255)
        strip.setPixelColor(0, NeoPixelColors.Yellow); // white
        strip.setPixelColor(1, NeoPixelColors.Red);     // red
        strip.setPixelColor(2, NeoPixelColors.Green);     // green
        strip.setPixelColor(3, NeoPixelColors.Blue);    // blue
        strip.show()
    }
    if (message == 18) {
        strip.setBrightness(10)
        strip.setPixelColor(0, NeoPixelColors.Yellow); // white
        strip.setPixelColor(1, NeoPixelColors.Red);     // red
        strip.setPixelColor(2, NeoPixelColors.Green);     // green
        strip.setPixelColor(3, NeoPixelColors.Blue);    // blue
        strip.show()
    }
    if (message == 0) {
        if (powerON == 1) {
            strip.clear()
            strip.show()
            powerON = 0
        }
        else {
            strip.setPixelColor(0, NeoPixelColors.Yellow); // white
            strip.setPixelColor(1, NeoPixelColors.Red);     // red
            strip.setPixelColor(2, NeoPixelColors.Green);     // green
            strip.setPixelColor(3, NeoPixelColors.Blue);    // blue
            strip.show()
            powerON = 1
        }
    }
    if (message == 2) {
        if (playON == 1) {
            playON = 0
        }
        else {
            playON = 1
        }
    }
})
function left() {
    horizon()
    OLED12864_I2C.vline(
        20,
        14,
        14,
        1
    )
    OLED12864_I2C.vline(
        19,
        15,
        12,
        1
    )
    OLED12864_I2C.vline(
        18,
        16,
        10,
        1
    )
    OLED12864_I2C.vline(
        17,
        17,
        8,
        1
    )
    OLED12864_I2C.vline(
        16,
        18,
        6,
        1
    )
    OLED12864_I2C.vline(
        15,
        19,
        4,
        1
    )
    OLED12864_I2C.vline(
        14,
        20,
        2,
        1
    )
}
let speed = 0
OLED12864_I2C.init(60)
speed = 100
OLED12864_I2C.showString(
    1,
    0,
    "Maqueen!",
    1
)
OLED12864_I2C.showString(
    1,
    1,
    "Waiting for",
    1
)
OLED12864_I2C.showString(
    1,
    2,
    "IR command",
    1
)
// Create a NeoPixel driver - specify the pin, number of LEDs, and the type of 
// the NeoPixel srip, either standard RGB (with GRB or RGB format) or RGB+White.
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB);


let powerON = 255
let playON = 0
let dist = 0
basic.forever(function () {
    dist = Math.floor(maqueen.sensor(PingUnit.Centimeters))


    if ((dist != 0) && (dist < 10)) {
        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "Obstacle!",
            1
        )
        OLED12864_I2C.showString(
            1,
            2,
            "D: " + dist,
            1
        )
    }



    if (playON == 1) {
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
            1,
            0,
            "DEMO",
            1
        )
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
        strip.setBrightness(10)
        strip.setPixelColor(0, NeoPixelColors.Yellow); // white
        strip.setPixelColor(1, NeoPixelColors.Red);     // red
        strip.setPixelColor(2, NeoPixelColors.Green);     // green
        strip.setPixelColor(3, NeoPixelColors.Blue);    // blue
        strip.show()

        for (let index = 0; index < 30; index++) {


            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(1000)
            strip.rotate()
            strip.show()
            OLED12864_I2C.showString(
                1,
                2,
                "count:" + index,
                1
            )
        }

        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        strip.clear()
        strip.show()
    }
    basic.pause(100)

})