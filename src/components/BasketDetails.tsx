import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setDrawer, updateBalance } from "../redux/appSlice";
import { ProductType, UserType } from "../types/Types";
import { Button } from "@mui/material";
import {
  calculaterBasket,
  removeProductFromBasket,
  setBasket,
} from "../redux/basketSlice";
import { toast } from "react-toastify";

function BasketDetails() {
  const { drawer, currentUser } = useSelector((state: RootState) => state.app);
  const { basket, totalAmount } = useSelector(
    (state: RootState) => state.basket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculaterBasket());
  }, [basket]);

  const closeDrawer = () => {
    dispatch(setDrawer(false));
  };

  const removeProduct = (productId: number) => {
    dispatch(removeProductFromBasket(productId));
  };

  const buy = () => {
    if (currentUser?.balance && currentUser.balance < totalAmount) {
      toast.warn("Bakiyeniz Yeterli Değildir");
      return;
    }
    if (currentUser?.balance) {
      const remaningTotal = currentUser.balance - totalAmount;

      const payload: UserType = {
        ...currentUser,
        balance: remaningTotal,
      };
      dispatch(updateBalance(payload));
      dispatch(setBasket([]));
      localStorage.removeItem("basket");
      toast.success("Ürünler Satın Alınmıştır");
    }
  };

  return (
    <Drawer
      onClose={closeDrawer}
      open={drawer}
      anchor="right"
      sx={{ width: "400px" }}
    >
      {basket &&
        basket.map((product: ProductType) => (
          <React.Fragment key={product.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "30px 20px",
                borderBottom: "1px solid lightgray",
              }}
            >
              <div style={{ marginRight: "15px" }}>
                <img src={product.image} width={60} height={60} />
              </div>
              <div style={{ width: "250px" }}>
                <div style={{ fontFamily: "arial", fontWeight: "bold" }}>
                  {product.title.substring(0, 30)}...
                </div>
                <div>{product.description.substring(0, 40)}...</div>
              </div>

              <div style={{ marginRight: "40px" }}>Adet:{product.count}</div>
              <div
                style={{
                  fontFamily: "arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "110px",
                }}
              >
                Fiyat:{product.price}₺
              </div>
              <div>
                <Button
                  onClick={() => removeProduct(product.id)}
                  size="small"
                  variant="outlined"
                  sx={{ textTransform: "none", height: "25px" }}
                >
                  Çıkart
                </Button>
              </div>
            </div>
          </React.Fragment>
        ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontFamily: "arial",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Toplam Tutar : {totalAmount}₺
        </div>
        <div>
          <Button
            onClick={buy}
            sx={{ marginTop: "10px", textTransform: "none", height: "25px" }}
            size="small"
            variant="contained"
            color="success"
          >
            Satın Al
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default BasketDetails;
