basic.forever(function () {
    input.calibrateCompass()
    basic.showNumber(input.compassHeading())
    basic.showArrow(ArrowNames.North)
})
