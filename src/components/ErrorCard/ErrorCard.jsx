function ErrorCard() {
  return (
    <div className="flex h-auto w-xl items-center justify-center rounded-3xl bg-[#D9D9D9] px-8 py-6 text-center shadow-lg">
      <p className="text-xl font-normal text-[#FF0000]">
        Nenhum perfil foi encontrado com esse nome de usuário.
        <br /> Tente novamente
      </p>
    </div>
  );
}
export default ErrorCard;
