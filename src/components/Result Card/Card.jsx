function Card({ dados }) {
  return (
    <div className="flex h-auto w-xs items-center gap-4 rounded-3xl bg-[#D9D9D9] px-4 py-2 lg:w-2xl lg:gap-8 lg:px-8 lg:py-4">
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
          className="h-32 w-32 rounded-full border-2 border-[#005CFF] transition-transform duration-300 hover:scale-110 lg:h-52 lg:w-52"
        />
      </a>

      <div>
        <h2 className="text-base font-bold text-[#005CFF] lg:text-xl">
          {dados.name || "Perfil sem nome"}
        </h2>
        <p className="text-xs font-light lg:text-base">
          {dados.bio || "Este perfil não possui uma biografia."}
        </p>
      </div>
    </div>
  );
}
export default Card;
