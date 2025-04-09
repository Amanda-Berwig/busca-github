function ErrorCard() {
  return (
    <div className="flex h-auto w-sm items-center justify-center rounded-xl bg-[#D9D9D9] px-8 py-6 text-center shadow-lg lg:w-xl">
      <p className="text-base font-normal text-[#FF0000] lg:text-xl">
        Nenhum perfil foi encontrado com esse nome de usuário.
        <br /> Tente novamente
      </p>
    </div>
  );
}
export default ErrorCard;
