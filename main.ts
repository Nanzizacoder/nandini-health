namespace SpriteKind {
    export const Button1 = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`Hi`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 . . . . 
    2 2 2 9 9 9 9 9 9 9 2 9 . . . . 
    2 9 2 9 9 9 9 9 9 9 9 9 . . . . 
    2 2 2 9 2 2 2 2 2 9 2 9 . . . . 
    2 9 2 9 2 9 2 9 2 9 2 9 . . . . 
    2 2 2 9 2 9 2 9 2 9 2 9 . . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Button1)
