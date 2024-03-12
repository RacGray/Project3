import { useEffect } from "react";
import { Seller } from "../../model/Seller";

const apiBaseURL = "http://localhost:9001/";

export function SellerList({ getAllSellerAPI });

useEffect(() => {
  getAllSellersAPI()
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      updateAllSellers(json);
    });
});
