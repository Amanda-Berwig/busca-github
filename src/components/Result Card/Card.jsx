function Card({ dados }) {
  return (
    <div className="flex h-auto w-2xl items-center gap-8 rounded-3xl bg-[#D9D9D9] px-8 py-4">
      <img
        src={dados.avatar_url}
        alt="avatar"
        className="h-52 w-52 rounded-full border-2 border-[#005CFF]"
      />
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
