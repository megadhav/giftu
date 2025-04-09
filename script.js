function goToScene(sceneNumber) {
    document.querySelectorAll('.scene').forEach(scene => {
      scene.classList.remove('active');
    });
    document.getElementById(`scene${sceneNumber}`).classList.add('active');
  }
  
  function cutCake() {
    document.getElementById("wholeCake").classList.add("hidden");
    document.getElementById("cuttingCake").classList.remove("hidden");
  
    document.querySelector("button[onclick='cutCake()']").style.display = "none";
    document.getElementById("nextAfterCut").classList.remove("hidden");

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  
  
  window.addEventListener("load", () => {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    setTimeout(() => confetti({ particleCount: 100, spread: 70 }), 400);
    setTimeout(() => confetti({ particleCount: 100, spread: 100 }), 800);
  
  });

  const correctNames = ["pillya", "gadhav"]; 

  let guessedNames = [];

function checkName() {
  const input = document.getElementById("nameInput").value.toLowerCase().trim();
  const response = document.getElementById("nicknameResponse");

  if (correctNames.includes(input) && !guessedNames.includes(input)) {
    guessedNames.push(input);

    if (guessedNames.length === 1) {
      response.textContent = "Euuu ajun ek";
      document.getElementById("nameInput").value = "";
    } else if (guessedNames.length === 2) {
        response.textContent = "Donhi barobar";
        
        
        document.getElementById("nicknameInputs").style.display = "none";
        document.getElementById("nicknameTitle").style.display = "none";
        
       
        document.getElementById("donkeyGift").classList.remove("hidden");
      }
      
  } else if (guessedNames.includes(input)) {
    response.textContent = "Ek barobar aahe";
  } else {
    const funReplies = [
      "Ny na golu",
      "Parat Ekda",
    ];
    response.textContent = funReplies[Math.floor(Math.random() * funReplies.length)];
  }
}
  
function revealGift() {
    document.getElementById("donkeyGift").classList.add("hidden");
    document.getElementById("loveLetter").classList.remove("hidden");
  
    document.getElementById("nicknameInputs").style.display = "none";

  

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  }
  