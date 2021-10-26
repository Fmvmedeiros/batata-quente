radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        ter_batata = true
        basic.showLeds(`
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            `)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else {
        ter_batata = false
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(destino)
})
input.onGesture(Gesture.Shake, function () {
    if (ter_batata) {
        destino = randint(1, jogadores)
        if (destino != ID) {
            ter_batata = false
            basic.clearScreen()
            radio.sendNumber(destino)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(destino)
})
let destino = 0
let ter_batata = false
let ID = 0
let jogadores = 0
radio.setGroup(53)
jogadores = 9
ID = 1
basic.showNumber(ID)
if (ID == 1) {
    ter_batata = true
} else {
    ter_batata = false
}
