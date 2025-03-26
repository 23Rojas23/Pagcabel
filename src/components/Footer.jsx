import iconoFacebook from "../assets/images/facebook.svg";
import iconoTwitter from "../assets/images/youtube.svg";
import iconoYoutube from "../assets/images/twitter.svg";
import { FooterImg } from "./FooterImg";
import { Link } from "react-router-dom";


export const Footer = () => {
  // Optimized: Use an array of links for better maintainability and scalability
  const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/nosotros", text: "Nosotros" },
    { to: "/productos", text: "Productos" },
    { to: "#contactos", text: "Contactos" }, // Assuming "#contactos" is an anchor link or will be handled differently
  ];

  // Optimized: Use an array of social media links for better maintainability
  const socialLinks = [
    { icon: iconoFacebook, alt: "Facebook Link", href: "#facebook" }, // Replace #facebook with actual URLs
    { icon: iconoTwitter, alt: "YouTube Link", href: "#youtube" }, // Corrected alt text and replace placeholders
    { icon: iconoYoutube, alt: "Twitter Link", href: "#twitter" }, // Corrected alt text and replace placeholders
  ];

  return (
    <footer> {/* Optimized: Removed redundant <section> wrapping <footer> */}
      <div className="bg-[#172f17] text-white"> {/* Optimized: Combined bg and text color to parent div for better grouping */}
        <section className="border-b border-solid border-white py-12 px-4 sm:px-6 lg:px-8"> {/* Optimized: Using container-like padding classes */}
          <nav className="container mx-auto"> {/* Optimized: Using container for responsive width and centering */}
            <h2 className="text-center text-3xl font-light mb-14"> {/* Optimized: Using Tailwind's text sizes and spacing */}
              Interamericana de cables Venezuela S.A.
            </h2>
            <ul className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20"> {/* Optimized: Flexbox for responsive link layout */}
              {/* Optimized: Using map to render navigation links from data */}
              {navLinks.map((link, index) => (
                <li key={index} className="mb-4 sm:mb-0"> {/* Optimized: Consistent marginBottom class */}
                  <Link
                    to={link.to}
                    className="hover:text-[#04a444] transition-colors duration-200" // Optimized: Corrected hover effect and added transition
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="py-8 text-center"> {/* Optimized: Simplified padding classes */}
          <div className="flex justify-center space-x-6 mb-4"> {/* Optimized: Flexbox for icon layout and spacing */}
            {/* Optimized: Using map to render social icons from data */}
            {socialLinks.map((social, index) => (
              <FooterImg key={index} img={social.icon} alt={social.alt} href={social.href} /> /* Optimized: Added alt and href to FooterImg component */
            ))}
          </div>
          <h3 className="font-light text-sm"> {/* Optimized: Using Tailwind's font-size class */}
            Derechos reservados © Interamericana de Cables Venezuela
          </h3>
        </section>
      </div> {/* Optimized: Closing combined div */}
    </footer>
  );
};