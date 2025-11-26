// Create loader overlay container
const loaderOverlay = document.createElement("div");
loaderOverlay.id = "loader-overlay";
loaderOverlay.innerHTML = `
<div id="loader">
    <div class="Strich1">
        <div class="Strich2">
            <div class="bubble"></div>
            <div class="bubble1"></div>
            <div class="bubble2"></div>
            <div class="bubble3"></div>
            <div class="bubble4"></div>
        </div>
    </div>
</div>
`;

// Add CSS
const style = document.createElement("style");
style.innerHTML = `
#loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}

/* Your exact loader styles */
#loader {
    position: relative;
    width: 150px;
    height: 150px;
}

.Strich1 {
  position: absolute;
  width: 130px;
  height: 50px;
  background: #000;
  border-radius: 25px;
  transform: rotate(45deg);
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}
.Strich2 {
  position: absolute;
  width: 130px;
  height: 50px;
  background: #000;
  border-radius: 25px;
  transform: rotate(-90deg);
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}
.bubble, .bubble1, .bubble2, .bubble3, .bubble4 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.bubble { left: 15px; background: radial-gradient(circle at 30% 30%, #ffb3c1, #e64980, #ff8787); animation: drop 5s infinite; }
.bubble1 { left: 8px; background: radial-gradient(circle at 30% 30%, #edb3ff, #ac49e6, #fb87ff); animation: drop 6s infinite; }
.bubble2 { left: 12px; background: radial-gradient(circle at 30% 30%, #b3d8ff, #4963e6, #87a7ff); animation: drop 4s infinite; }
.bubble3 { left: 10px; background: radial-gradient(circle at 30% 30%, #b3ffbc, #35a32f, #75ba61); animation: drop 7s infinite; }
.bubble4 { left: 5px; background: radial-gradient(circle at 30% 30%, #fff3b3, #e6b449, #ffe087); animation: drop 6.5s infinite; }

@keyframes drop {
  0% { transform: translate(0px, 15px); }
  16% { transform: translate(80px, 13px); }
  33% { transform: translate(40px, 10px); }
  50% { transform: translate(40px, -30px); }
  66% { transform: translate(40px, 55px); }
  83% { transform: translate(40px, 10px); }
  100% { transform: translate(0px, 15px); }
}
`;

// Inject loader to page immediately
document.head.appendChild(style);
document.body.prepend(loaderOverlay);

// Remove loader or redirect
const params = new URLSearchParams(window.location.search);
const nextPage = params.get("redirect");

setTimeout(() => {
    if (nextPage) {
        window.location.href = nextPage;
    } else {
        document.getElementById("loader-overlay").remove();
    }
}, 3000);
