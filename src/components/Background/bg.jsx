import elipse1 from "./assets/elipse1.png";
import elipse2 from "./assets/elipse2.png";
import camada from "./assets/camada.png";

function Background() {
  return (
    <div className="relative flex h-screen w-screen items-center bg-[#1f1f1f]">
      <img src={elipse1} alt="elipse background" className="absolute right-0" />
      <img
        src={elipse2}
        alt="elipse background"
        className="absolute bottom-0 left-0"
      />
      <img
        src={camada}
        alt="detalhe pontilhado background"
        className="absolute top-7 left-10"
      />
    </div>
  );
}

export default Background;
