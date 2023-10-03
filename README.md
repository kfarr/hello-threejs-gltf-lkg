# hello-threejs-gltf-lkg

"known good" example of working three.js gltf/glb -> looking glass display setup

<img src="3dstreet-glb-lookingglass.gif" />

original source:
https://codesandbox.io/s/hello-three-js-gltf-c4uyw2?from-embed=&file=/src/index.js

from these docs:
https://docs.lookingglassfactory.com/developer-tools/webxr/three.js#the-basics

modified to use a different hdr and scenes exported from 3dstreet in glb format

## Instructions to view your 3DStreet scene on a Looking Glass Display
* Open or create a [3DStreet scene](https://3dstreet.app) that you'd like to view in 3D on the Looking Glass
* In 3DStreet Editor, click Save > Save as GLB (or Share > Download as GLB)
* Clone [this repository]([url](https://github.com/kfarr/hello-threejs-gltf-lkg/)) and copy your saved 3DStreet glb into /src/assets of this repository as target.glb
* Run `npm install` then run `npm start`
* Ensure that Looking Glass Bridge is installed for your OS and has recognized your looking glass as described here: https://lookingglassfactory.com/software/looking-glass-bridge
* Ensure that your Looking Glass shows your second desktop as described in WebXR instructions: https://docs.lookingglassfactory.com/developer-tools/webxr
* Open your browser to http://localhost:1234/
* Click "ENTER VR"
* Manually move the new window that pops up to your Looking Glass display (see Image 1)
* Double click on the window
* Now zoom out a little bit by scrolling up or down, and use the new controls to modify the appearance of your scene (see Image 2) Keep experimenting with all the levers on the View Controls, they can really change the feeling and mood of the scene!

Image 1 - Double click the "Looking Glass Window" to make fullscreen after moving window over to your Looking Glass device 
![image](https://github.com/kfarr/hello-threejs-gltf-lkg/assets/470477/20037d11-b794-48fc-931d-ffd69f85d00d)

Image 2 - LookingGlass WebXR View Controls:
![image](https://github.com/kfarr/hello-threejs-gltf-lkg/assets/470477/daf0a3a9-74b2-4a2d-aa48-961861eab9dd)
