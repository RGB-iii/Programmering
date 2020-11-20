let dndMonsters;
let myMonster;

function preload(){
	dndMonsters = loadJSON("dndData.json");


}

function setup() {

	createCanvas(400, 400);
	let monsterInp = createInput('');
	monsterInp.input(findMonster);
}


function draw() {
	background(200, 50, 0)
	myMonster ? text(myMonster.name, 10, 50): text('No Monster', 10, 50);

/* 	for(i = 0 ; i < dndMonsters.data.length; i++){
		text(dndMonsters.data[i].name, 10, 50+i*10);
	} */
}

function findMonster(){
	for (i = 0; i < dndMonsters.data.length; i++){
		let tempMonster = dndMonsters.data[i];
		if(tempMonster.name == this.value()){
			myMonster = tempMonster;
		}
	} 
}