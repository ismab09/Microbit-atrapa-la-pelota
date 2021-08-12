input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Sprite: game.LedSprite = null
game.setScore(0)
Sprite = game.createSprite(2, 2)
basic.forever(function () {
    Sprite.move(1)
    Sprite.ifOnEdgeBounce()
    basic.pause(200)
})
