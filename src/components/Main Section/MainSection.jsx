import LogoGithub from "./assets/logo-github.png";
import TextoGithub from "./assets/texto-github.png";
import SearchInput from "../Search Input/SearchInput";
import { useState } from "react";
import Card from "../Result Card/card";
import classNames from "classnames";

function MainSection() {
  const [dados, setDados] = useState({});

  return (
    <div className="relative flex h-[500px] w-3xl flex-col items-center bg-[#000000]">
      <div className="absolute top-5 flex items-center gap-3">
        <img src={LogoGithub} alt="Logo Github" className="h-14 w-14" />
        <h1 className="text-6xl font-semibold text-[#FFFFFF]">Perfil</h1>
        <img
          src={TextoGithub}
          alt="github"
          className={classNames("h-11 w-40 transition-opacity duration-500", {
            block: dados.name,
            hidden: !dados.name,
          })}
        />
      </div>

      <SearchInput setDados={setDados} />
      {dados.name && <Card dados={dados} />}
    </div>
  );
}

export default MainSection;
