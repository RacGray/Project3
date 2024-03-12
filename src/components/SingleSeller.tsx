import { Seller } from "../model/Seller";
interface propsInterface {
  data: Seller;
}
export function SingleSeller(props: propsInterface) {
  return (
    <>
      <h2>{props.data.SellerID}</h2>
      <p>{props.data.SellerName}</p>
    </>
  );
}
