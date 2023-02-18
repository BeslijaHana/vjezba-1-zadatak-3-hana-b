let smjer = 0
input.calibrateCompass()
basic.forever(function () {
    smjer = input.magneticForce(Dimension.Strength)
})
