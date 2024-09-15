import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  MagnifyingGlass,
  Phone,
  ShoppingBag,
  TwitterLogo,
  User,
  X,
} from "phosphor-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [open, setIsOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Product",
      path: "/product",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="py-4">
      {/* Top Navbar or Header */}
      <div className="flex justify-between items-center max-[640px]:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray duration-500 hover:text-primary hover:duration-500"
          >
            <InstagramLogo size={24} />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray duration-500 hover:text-primary hover:duration-500"
          >
            <FacebookLogo size={24} />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray duration-500 hover:text-primary hover:duration-500"
          >
            <TwitterLogo size={24} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-gray duration-500 hover:text-primary hover:duration-500"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <Phone color={"#F46B5B"} />

            <span className="text-lg text-gray">+12 345 6789 0</span>
          </p>

          <p className="flex items-center gap-1">
            <Envelope color={"#F46B5B"} />

            <span className="text-lg text-gray">support@tronix.com</span>
          </p>

          <p className="flex items-center gap-1">
            <User color={"#F46B5B"} />

            <span className="text-lg text-gray">Account</span>
          </p>
        </div>
      </div>
      {/* Top Navbar or Header */}

      <div className="mt-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h2 className="text-4xl font-bold text-primary">Tronix</h2>
        </Link>

        {/* Navigation Menu */}
        <div>
          <div>
            <ul className="gap-5 hidden lg:flex">
              {links.map((el) => (
                <li key={el.path}>
                  {/* <Link to={el.path} className={`  ${location.pathname === el.path && ""}`}>{el.title}</Link> */}

                  <Link
                    to={el.path}
                    className={
                      location.pathname === el.path
                        ? "text-primary duration-500 font-medium font-title text-lg"
                        : "text-lg text-[#383838] font-medium font-title duration-500 hover:text-primary hover:duration-500"
                    }
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          {open && (
            <div className="absolute top-24 duration-300 bg-white shadow-xl w-7/12 left-0 right-0 mx-auto p-10">
              <ul className="flex flex-col items-center gap-7">
                {links.map((el) => (
                  <li key={el.path}>
                    <Link
                      to={el.path}
                      className={
                        location.pathname === el.path
                          ? "text-primary duration-500 font-medium font-title text-lg"
                          : "text-lg text-[#383838] font-medium font-title duration-500 hover:text-primary hover:duration-500"
                      }
                    >
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div onClick={() => setIsOpen(false)} className="absolute top-4 right-6 text-gray cursor-pointer">
                <X size={32} />
              </div>
            </div>
           )}
        </div>

        <div className="flex items-center gap-10">
          {/* Search Button */}
          <div className="bg-[#D0D0D240] hidden sm:flex justify-center items-center rounded-lg">
            <input
              type="text"
              placeholder="Search Here"
              className="text-sm text-gray border-0 rounded-x-lg outline-0 px-6 py-1 bg-transparent"
            />
            <button className="px-4 py-2 rounded-e-lg bg-primary text-lg text-white">
              <MagnifyingGlass />
            </button>
          </div>

          {/* Cart Group */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <ShoppingBag color="#383838" size={24} />
              <span className="absolute -top-3 -right-4 w-6 h-6 text-[12px] flex justify-center items-center text-white bg-primary rounded-full">
                99
              </span>
            </div>
            <div>
              <Envelope color="#383838" size={24} />
            </div>

            {/* Toggle button */}
            <div
              onClick={() => setIsOpen(!open)}
              className="cursor-pointer text-gray block lg:hidden"
            >
              <List size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
