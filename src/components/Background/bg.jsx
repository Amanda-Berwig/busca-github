import elipse1 from "./assets/elipse1.png";
import elipse2 from "./assets/elipse2.png";
import camada from "./assets/camada.png";
import Banner from "./Banner/banner";

function Background() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-[#1f1f1f] py-36">
      <img
        src={elipse1}
        alt="elipse background"
        className="absolute top-0 right-0"
      />
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
      <Banner />
    </div>
  );
}

export default Background;
