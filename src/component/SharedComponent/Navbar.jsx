
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  TwitterLogo,
  User,
} from "phosphor-react";
// import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar or Header */}
      <div>
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-orange-600"
          >
            <InstagramLogo size={24} />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-xl"
          >
            <FacebookLogo size={24} />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-xl"
          >
            <TwitterLogo size={24} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-xl"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>

        <div>
          <p>
            <Phone color={"#F46B5B"} />

            <span>+12 345 6789 0</span>
          </p>
          <p >
            <Envelope color={"#F46B5B"} />

            <span>support@tronix.com</span>
          </p>
          <p>
            <User color={"#F46B5B"} />

            <span>Account</span>
          </p>
        </div>
      </div>
      {/* Top Navbar or Header */}

      {/* <Stack>
        <Stack direction="row" >
          <img  src={Logo} alt={`${Logo} Logo Image`} />
          <Typography>Tronix</Typography>
        </Stack>
      </Stack> */}
    </div>
  );
};

export default Navbar;
