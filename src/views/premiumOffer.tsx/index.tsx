const PremiumOffer = () => {
    return (
      <div 
        className="relative p-6 overflow-hidden bg-cover bg-center border border-gray-700"
        style={{ 
          width: "322px",
          height: "159px",
          backgroundImage: "url('/premium.svg')",
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "32px",
          borderBottomLeftRadius: "8px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative text-white text-center flex flex-col items-center justify-center h-full">
          <h2 className="text-lg font-bold">Obtenha 1 mês premium grátis</h2>
          <button className="mt-3 px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
            1 Mês Grátis
          </button>
        </div>
      </div>
    );
  };
  
  export default PremiumOffer;
  