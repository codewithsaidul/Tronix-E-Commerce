import { Box, Link, Stack, Typography } from "@mui/material";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  TwitterLogo,
  User,
} from "phosphor-react";

const Navbar = () => {
  return (
    <Box sx={{ py: "10px" }}>
      {/* Top Navbar or Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sx: "start", sm: "center" }}
        justifyContent="space-between"
        sx={{
          px: { xs: "10px", sm: "30px", md: "60" },
          margin: "auto",
        //   visibility: {xs: "hidden", sm: "visi"},
          gap: { xs: 2, md: 0 }, // Add spacing between items on small screens
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            justifyContent: { xs: "center", md: "start" }, // Center on small screens
          }}
          spacing={2}
        >
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            color="#A7A7A7"
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            <InstagramLogo size={24} />
          </Link>

          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            color="#A7A7A7"
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            <FacebookLogo size={24} />
          </Link>

          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            color="#A7A7A7"
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            <TwitterLogo size={24} />
          </Link>

          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            color="#A7A7A7"
            sx={{ cursor: "pointer", fontSize: "20px" }}
          >
            <LinkedinLogo size={24} />
          </Link>
        </Stack>

        <Stack direction={{xs: "column", sm: "row"}} alignItems="center" spacing={{xs: 1, sm: 2}}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#383838",
            }}
            variant="subtitle2"
          >
            <Phone color={"#F46B5B"} />

            <span>+12 345 6789 0</span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#383838",
            }}
            variant="subtitle2"
          >
            <Envelope color={"#F46B5B"} />

            <span>support@tronix.com</span>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#383838",
            }}
            variant="subtitle2"
          >
            <User color={"#F46B5B"} />

            <span>Account</span>
          </Typography>
        </Stack>
      </Stack>
      {/* Top Navbar or Header */}
    </Box>
  );
};

export default Navbar;
