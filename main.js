"use strict";

// var R = require('ramda');
//
// var square = function square (x) { return x * x; };
// var squares = R.chain(square, [1, 2, 3, 4, 5]);

// document.getElementById('response').innerHTML = squares;


// var loader = new THREE.BinaryLoader();
// var callback = function( geometry ) {
//   object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0x555555, specular: 0x111111, shininess: 50 }  )  );
//   object.scale.x = object.scale.y = object.scale.z = 0.80;
//   scene.add( object );
// };
// loader.load( "obj/walt/WaltHead_bin.js", callback );




var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var controls = new OrbitControls( camera );
controls.target.set( 0, 2, 0 );
controls.update();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

for (var i=0; i < 10; i ++) {
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  cube.position.y = i * 1.2;
  scene.add( cube );
}


camera.position.z = 5;


// var sphere = new THREE.SphereGeometry( 5, 5, 10 );
// var light1 = new THREE.PointLight( 0xff0040, 2, 50 );
// light1.add( new THREE.Mesh( sphere, new THREE.MeshLambertMaterial( { color: 0xff0040 } ) ) );
// scene.add( light1 );
// light1.position.y = 10;

var light = new THREE.PointLight(0xffffff);
light.position.set(-10,20,10);
scene.add(light);

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

animate();
