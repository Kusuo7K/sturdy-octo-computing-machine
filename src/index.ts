import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const clampy: Sprite = Sprite.from("imagen.jpg");

//clampy.anchor.set(0.5);
console.log("Hola Mundo");

clampy.x = 0;
clampy.y = 0;

app.stage.addChild(clampy);