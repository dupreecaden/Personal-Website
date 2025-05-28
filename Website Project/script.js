function plugIn() {
  const scene = document.getElementById("scene");
  const sound = document.getElementById("usb-sound");
  const fade = document.getElementById("fade");

  scene.classList.add("plugged");
  sound.play().catch(() => {});

  setTimeout(() => {
    fade.classList.add("show");
  }, 1100); 

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1800); 
}
