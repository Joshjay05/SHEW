import { FOOTER_LINKS, SOCIALS, SOCIALS_LINKS } from "../constants";
import logo from "../assets/logo.jpeg";
const Footer = () => {
  return (
    // <footer id="footer" className="flex">
    <footer
      id="footer"
      className="flex padding-container justify-center bg-slate-300"
    >
      <div className="flex  justify-center  gap-[8rem] md:flex-row padding-container">
        <a href={"/"} className="mb-10 bold-20  mt-14 bg rounded-full">
          <img
            src={logo}
            alt="logo"
            width={180}
            height={180}
            className="rounded-full"
          />
        </a>

        <div className="flex gap-[12rem] sm:justify-between md:flex">
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="flex flex-col gap-[2rem] regular-14 text-gray-dark">
                {col.links.map((link) => (
                  <a href={"/"} key={link}>
                    {link}
                  </a>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>

        <div className="flex">
          <FooterColumn title={SOCIALS_LINKS.title}>
            {SOCIALS_LINKS.links.map((link) => (
              <a
                href="/"
                key={link.label}
                className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p>{link.label}:</p>
                <p className="medium-14">{link.value}</p>
              </a>
            ))}
          </FooterColumn>
        </div>
        <div className="flex">
          <FooterColumn title={SOCIALS.title}>
            <ul className="flex gap-4">
              {SOCIALS.links.map((link) => (
                <li key={link?.id}>
                  <a href={link.href}>
                    <link.icon className="text-2xl" />
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
    </footer>
    // </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 my-6">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
