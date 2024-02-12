import tripa from "../../public/tripa.png";

export const BenefitsCarousel = () => {
  return (
    <div className="w-screen mt-3 overflow-hidden">
      <div
        className="animate-slide linear infinite"
        style={{
          backgroundImage: `url(${tripa.src})`,
          height: "100px",
          width: "200vw",
          backgroundRepeat: "repeat-x",
          animation: "slide 15s linear infinite",
        }}
      ></div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
