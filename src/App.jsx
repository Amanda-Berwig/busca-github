import "./App.css";
import MainSection from "./components/Main Section/MainSection";

function App() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1f1f1f]">
      <div className="absolute -top-10 -right-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,_#005CFF_20%,_rgba(0,92,255,0.5)_40%,_rgba(0,92,255,0)_80%)] blur-2xl"></div>
      <div className="absolute bottom-0 -left-50 h-96 w-96 rounded-full bg-[radial-gradient(circle,_#005CFF_20%,_rgba(0,92,255,0.5)_40%,_rgba(0,92,255,0)_80%)] blur-2xl"></div>
      <div className="absolute top-7 left-16 h-48 w-48 [background-image:radial-gradient(#272727_3px,transparent_3px)] [background-size:14px_14px] lg:h-64 lg:w-64"></div>
      <MainSection />
    </div>
  );
}

export default App;
