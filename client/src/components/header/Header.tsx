"use client";

import React, { useEffect, useState } from "react";
import { PineconeLogo } from "../icon/Pinelog";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Sags } from "../icon/Sags";
import { Newtreh } from "../icon/Newtreh";
import Link from "next/link";
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
// import { Bag } from "../bagCart/Bag";
import FreeSolo from "../SearchInput";

interface RouterItem {
  title: string;
  href: string;
}

export const Header: React.FC = () => {
  const { isLoggedIn, loginHandler } = useUser();
  const { push } = useRouter();

  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const routers: RouterItem[] = [
    { title: "НҮҮР", href: "/" },
    { title: "ХООЛНЫ ЦЭС", href: "/menu" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/footer-info/delivery-area" },
  ];

  const handleUserClick = async () => {
    if (isLoggedIn) {
      push("/userprofile");
      setClickedButton("Хэрэглэгч");
    } else {
      push("/login");
    }
  };

  const handleSagsClick = () => {
    if (isLoggedIn) {
      push("/sags");
      setClickedButton("Sags");
    } else {
      push("/login");
    }
  };

  const handleButtonClick = (title: string) => {
    setClickedButton(title);
  };

  const buttonStyles = {
    my: 2,
    color: "black",
    display: "block",
    fontWeight: 700,
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        textSizeAdjust: "inherit",
      }}
    >
      {/* <Bag open={open} toggleDrawer={toggleDrawer} /> */}
      <Container sx={{ width: "1248px" }}>
        <Toolbar disableGutters>
          <PineconeLogo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routers.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={buttonStyles}
                  style={{
                    color: clickedButton === item.title ? "#18ba51" : "black",
                  }}
                  onClick={() => handleButtonClick(item.title)}
                  aria-label={item.title}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <FreeSolo />
          <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
            <Sags />

            <Button
              onClick={() => toggleDrawer(true)}
              sx={buttonStyles}
              aria-label="Cart"
              style={{
                color: clickedButton !== "sags" ? "black" : "#18ba51",
              }}
            >
              Сагс
            </Button>
            <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
              <Newtreh />
              <Button
                onClick={handleUserClick}
                sx={buttonStyles}
                aria-label={isLoggedIn ? "User Profile" : "Login"}
                style={{
                  color: clickedButton !== "Хэрэглэгч" ? "black" : "#18ba51",
                }}
              >
                {isLoggedIn ? "Хэрэглэгч" : "Нэвтрэх"}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
