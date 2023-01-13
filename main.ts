basic.showString("press ")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.showString("to start")
if (input.buttonIsPressed(Button.A)) {
    basic.showString("" + (76 + 85))
}
basic.forever(function () {
	
})
