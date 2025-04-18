import { useState } from "react";
import Lupa from "./assets/lupa.png";

function SearchInput({ setDados, setErro, setLoading }) {
  const [usuario, setUsuario] = useState("");

  const limparCampo = () => {
    setUsuario("");
    setDados({});
    setErro(false);
  };

  const buscarDados = () => {
    // Verifica se o campo de busca está vazio
    if (!usuario.trim()) {
      alert("Por favor, digite um nome de usuário para buscar.");
      return;
    }

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
      <div className="relative">
        <input
          type="search"
          placeholder="Digite um usuário do Github"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarDados()}
          className="w-full rounded-lg bg-[#DDDDDD] p-4 text-base font-semibold placeholder-[#000000] lg:text-xl"
        />
        {usuario && (
          <button
            onClick={limparCampo}
            className="absolute top-1/2 right-18 -translate-y-1/2 cursor-pointer text-xl font-bold text-gray-500 hover:text-gray-700"
            title="Limpar campo"
          >
            ×
          </button>
        )}
      </div>
      <button onClick={buscarDados} className="absolute top-0 right-0 bottom-0">
        <img
          src={Lupa}
          alt="pesquisar"
          className="h-full rounded-lg bg-[#005CFF] p-4 transition-transform duration-300 hover:scale-105"
        />
      </button>
    </div>
  );
}
export default SearchInput;
