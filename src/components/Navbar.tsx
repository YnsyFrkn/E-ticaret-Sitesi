import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import cheapStore from "../images/cheapStore.png";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  setCurrentUser,
  setDrawer,
  setProducts,
} from "../redux/appSlice";
import { toast } from "react-toastify";
import productService from "../services/ProductService";
import { ProductType } from "../types/Types";
import { FaShoppingBasket } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { RootState } from "../redux/store";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { basket } = useSelector((state: RootState) => state.basket);

  const logout = () => {
    localStorage.removeItem("currentUser");
    dispatch(setCurrentUser(null));
    navigate("/login");
    toast.success("Çıkış yapıldı");
  };

  const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    try {
      if (e.target.value) {
        //*Filtreleme işlemi yapılacak
        dispatch(filterProducts(e.target.value));
      } else {
        //*Filtreleme yapılmazsa ekranda bütün ürünler gözükecek
        const products: ProductType[] = await productService.getAllProducts();
        dispatch(setProducts(products));
      }
    } catch (error) {
      toast.error("Filtreleme işlemi sırasında hata oluştu : " + error);
    }
  };

  const openDrawer = () => {
    dispatch(setDrawer(true));
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#454242" }}>
      <Toolbar sx={{ marginTop: "10px" }}>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Cheap Store
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFilter(e)
            }
            sx={{
              width: "300px",
              marginBottom: "25px",
              marginRight: "20px",
            }}
            id="searchInput"
            placeholder="Bir şey ara..."
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),

              style: {
                color: "lightgray",
                borderBottom: "1px solid lightgray",
              },
            }}
            variant="standard"
          />

          <Badge
            onClick={openDrawer}
            badgeContent={basket.length}
            color="warning"
            sx={{ margin: "0px 10px", cursor: "pointer" }}
          >
            <FaShoppingBasket
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
            />
          </Badge>

          <Button
            onClick={logout}
            sx={{ textTransform: "none", color: "lightgray" }}
          >
            Çıkış Yap
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
