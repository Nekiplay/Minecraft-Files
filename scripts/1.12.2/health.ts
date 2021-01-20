import * as gui from '@cristalix/client-api';

function drawKey(title: string, x: number, y: number) {

    Draw.drawStringWithShadow(title, x + 3, y, -1);

}
function SetNickname(title:string): void {
	let ent = minecraft.getPlayer()
    let playerstat = ent.getPlayerInfo()
	
	let text23 = new TextComponentString(title);
	playerstat.setDisplayName(text23)
}
function makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
}
let togglebg = false
Events.on(plugin, 'gui_overlay_render', () => {
	let ent = minecraft.getPlayer()
	if (Keyboard.isKeyDown(Keyboard.KEY_F))
	{
		ent.jump()
	}
	if (togglebg)
	{
		ent.setHealth(5000)
		ent.setAbsorptionAmount(5000)
	}
	else
	{
		ent.setAbsorptionAmount(0)
	}
	if (Keyboard.isKeyDown(Keyboard.KEY_G))
	{
		togglebg = !togglebg
	}
	else if (Keyboard.isKeyDown(Keyboard.KEY_I))
	{
		let olt = ent.getAIMoveSpeed()
		setTimeout(() => 
		{
			ent.setAIMoveSpeed(100)
		},
		5000);
		ent.setAIMoveSpeed(olt)
	}
	SetNickname(makeString())
	drawKey('Health: ' + ent.getHealth() + "/" + ent.getMaxHealth(), 55, 30);
	drawKey('Foold: ' + ent.getAbsorptionAmount() + "/" + 20, 55, 50);
});