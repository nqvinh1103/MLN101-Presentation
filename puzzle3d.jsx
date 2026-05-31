// ============================================================
//  PUZZLE 3D — hình người ghép từ các mảnh puzzle (Three.js)
//  Vanilla Three.js gắn vào React qua ref (ổn định, không cần r3f)
// ============================================================

// Tạo shape mảnh puzzle: hình chữ nhật bo góc + các "núm" lồi ra ở cạnh
function makePuzzleShape(w, h, tabs) {
  // tabs: {t,r,b,l} mỗi cạnh 0 = phẳng, 1 = núm lồi ra
  const s = new THREE.Shape();
  const hw = w / 2,
    hh = h / 2;
  const rad = Math.min(w, h) * 0.16; // bán kính núm
  // bắt đầu góc dưới-trái, đi ngược chiều kim đồng hồ
  s.moveTo(-hw, -hh);
  // cạnh DƯỚI (trái -> phải), núm lồi xuống (-y)
  if (tabs.b) {
    s.lineTo(-rad, -hh);
    s.absarc(0, -hh, rad, Math.PI, 2 * Math.PI, false);
    s.lineTo(hw, -hh);
  } else s.lineTo(hw, -hh);
  // cạnh PHẢI (dưới -> trên), núm lồi ra (+x)
  if (tabs.r) {
    s.lineTo(hw, -rad);
    s.absarc(hw, 0, rad, -Math.PI / 2, Math.PI / 2, false);
    s.lineTo(hw, hh);
  } else s.lineTo(hw, hh);
  // cạnh TRÊN (phải -> trái), núm lồi lên (+y)
  if (tabs.t) {
    s.lineTo(rad, hh);
    s.absarc(0, hh, rad, 0, Math.PI, false);
    s.lineTo(-hw, hh);
  } else s.lineTo(-hw, hh);
  // cạnh TRÁI (trên -> dưới), núm lồi ra (-x)
  if (tabs.l) {
    s.lineTo(-hw, rad);
    s.absarc(-hw, 0, rad, Math.PI / 2, (3 * Math.PI) / 2, false);
    s.lineTo(-hw, -hh);
  } else s.lineTo(-hw, -hh);
  return s;
}

// Bố cục 6 mảnh tạo thành hình người (khớp thứ tự PIECES)
const PIECE_LAYOUT = [
  { name: "Gia đình", color: 0xc26b36, w: 1.55, h: 1.55, x: 0.0, y: 0.55, tabs: { t: 0, r: 1, b: 1, l: 1 } },   // trái tim / ngực
  { name: "Nhà trường", color: 0x6e7f4e, w: 1.25, h: 1.25, x: 0.0, y: 2.05, tabs: { t: 0, r: 0, b: 1, l: 0 } },  // đầu
  { name: "Lao động", color: 0xa2511f, w: 0.72, h: 1.55, x: -1.32, y: 0.6, tabs: { t: 1, r: 1, b: 0, l: 0 } },   // tay trái
  { name: "Bạn bè", color: 0xcba45a, w: 0.72, h: 1.55, x: 1.32, y: 0.6, tabs: { t: 1, r: 0, b: 0, l: 1 } },      // tay phải
  { name: "Văn hóa", color: 0x7a5c3a, w: 0.82, h: 1.7, x: -0.5, y: -1.55, tabs: { t: 1, r: 0, b: 0, l: 0 } },    // chân trái
  { name: "Công nghệ", color: 0x4a7e7a, w: 0.82, h: 1.7, x: 0.5, y: -1.55, tabs: { t: 1, r: 0, b: 0, l: 0 } },   // chân phải
];

