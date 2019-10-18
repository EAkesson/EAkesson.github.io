var fullTurn = 2*Math.PI;
var enviobjects = new Array();
var threeobj = new Array();
var stoneobj = new Array();
var otherobj = new Array();

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function enviLoad(){


	/*setTimeout( function() {
		loadEnviModels();
		findEnviObjects();
		console.log(threeobj[1]);
	//}, 2000);*/








/*	var numofTrees = 1000;
	var numofStones = 60;
	var numofGrass = 60;
	var numofFenc = 30;

	//Trees
	for(var i = 0; i < numofTrees; i++){
		var posforEnvObj = new THREE.Vector3();
		var rot = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randTree = Math.round(Math.random() * (objec.Enviroment.Trees.length-1));
		enviobjects[i] = threeobj[randTree].clone();
		enviobjects[i].position = posforEnvObj;
		enviobjects[i].rotation.z = -rot.x;
		enviobjects[i].rotation.y = -rot.y;
		earth.add(enviobjects[i]);
	}

	//Stones
	for(var i = numofTrees+1; i < numofTrees+numofStones; i++){
		var posforEnvObj = new THREE.Vector3();
		var rot = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randStone = Math.round(Math.random() * (objec.Enviroment.Stones.length-1));
		enviobjects[i] = threeobj[randStone].clone();
		enviobjects[i].position = posforEnvObj;
		enviobjects[i].rotation.z = -rot.x;
		enviobjects[i].rotation.y = -rot.y;
		earth.add(enviobjects[i]);
	}

	//Grass
	for(var i= numofTrees+numofStones; i < numofTrees+numofStones+numofGrass; i++){
		var posforEnvObj = new THREE.Vector3();
		var rot = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		enviobjects[i] = threeobj[1].clone();
		enviobjects[i].position = posforEnvObj;
		enviobjects[i].rotation.z = -rot.x;
		enviobjects[i].rotation.y = -rot.y;
		earth.add(enviobjects[i]);
	}

	for(var i= numofTrees+numofStones+numofGrass; i < numofTrees+numofStones+numofGrass+numofFenc; i++){
		var posforEnvObj = new THREE.Vector3();
		var rot = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		enviobjects[i] = threeobj[0].clone();
		enviobjects[i].position = posforEnvObj;
		enviobjects[i].rotation.z = -rot.x;
		enviobjects[i].rotation.y = -rot.y;
		earth.add(enviobjects[i]);
	}
	*/

	var objToLoad = new Array();
	var mtlToLoad = new Array();
	var posforEnvObj = new Array();
	var rot = new Array();

	var numofTrees = 1000;
	var numofStones = 60;
	var numofGrass = 60;
	var numofFenc = 30;

	//Trees
	for(var i = 0; i < numofTrees; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randTree = Math.round(Math.random() * (objec.Enviroment.Trees.length-1));
		objToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Trees[randTree].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to loobjToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
	}

	//Stones
	for(var i = numofTrees+1; i < numofTrees+numofStones; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randStone = Math.round(Math.random() * (objec.Enviroment.Stones.length-1));
		objToLoad[i] = objec.Enviroment.Stones[randStone].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Stones[randStone].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}

	//Grass
	for(var i= numofTrees+numofStones; i < numofTrees+numofStones+numofGrass; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		//var randTree = Math.round(Math.random() * (objec.Enviroment.Other.length-1));
		objToLoad[i] = objec.Enviroment.Other[1].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Other[1].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}

	for(var i= numofTrees+numofStones+numofGrass; i < numofTrees+numofStones+numofGrass+numofFenc; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		//var randTree = Math.round(Math.random() * (objec.Enviroment.Other.length-1));
		objToLoad[i] = objec.Enviroment.Other[0].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Other[0].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}


	objectLoad(objToLoad, mtlToLoad, posforEnvObj, rot, earth);

}

