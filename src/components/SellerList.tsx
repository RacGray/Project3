import { useEffect, useState } from "react";
import { Seller } from "../model/Seller";
import { getAllSellerAPI } from "../services/SellerService";
import { SingleSeller } from "./SingleSeller";

export function SellerList() {
  const [allSellers, setAllSellers] = useState<Seller[]>([]);

  useEffect(() => {
    getAllSellerAPI()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllSellers(json);
      });
  }, []);

  if (allSellers.length <= 0) {
    return <>{<p>Seller list is empty</p>}</>;
  }

  return (
    <>
      {allSellers.map((Seller: Seller) => {
        return (
          <SingleSeller key={Seller.SellerID} data={Seller}></SingleSeller>
        );
      })}
    </>
  );
}
