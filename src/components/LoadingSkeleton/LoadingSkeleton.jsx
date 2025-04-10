function LoadingSkeleton() {
  return (
    <div className="flex w-[400px] animate-pulse flex-col items-center gap-4 rounded-xl bg-gray-100 p-4">
      <div className="h-20 w-20 rounded-full bg-gray-300"></div>
      <div className="flex w-full flex-col gap-2">
        <div className="h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="h-3 w-full rounded bg-gray-200"></div>
      </div>
      <p className="text-xl text-[#1f1f1f]">Carregando perfil...</p>
    </div>
  );
}
export default LoadingSkeleton;
