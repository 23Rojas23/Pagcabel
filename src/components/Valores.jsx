/*export const Valores = ({ img, text }) => {
  return (
    <div className="lg:place-content flex place-content-center gap-4 lg:w-[50%] lg:flex-col lg:items-center lg:gap-10 lg:text-center">
      <img
        src={img}
        alt=""
        className="h-[100px] w-[100px] justify-start md:h-[150px] md:w-[150px] xl:h-[200px] xl:w-[200px]"
      />

      <h2 className="w-full place-content-center font-serif text-[24px] font-medium italic text-[#04a44c] md:text-[40px] lg:h-[150px] lg:text-[50px]">
        {text}
      </h2>
    </div>
  );
};*/

import PropTypes from 'prop-types';

export const Valores = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105 lg:w-[45%]">
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
