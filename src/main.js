//Imports
import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

//Scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//snowman
const SphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const SphereMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
const sphere = new THREE.Mesh(SphereGeometry, SphereMaterial);
scene.add(sphere);

//head
const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const headMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.set(0, 0.7, 0);
sphere.add(head);

//eyes
const eyeGeometry = new THREE.SphereGeometry(0.1, 32,32);
const eyeMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
eye1.position.set(-0.15, 0.1, 0.35);
head.add(eye1);

const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
eye2.position.set(0.15, 0.1, 0.35);
head.add(eye2);

//nose
const noseGeometry = new THREE.ConeGeometry(0.08, 0.3, 32);
const noseMaterial = new THREE.MeshPhongMaterial({color: 0xffa500});
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.set(0, 0.05, 0.4);
head.add(nose);

//hat
const hatGeometry1 = new THREE.CylinderGeometry(0.5, 1, 0.2, 32);
const hatGeometry2 = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
const hatMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
const hat1 = new THREE.Mesh(hatGeometry1, hatMaterial);
hat1.position.set(0, 0.5, 0);
head.add(hat1);

const hat2 = new THREE.Mesh(hatGeometry2, hatMaterial);
hat2.position.set(0, 0.8, 0);
head.add(hat2);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//Camera
camera.position.set(2, 4, 5);
//camera.lookAt(0, 0, 0);
camera.lookAt(axesHelper.position);

// Lights
const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
scene.add(directionalLight);

//Controls
let controls = new OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.screenSpacePanning = false; 

controls.minDistance = 0;
controls.maxDistance = 100;

// Animation
function animate(time) {
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
