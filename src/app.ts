import "./app.css";
import * as Cesium from 'cesium';
import * as dat from "dat.gui";
import { viewer } from "./main";
import Model from "./Model/index";
import DirectionalLight from "./DirectionalLight/index";
import Camera from "./Camera/index";

const gui = new dat.GUI({
  name: "Cesium GUI",
  width: 450,
  autoPlace: true,
  closed: false,
});
gui.domElement.id = "gui";
gui.show();

const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      height: 359,
      longitude: 114.047245,
      latitude: 22.504446,
    },
    headingPitchRoll: {
      heading: 28.084072,
      pitch: -26.346292,
      roll: 0,
    },
  },
  true,
);

const model = new Model(
  viewer,
  gui,
  '/static/CesiumBalloon.glb',
  Cesium.Cartesian3.fromDegrees(114.05104099176157, 22.509032825095247, 50),
  {
    show: true,
    scale: 7.0,
    maximumScale: 256,
    minimumPixelSize: 0.0,
    incrementallyLoadTextures: false,
    runAnimations: true,
    clampAnimations: true,
    shadows: Cesium.ShadowMode.ENABLED,
    silhouetteSize: 0.0,
    silhouetteColor: '#0000ff',
    color: '#ffffff',
    colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,
    colorBlendAmount: 0.5,
  },
  true,
);

const directionalLight = new DirectionalLight(viewer, gui, {
  direction: {
    longitude: -67,
    latitude: -8.4,
  },
  color: [255, 223, 223, 1],
  intensity: 6.2,
});