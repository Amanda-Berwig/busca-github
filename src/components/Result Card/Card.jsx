function Card({ dados }) {
  return (
    <div className="flex h-auto w-2xl items-center gap-8 rounded-3xl bg-[#D9D9D9] px-8 py-4">
      <a
        href={`https://github.com/${dados.login}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Clique para acessar o perfil"
        className="group relative"
      >
        <img
          src={dados.avatar_url}
          alt="avatar"
          className="h-52 w-52 rounded-full border-2 border-[#005CFF] transition-transform duration-300 hover:scale-110"
        />
      </a>

      <div>
        <h2 className="text-xl font-bold text-[#005CFF]">
          {dados.name || "Perfil sem nome"}
        </h2>
        <p className="text-base font-light">
          {dados.bio || "Este perfil não possui uma biografia."}
        </p>
      </div>
    </div>
  );
}
export default Card;
