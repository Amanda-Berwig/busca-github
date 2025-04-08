import LogoGithub from "./assets/logo-github.png";
import TextoGithub from "./assets/texto-github.png";
import SearchInput from "../Search Input/SearchInput";
function MainSection() {
  return (
    <div className="relative flex h-96 w-4xl items-center justify-center bg-[#000000]">
      <div className="items-cente absolute top-5 flex gap-3">
        <img src={LogoGithub} alt="Logo Github" className="h-14 w-14" />
        <h1 className="text-6xl font-semibold text-[#FFFFFF]">Perfil</h1>
        <img src={TextoGithub} alt="github" className="hidden h-11 w-40" />
      </div>

      <SearchInput />
    </div>
  );
}

export default MainSection;
