import { useState } from "react";
import "./players-points.css";

export function PlayersPoints() {
  const [pointsP1, setPointsP1] = useState(0);
  const [pointsP2, setPointsP2] = useState(0);
  const [winner, setWinner] = useState("");

  function plus100P1() {
    setPointsP1(pointsP1 + 100);
  }

  function plus500P1() {
    setPointsP1(pointsP1 + 500);
  }

  function plus100P2() {
    setPointsP2(pointsP2 + 100);
  }

  function plus500P2() {
    setPointsP2(pointsP2 + 500);
  }

  function endGame() {
    if (pointsP1 > pointsP2) {
      setWinner("Jogador 1");
    } else if (pointsP2 > pointsP1) {
      setWinner("Jogador 2");
    } else {
      setWinner("Empate");
    }
  }

  return (
    <>
      <div className="points">
        <div>
          <p>Jogador 1</p>
          <p>Pontos: {pointsP1}</p>
        </div>
        <div className="points-button">
          <button onClick={() => plus100P1()}>+ 100 pontos</button>
          <button onClick={() => plus500P1()}>+ 500 pontos</button>
        </div>
      </div>

      <div className="points">
        <div>
          <p>Jogador 2</p>
          <p>Pontos: {pointsP2}</p>
        </div>
        <div className="points-button">
          <button onClick={() => plus100P2()}>+ 100 pontos</button>
          <button onClick={() => plus500P2()}>+ 500 pontos</button>
        </div>
      </div>

      <button onClick={() => endGame()}>Finalizar Partida</button>
      {winner == "Jogador 1" && <p>Vencedor foi o Jogador 1</p>}

      {winner == "Jogador 2" && <p>Vencedor foi o Jogador 2</p>}

      {winner == "Empate" && <p>Jogo Empatado</p>}
    </>
  );
}
