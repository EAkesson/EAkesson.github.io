function loadWorld() {

/*	// Sphere
*	setTimeout( function() {
*		var balloonGeometry = new THREE.SphereGeometry(20, 32, 32);
*		var balloonMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
*		balloon = new THREE.Mesh(balloonGeometry, balloonMaterial);
*		scene.add(balloon);
*		balloon.position.y = 520;
*	},20000);
*/
	var objToLoad = ['balloon/Air_Balloon/realSizeBalloon1.obj']; // String array to add filepath to the obj file that we want to load
	var mtlToLoad = ['balloon/Air_Balloon/realSizeBalloon1.mtl']; //// String array to add filepath to the mtl file that we want to load
	var objPos = [new THREE.Vector3(0,0,0)];
	objectLoad(objToLoad, mtlToLoad, objPos); //Loaded object can be found using filename in childrens of scene

	var earthGeometry = new THREE.SphereGeometry( earthRadius, 100, 100 );
	var earthMaterial = new THREE.MeshLambertMaterial({color: 0x005500});
	/*var earthMaterial = new THREE.MeshPhongMaterial( {
		map: new THREE.TextureLoader().load("EnviModels/Map__3_Dent.png")
	 } );
	earthMaterial.map.wrapS = THREE.RepeatWrapping;
	earthMaterial.map.wrapT = THREE.RepeatWrapping;
	earthMaterial.map.repeat.set( 20, 20 );*/
	earth = new THREE.Mesh( earthGeometry, earthMaterial );
	earth.receiveShadow = true;
	scene.add( earth );
	earth.rotation.x = 0.3;

	var geometry = new THREE.SphereGeometry(earthRadius+400, 60, 40);
	var material = new THREE.MeshPhongMaterial( {
		map: new THREE.TextureLoader().load("EnviModels/Sky019.jpg")
	} );
	skyBox = new THREE.Mesh(geometry, material);
	skyBox.material.side = THREE.BackSide;
	//earth.add(skyBox);
	scene.add(skyBox);



	//var ambient = new THREE.AmbientLight('#777', 1.2); // Important to be able to see any object loaded my objectLoad()
	var ambient = new THREE.AmbientLight('#777', 1.3); // Important to be able to see any object loaded my objectLoad()
	scene.add(ambient);

	light = new THREE.PointLight( 0xf55e2f, 25, 400, 2);
	light.position.set( 50, earthRadius + 200, -100 );
	light.castShadow = true;            // default false

	//earth.add(light);
	scene.add(light);

	//Set up shadow properties for the light
	light.shadow.mapSize.width = 1024;  // default
	light.shadow.mapSize.height = 1024; // default
	light.shadow.camera.near = 0.5;       // default
	light.shadow.camera.far = 1000      // default



	setTimeout( function() {
		enviLoad();
		balloon = scene.getObjectByName("realSizeBalloon1");
		balloon.position.y = earthRadius;
		compload = true;
	}, 1000);
}


