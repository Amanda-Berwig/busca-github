import { useState } from "react";
import Lupa from "./assets/lupa.png";

function Input() {
  const [usuario, setUsuario] = useState("");

  const buscarDados = (value) => {
    // value é o que foi digitado no input
    fetch(`https://api.github.com/users/${value}`)
      // Quando a resposta chegar, converte o conteúdo para JSON
      .then((resposta) => resposta.json())

      // Quando os dados forem convertidos, atualiza o estado com os dados recebidos
      .then((dados) => setUsuario(dados));
  };

  return (
    <div className="relative w-1/2">
      <input
        type="search"
        placeholder="Digite um usuário do Github"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="w-full rounded-lg bg-[#DDDDDD] p-4 text-xl placeholder-[#000000]"
      />
      <button onClick={buscarDados}>
        <img
          src={Lupa}
          alt="pesquisar"
          className="absolute top-0 right-0 h-full rounded-lg bg-[#005CFF] p-4"
        />
      </button>
    </div>
  );
}
export default Input;
