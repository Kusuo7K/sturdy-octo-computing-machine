import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
Assets.add("myImagen","imagen.jpg");
Assets.load(["myImagen"]).then(()=>{

	const imagen: Sprite = Sprite.from("myImagen");
	
	//clampy.anchor.set(0.5);
	console.log("Hola Mundo", imagen.width, imagen.height);
	
	imagen.x = 0;
	imagen.y = 0;
	
	app.stage.addChild(imagen);
})