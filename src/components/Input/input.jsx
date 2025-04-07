import Lupa from "./assets/lupa.png";
function Input() {
  return (
    <div className="relative w-1/2">
      <input
        type="search"
        placeholder="Digite um usuário do Github"
        className="w-full rounded-lg bg-[#DDDDDD] p-4 text-xl placeholder-[#000000]"
      />
      <img
        src={Lupa}
        alt="pesquisar"
        className="absolute top-0 right-0 h-full rounded-lg bg-[#005CFF] p-4"
      />
    </div>
  );
}
export default Input;
