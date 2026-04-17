const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-sm tracking-wide">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;