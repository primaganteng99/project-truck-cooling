import { Fragment, useState } from "react";
import { Badge, Button, Drawer, IconButton, ThemeProvider, Box, styled } from "@mui/material";
import { Clear, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { H6, Small } from "./Typography";
import useSettings from "app/hooks/useSettings";
import { themeShadows } from "./MatxTheme/themeColors";

import { sideNavWidth, topBarHeight } from "app/utils/constant";

// STYLED COMPONENTS
const MiniCart = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  width: sideNavWidth
});

const CartBox = styled(Box)({
  padding: "4px",
  paddingLeft: "16px",
  display: "flex",
  alignItems: "center",
  boxShadow: themeShadows[6],
  height: topBarHeight,
  "& h5": {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "16px",
    fontWeight: "500"
  }
});

const ProductBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "8px 8px",
  transition: "background 300ms ease",
  "&:hover": { background: "rgba(0,0,0,0.01)" }
});

const IMG = styled("img")({ width: 48 });

const ProductDetails = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  "& h6": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
    width: 120,
    marginBottom: "4px"
  }
});

const data = [
  {
    qty: 1,
    price: 987,
    title: "Bit Bass Headphone",
    id: "333sa680bdf4976dfgga21rt4",
    imgUrl: "/assets/images/products/headphone-2.jpg"
  },
  {
    qty: 1,
    price: 454,
    title: "Bass Speaker 1",
    id: "323sa680b324976dfgga21rt47",
    imgUrl: "/assets/images/products/speaker-2.jpg"
  },
  {
    qty: 1,
    price: 134,
    title: "Bass Speaker 2",
    id: "323sa680bdf4976dfgga21rt4",
    imgUrl: "/assets/images/products/headphone-1.jpg"
  }
];

export default function ShoppingCart({ container }) {
  const { settings } = useSettings();
  const [panelOpen, setPanelOpen] = useState(false);
  const [cartList, setCartList] = useState([...data]);

  const handleDrawerToggle = () => setPanelOpen(!panelOpen);

  const handleCheckoutClick = () => setPanelOpen(false);

  const handleAddQty = (id) => {
    setCartList((state) =>
      state.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const handleRemoveQty = (id) => {
    setCartList((state) =>
      state.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
    );
  };

  const totalCost = cartList.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

  return (
    <Fragment>
      <ThemeProvider theme={settings.themes[settings.activeTheme]}>
        <Drawer
          anchor="right"
          open={panelOpen}
          variant="temporary"
          container={container}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}>
        </Drawer>
      </ThemeProvider>
    </Fragment>
  );
}
