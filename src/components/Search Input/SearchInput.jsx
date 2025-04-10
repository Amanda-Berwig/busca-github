import { useState } from "react";
import Lupa from "./assets/lupa.png";

function SearchInput({ setDados, setErro, setLoading }) {
  const [usuario, setUsuario] = useState("");

  const buscarDados = () => {
    setLoading(true); // começa o loading

    // value é o que foi digitado no input
    fetch(`https://api.github.com/users/${usuario}`)
      // Quando a resposta chegar, converte o conteúdo para JSON
      .then((response) => response.json())

      // Quando os dados forem convertidos, atualiza o estado com os dados recebidos
      .then((dados) => {
        setLoading(false); // finaliza o loading
        if (dados.message === "Not Found") {
          setErro(true);
          setDados({});
        } else {
          setErro(false);
          setDados(dados);
          console.log(dados);
        }
      });
  };

  return (
    <div className="relative mt-28 mb-8 w-xs md:w-96 lg:mt-32 lg:w-1/2">
      <input
        type="search"
        placeholder="Digite um usuário do Github"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="w-full rounded-lg bg-[#DDDDDD] p-4 text-base font-semibold placeholder-[#000000] lg:text-xl"
      />
      <button onClick={buscarDados}>
        <img
          src={Lupa}
          alt="pesquisar"
          className="absolute top-0 right-0 h-full rounded-lg bg-[#005CFF] p-4 transition-transform duration-300 hover:scale-105"
        />
      </button>
    </div>
  );
}
export default SearchInput;
