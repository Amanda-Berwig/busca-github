import LogoGithub from "./assets/logo-github.png";
import TextoGithub from "./assets/texto-github.png";
import SearchInput from "../Search Input/SearchInput";
import { useState } from "react";
import Card from "../ResultCard/Card";
import ErrorCard from "../ErrorCard/ErrorCard";
import classNames from "classnames";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

function MainSection() {
  const [dados, setDados] = useState({});
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative mx-4 flex h-[400px] w-xl flex-col items-center bg-[#000000] px-4 md:h-[450px] md:w-2xl lg:h-[500px] lg:w-4xl">
      <div className="absolute top-5 flex items-center gap-1 lg:gap-3">
        <img
          src={LogoGithub}
          alt="Logo Github"
          className="h-10 w-10 lg:h-14 lg:w-14"
        />
        <h1 className="text-4xl font-semibold text-[#FFFFFF] lg:text-6xl">
          Perfil
        </h1>
        <img
          src={TextoGithub}
          alt="github"
          className={classNames(
            "h-8 w-24 transition-opacity duration-500 lg:h-11 lg:w-40",
            {
              block: dados.login,
              hidden: !dados.login,
            },
          )}
        />
      </div>

      <SearchInput
        setDados={setDados}
        setErro={setErro}
        setLoading={setLoading}
      />
      {loading && <LoadingSkeleton />}
      {!loading && erro && <ErrorCard />}
      {!loading && dados.login && <Card dados={dados} />}
    </div>
  );
}

export default MainSection;
