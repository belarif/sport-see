import React, { useState } from "react";

const Modal = () => {
  const [opened, setOpened] = useState(true);

  return (
    <React.Fragment>
      <div class="modal" style={opened === false ? { display: "none" } : {}}>
        <div class="modal-content">
          <div class="modal-btn">
            <button
              id="close-modal"
              onClick={() => {
                setOpened(false);
              }}
            >
              fermer
            </button>
          </div>
          <div class="tech-infos">
            <h2>Pour cette réalisation, j'ai utilisé :</h2>
            <ul>
              <li>Html5</li>
              <li>Css3</li>
              <li>Sass</li>
              <li>Figma</li>
              <li>React</li>
              <li>Javacript</li>
              <li>Recharts.js</li>
              <li>Git & GitHub</li>
              <li>Sémantique html</li>
              <li>React-router-dom</li>
              <li>Modèle des boites pour le code CSS</li>
              <li>Les données récupérées depuis une API</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
