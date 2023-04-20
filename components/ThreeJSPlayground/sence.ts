import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const useScene = (args: { container: HTMLElement }) => {
  const { container } = args

  const bounds = container.getBoundingClientRect()

  const scene = new Three.Scene()

  const camera = new Three.PerspectiveCamera(60, 1)

  const renderer = new Three.WebGLRenderer()

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize( bounds.width, bounds.height );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = Three.PCFSoftShadowMap;
  container.appendChild(renderer.domElement)
  scene.background = new Three.Color().setRGB(255, 255, 255)




  const boxWidth = 2
  const boxHeight = 2
  const boxDepth = 2
  const boxSpacing = 1
  const boxGeometry = new Three.BoxGeometry(boxWidth,boxHeight,boxDepth)
  const column = 21
  const row = 21
  for (let i = 1; i < row; i ++) {
    for (let j = 1; j < column; j++) {
      const material = new Three.MeshBasicMaterial({ color: Three.Color.NAMES.azure })
      const polygon = new Three.Mesh(boxGeometry, material)
      polygon.position.x = (i - 1) * (boxWidth + boxSpacing)
      polygon.position.y = (j - 1) * (boxHeight + boxSpacing)
      polygon.receiveShadow = true
      scene.add(polygon)
    }
  }

  camera.position.z = 25
  camera.position.x = (column - 1) * (boxWidth + boxSpacing) / 2
  camera.position.y = (row - 1) * (boxHeight + boxSpacing) / 2

  camera.lookAt(new Three.Vector3(camera.position.x, camera.position.y, 0))
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.target = new Three.Vector3(camera.position.x, camera.position.y, 0)

  const light = new Three.DirectionalLight( Three.Color.NAMES.red )
  light.position.set( 0, 0, 20 )
  light.castShadow = true
  light.lookAt(new Three.Vector3(camera.position.x, camera.position.y, 0))
  scene.add( light );

  // const rayCaster = new Three.Raycaster()
  // const rayCasterPointer = new Three.Vector2()

  // window.addEventListener('pointermove', (event) => {
  //   const bounds = container.getBoundingClientRect()
  //
  //   rayCasterPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  //   rayCasterPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //
  //   rayCaster.setFromCamera(rayCasterPointer, camera)
  // })

  let rotateDeltaX = 0
  let rotateDeltaY = 0

  const render = () => {
    requestAnimationFrame(render)
    controls.update()
    renderer.render(scene, camera)
  }
  render()
  return
}
