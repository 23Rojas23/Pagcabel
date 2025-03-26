import PropTypes from 'prop-types';

export const Valores = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center mb-5 gap-6 transition-transform duration-300 hover:scale-105 lg:w-[45%]">
      <img
        src={img}
        alt=""
        className="h-[120px] w-[120px] object-contain md:h-[150px] md:w-[150px] lg:h-[180px] lg:w-[180px]"
      />
      <h2 className="text-center font-serif text-2xl font-semibold italic text-[#04a44c] md:text-3xl lg:text-4xl">
        {text}
      </h2>
    </div>
  );
};

Valores.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
