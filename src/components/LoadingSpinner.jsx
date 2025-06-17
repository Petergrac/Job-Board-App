
const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161e23] text-white">
      <div className="flex space-x-2 mb-4"> {/* Tailwind for spacing between dots */}
        <div className="dot bg-teal-400"></div> {/* Using Tailwind color for dots */}
        <div className="dot bg-emerald-400"></div>
        <div className="dot bg-cyan-400"></div>
      </div>
      <p className="text-xl mt-4 animate-pulse">{message}</p> {/* Tailwind animate-pulse for text */}
    </div>
  );
};

export default LoadingSpinner;