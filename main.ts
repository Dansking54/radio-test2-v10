radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (_1 == 0) {
        _1 = 1
    } else if (_2 == 0) {
        _2 = 1
    } else if (_3 == 0) {
        _3 = 1
    } else if (_4 == 0) {
        _4 = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(_1)
    radio.sendNumber(_2)
    radio.sendNumber(_3)
    radio.sendNumber(_4)
    _2 = 0
    _3 = 0
    _4 = 0
    _1 = 0
})
input.onButtonPressed(Button.B, function () {
    if (_1 == 0) {
        _1 = 2
    } else if (_2 == 0) {
        _2 = 2
    } else if (_3 == 0) {
        _3 = 2
    } else if (_4 == 0) {
        _4 = 2
    }
})
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0
radio.setGroup(0)
