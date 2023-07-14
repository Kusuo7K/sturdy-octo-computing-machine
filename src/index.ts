import { Application, Assets, Container, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
//reescala la pantalla para que el juego quede centrado en la ventana
window.addEventListener("resize", ()=>{
	
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX,scaleY);

	const screenWidth = Math.round(app.screen.width*scale);
	const screenheight = Math.round(app.screen.height*scale);

	const marginHorizontal = Math.floor((window.innerWidth - screenWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - screenheight)/2);

	app.view.style!.width = screenWidth + "px";
	app.view.style!.height = screenheight + "px";
	
	(app.view.style as any).marginLeft = marginHorizontal + "px";
	(app.view.style as any).marginRight = marginHorizontal + "px";

	(app.view.style as any).marginTop = marginVertical + "px";
	(app.view.style as any).marginbottom = marginVertical + "px";
})
//-------------------------------------------------------------------
window.dispatchEvent(new Event("resize"));

Assets.add("Personaje","./Personaje.png");
Assets.add("gorro","./gorro.png.png");

Assets.load([ "gorro","Personaje"]).then(()=>{

	const personaje: Sprite = Sprite.from("Personaje");
	const gorro: Sprite = Sprite.from("gorro");
	
	
	
	gorro.scale.set(10);
	gorro.position.set(195,30);

	personaje.scale.set(25);
	personaje.position.set(150,130);
	

	const imagWithFace: Container = new Container();

	imagWithFace.addChild(personaje);
	imagWithFace.addChild(gorro);
	

	app.stage.addChild(imagWithFace);

	
})