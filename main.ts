input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        music.ringTone(262)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        music.ringTone(294)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        music.ringTone(330)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.ringTone(349)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.ringTone(392)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . #
            # # # # #
            # # # # #
            `)
        music.ringTone(440)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.ringTone(494)
        basic.pause(100)
        music.stopAllSounds()
    }
    basic.clearScreen()
    basic.pause(1000)
    random_num = randint(5, 99)
    for (let index = 0; index < 5; index++) {
        basic.showString("" + (random_num))
    }
    basic.pause(3000)
    basic.showLeds(`
        # # . . .
        # . . . .
        # # # # #
        # . . . .
        # # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        # # . . .
        # . . . .
        # # # # #
        # . . . .
        # # . . .
        `)
})
let random_num = 0
music.setVolume(35)
basic.showLeds(`
    # # . . .
    # . . . .
    # # # # #
    # . . . .
    # # . . .
    `)
