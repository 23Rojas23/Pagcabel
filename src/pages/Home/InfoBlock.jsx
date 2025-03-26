export const InfoBlock = ({
  image,
  altText,
  title,
  description,
  linkText,
  linkHref,
  arrowImage,
  bgColor,
  textColor,
  hoverColor,
}) => {
  return (
    <div
      className={`md:grid md:h-[400px] md:grid-cols-2 xl:h-[500px] ${bgColor} transition-all duration-500 ease-in-out hover:shadow-lg mb-3`}
    >
      <img
        src={image}
        alt={altText}
        className="w-full transform transition-transform duration-500 hover:scale-105 md:h-full md:overflow-hidden md:object-cover"
      />
    <a
      href={linkHref}
      className="flex transform items-center transition-transform duration-500 hover:scale-105"
    >
      <div
        className={`h-[200px] place-content-center pl-8 md:h-full xl:flex xl:flex-col xl:place-content-center ${textColor}`}
      >
        <h2 className="mb-6 transform text-[28px] font-extrabold leading-none transition-transform duration-500 hover:scale-105 md:text-[40px] xl:mb-16 xl:text-[55px]">
          {title}
        </h2>
        <div className="flex">
            <p
              className={`text-[18px] font-semibold md:text-[20px] xl:text-[24px] ${textColor}`}
            >
              {description}
              <span className={`italic ${hoverColor}`}>{linkText}</span>
            </p>
            <img
              src={arrowImage}
              alt="flecha"
              className="ml-2 w-[30px] transform transition-transform duration-500 hover:translate-x-2"
            />
        </div>
      </div>
          </a>
    </div>
  );
};