function randPos(posforEnvObj, rot){
	rot.x = Math.random() * (fullTurn/2 - (-1*fullTurn/2)) + (-1*fullTurn/2); //random angle
	rot.y = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	posforEnvObj.x = earthRadius*Math.sin(rot.x)*Math.cos(rot.y);
	posforEnvObj.y = earthRadius*Math.cos(rot.x);
	posforEnvObj.z = earthRadius*Math.sin(rot.x)*Math.sin(rot.y);
}

function loadEnviModels(){
	var time1 = Date.now();
	var objToLoad1 = new Array();
	var mtlToLoad1 = new Array();
	var objPos1 = new Array();

	for(var i = 0; i < objec.Enviroment.Trees.length; i++){

		objToLoad1[i] = objec.Enviroment.Trees[i].OBJpath.toString();  // String array to add filepath to the obj file that we want to load
		mtlToLoad1[i] = objec.Enviroment.Trees[i].MTLpath.toString(); // String array to add filepath to the mtl file that we want to load
		objPos1[i] = [new THREE.Vector3(0,0,0)];
			//threeobj[i] = scene.getObjectByName(objec.Enviroment.Trees[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);
	}

	for(var i = 0; i < objec.Enviroment.Stones.length; i++){

		objToLoad1[i + objec.Enviroment.Trees.length] = objec.Enviroment.Stones[i].OBJpath.toString();  // String array to add filepath to the obj file that we want to load
		mtlToLoad1[i + objec.Enviroment.Trees.length] = objec.Enviroment.Stones[i].MTLpath.toString(); // String array to add filepath to the mtl file that we want to load
		objPos1[i + objec.Enviroment.Trees.length] = [new THREE.Vector3(0,0,0)];
			//stoneobj[i] = scene.getObjectByName(objec.Enviroment.Stones[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);



	}
	for(var i = 0; i < objec.Enviroment.Other.length; i++){

		objToLoad1[i + objec.Enviroment.Trees.length + objec.Enviroment.Stones.length] = objec.Enviroment.Other[i].OBJpath.toString();  // String array to add filepath to the obj file that we want to load
		mtlToLoad1[i + objec.Enviroment.Trees.length + objec.Enviroment.Stones.length] = objec.Enviroment.Other[i].MTLpath.toString(); // String array to add filepath to the mtl file that we want to load
		objPos1[i + objec.Enviroment.Trees.length + objec.Enviroment.Stones.length] = [new THREE.Vector3(0,0,0)];
			//	otherobj[i] = scene.getObjectByName(objec.Enviroment.Other[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);

	}

	setTimeout(function() {
		objectLoad(objToLoad1, mtlToLoad1, objPos1);
		console.log(Date.now() - time1);
		//findEnviObjects();
	}, 1000);



}


function findEnviObjects() {
	/*while(scene.getObjectByName(objec.Enviroment.Trees[0].OBJpath.toString().split('.')[0].split("/").reverse()[0]) == undefined){
		console.log(scene.getObjectByName(objec.Enviroment.Trees[0].OBJpath.toString().split('.')[0].split("/").reverse()[0]))
	}*/

	for(var i = 0; i < 10000; i++){
		console.log(scene.getObjectByName(objec.Enviroment.Trees[0].OBJpath.toString().split('.')[0].split("/").reverse()[0]) == undefined);
	}

	for(var i = 0; i < objec.Enviroment.Trees.length; i++){
		console.log(scene.getObjectByName(objec.Enviroment.Trees[0].OBJpath.toString().split('.')[0].split("/").reverse()[0]))
		threeobj[i] = scene.getObjectByName(objec.Enviroment.Trees[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);
	}
	for(var i = 0; i < objec.Enviroment.Stones.length; i++){
		stoneobj[i] = scene.getObjectByName(objec.Enviroment.Stones[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);
	}
	for(var i = 0; i < objec.Enviroment.Other.length; i++){
		otherobj[i] = scene.getObjectByName(objec.Enviroment.Other[i].OBJpath.toString().split('.')[0].split("/").reverse()[0]);
	}



}