const Scrolls = ({ images, currentIndex, scrollslide }) => {
  return (
    <div className="flex justify-center space-x-2 mt-35">
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => scrollslide(idx)}
          className={`w-4 h-1 rounded-full ${
            currentIndex === idx ? 'bg-white' : 'bg-gray-400'
          }`}
        ></button>
      ))}
    </div>
  );
};

export default Scrolls;