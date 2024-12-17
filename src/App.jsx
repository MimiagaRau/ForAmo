import React from "react";
import "./App.css";
import song from "./assets/Little things.mp3"; // Asegúrate de tener el archivo mp3 en "src/assets"

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>🌹 Para la persona más especial 🌹</h1>
        <p>
          Querida señorita Amoary,
        </p>
        <p>
          Quiero que sepas lo especial que eres para mí. Cada momento a tu lado
          es un regalo, y cada día te quiero más. Gracias por ser mi razón de
          sonreír y mi refugio en los momentos difíciles.
        </p>
        <p>
          Te amo con todo mi corazón, y quiero seguir construyendo un camino
          lleno de amor y aventuras a tu lado. ❤️
        </p>
        <p>Buenooooooooooos días mi amor!!</p>
        <p>Con todo mi amor,</p>
        <p>Yo pues quien más preciosa?</p>
        <div className="music-player">
          <audio controls>
            <source src={song} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default App;
