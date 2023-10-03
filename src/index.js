import "./styles.css";
import * as THREE from "three/src/Three.js";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  LookingGlassWebXRPolyfill,
  LookingGlassConfig
} from "@lookingglass/webxr";
import HdrFile from "./assets/wasteland_clouds_puresky_1k.hdr";
import helmet from "./assets/target.glb";

const config = LookingGlassConfig;
config.tileHeight = 512;
config.numViews = 45;
config.targetY = 0;
config.targetZ = 0;
config.targetDiam = 3;
config.fovy = (14 * Math.PI) / 180;
new LookingGlassWebXRPolyfill();

const scene = new THREE.Scene();

scene.add(new THREE.AmbientLight(0xaaaaaa));
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(3, 3, 3);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
document.body.append(renderer.domElement);
renderer.xr.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

const camera = new THREE.PerspectiveCamera();
camera.position.z = 3;

new RGBELoader().load(HdrFile, function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;

  scene.background = texture;
  scene.environment = texture;

  render();

  // model

  const loader = new GLTFLoader();
  loader.load(helmet, function (gltf) {
    scene.add(gltf.scene);

    render();
  });
});

renderer.setAnimationLoop(() => {
  render();
});

function render() {
  renderer.render(scene, camera);
}

document.body.append(VRButton.createButton(renderer));

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
resize();
window.addEventListener("resize", resize);