function Puzzle3D({ className = "" }) {
  const mountRef = window.React.useRef(null);

  window.React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount || typeof THREE === "undefined") return;

    let raf, controls;
    const scene = new THREE.Scene();

    const W = () => mount.clientWidth;
    const H = () => mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, W() / H(), 0.1, 100);
    camera.position.set(0, 0.2, 9.2);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    } catch (e) {
      mount.innerHTML =
        '<div style="color:#bdb191;font-family:monospace;font-size:12px;text-align:center;padding-top:40%">[ WebGL không khả dụng ]</div>';
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());
    renderer.outputEncoding = THREE.sRGBEncoding;
    mount.appendChild(renderer.domElement);

    // Ánh sáng — ấm, cinematic
    scene.add(new THREE.AmbientLight(0xfff0db, 0.55));
    const key = new THREE.DirectionalLight(0xffe6c0, 1.5);
    key.position.set(4, 6, 7);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x88a06a, 0.9);
    rim.position.set(-6, 1, -4);
    scene.add(rim);
    const warm = new THREE.PointLight(0xc26b36, 0.8, 30);
    warm.position.set(-3, -2, 4);
    scene.add(warm);

    // Nhóm chứa các mảnh
    const group = new THREE.Group();
    scene.add(group);

    const pieces = [];
    PIECE_LAYOUT.forEach((p, i) => {
      const shape = makePuzzleShape(p.w, p.h, p.tabs);
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.42,
        bevelEnabled: true,
        bevelThickness: 0.07,
        bevelSize: 0.06,
        bevelSegments: 3,
        steps: 1,
      });
      geo.center();
      const mat = new THREE.MeshStandardMaterial({
        color: p.color,
        roughness: 0.62,
        metalness: 0.12,
        emissive: new THREE.Color(p.color),
        emissiveIntensity: 0.0,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // vị trí lắp ráp đích
      const target = new THREE.Vector3(p.x, p.y - 0.25, 0);
      mesh.userData.target = target;
      mesh.userData.tRot = new THREE.Euler(0, 0, 0);

      // vị trí "nổ tung" / tách rời (toả ra theo hướng nan hoa)
      const ang = (i / PIECE_LAYOUT.length) * Math.PI * 2 + 0.6;
      const dist = 2.9 + Math.random() * 1.5;
      mesh.userData.explode = new THREE.Vector3(
        Math.cos(ang) * dist,
        Math.sin(ang) * dist * 0.7 - 0.25,
        (Math.random() - 0.5) * 3
      );
      mesh.userData.eRot = new THREE.Euler(
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8
      );
      mesh.userData.bob = Math.random() * Math.PI * 2;

      mesh.position.copy(mesh.userData.explode);
      mesh.rotation.copy(mesh.userData.eRot);
      group.add(mesh);
      pieces.push(mesh);
    });

    // OrbitControls (xoay được) nếu có
    let userDragging = false;
    if (typeof THREE.OrbitControls !== "undefined") {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.minPolarAngle = Math.PI * 0.28;
      controls.maxPolarAngle = Math.PI * 0.72;
      controls.rotateSpeed = 0.6;
      controls.addEventListener("start", () => (userDragging = true));
      controls.addEventListener("end", () => (userDragging = false));
    }

    // Tiến trình lắp ráp: 1 = tách rời, 0 = hoàn chỉnh
    // Mount: tự lắp ráp 1->0. Sau đó: cuộn điều khiển (cuộn xuống -> tách rời)
    let assemble = 1;
    let scrollP = 0;
    window.__puzzleSetScroll = (p) => {
      scrollP = Math.max(0, Math.min(1, p));
    };
    const start = performance.now();
    const DURATION = 2200;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    // Highlight 1 mảnh từ bên ngoài
    let highlightIdx = -1;
    window.__puzzleHighlight = (idx) => (highlightIdx = idx == null ? -1 : idx);

    const tmp = new THREE.Vector3();
    function animate(now) {
      raf = requestAnimationFrame(animate);
      const elapsed = now - start;
      let targetA;
      if (elapsed < DURATION) targetA = 1 - easeOutCubic(Math.min(elapsed / DURATION, 1));
      else targetA = scrollP;
      // làm mượt để không giật khi cuộn
      assemble += (targetA - assemble) * 0.1;

      const t = now * 0.001;
      pieces.forEach((m, i) => {
        const ud = m.userData;
        // nội suy vị trí explode -> target
        tmp.copy(ud.target).lerp(ud.explode, assemble);
        // bob nhẹ khi đã lắp ráp
        const bob = (1 - assemble) * Math.sin(t * 0.9 + ud.bob) * 0.05;
        m.position.set(tmp.x, tmp.y + bob, tmp.z);
        // nội suy góc xoay
        m.rotation.x = ud.eRot.x * assemble;
        m.rotation.y = ud.eRot.y * assemble;
        m.rotation.z = ud.eRot.z * assemble;

        // highlight: phát sáng + nhô ra trục z
        const on = highlightIdx === i ? 1 : 0;
        const ei = m.material.emissiveIntensity;
        m.material.emissiveIntensity += ((on ? 0.5 : 0.0) - ei) * 0.12;
        const targetZ = on ? 0.6 : 0;
        m.position.z += (tmp.z + targetZ - m.position.z) * 0.0; // giữ z theo lerp
        if (on) m.position.z = THREE.MathUtils.lerp(m.position.z, 0.7, 0.15);
      });

      // tự xoay nhẹ khi người dùng không kéo
      if (!userDragging) group.rotation.y += 0.0026;
      group.rotation.x = Math.sin(t * 0.35) * 0.06;

      if (controls) controls.update();
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(animate);

    // Render thủ công 1 frame (dùng để kiểm chứng/snapshot). a: 0=hoàn chỉnh, 1=tách rời
    window.__puzzleSnapshot = function (a) {
      a = a == null ? 0 : a;
      assemble = a;
      const v = new THREE.Vector3();
      pieces.forEach((m) => {
        v.copy(m.userData.target).lerp(m.userData.explode, a);
        m.position.copy(v);
        m.rotation.set(m.userData.eRot.x * a, m.userData.eRot.y * a, m.userData.eRot.z * a);
        m.material.emissiveIntensity = 0;
      });
      group.rotation.set(0.04, 0.4, 0);
      renderer.render(scene, camera);
    };

    function onResize() {
      if (!mount) return;
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (controls) controls.dispose();
      renderer.dispose();
      pieces.forEach((m) => {
        m.geometry.dispose();
        m.material.dispose();
      });
      if (renderer.domElement && renderer.domElement.parentNode)
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={"w-full h-full touch-none " + className} />;
}

Object.assign(window, { Puzzle3D });
