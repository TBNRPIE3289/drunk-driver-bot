let sonar = 0
cuteBot.trackEvent(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine, function () {
    cuteBot.motors(100, -100)
})
cuteBot.trackEvent(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine, function () {
    cuteBot.motors(-100, 100)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 3 && sonar < 15) {
        cuteBot.motors(0, 0)
        cuteBot.motors(randint(-100, 100), randint(-100, 100))
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.play(music.stringPlayable("C C C C C C C C ", 500), music.PlaybackMode.LoopingInBackground)
        if (input.lightLevel() < 10) {
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 255)
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 255)
        } else {
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
            cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(-100, 100)
    basic.pause(200)
    cuteBot.forward()
    basic.pause(500)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(100, -100)
    basic.pause(200)
    cuteBot.forward()
})
