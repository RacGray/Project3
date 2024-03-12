//import React, { ChangeEvent, FormEvent, useState } from "react";
import "../App.css";
//import Input from "./components/InputField";
import { SellerList } from "../components/SellerList";

export function SellerPage() {
  //  return (
  //    <>
  //      <h1> Seller Page</h1>
  //      <SellerList></SellerList>
  //    </>
  //  );
  //}

  //const App: React.FC = () => {
  //  const [name, setName] = useState("");
  //  const [error, setError] = useState(false);

  //  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //    setName(e.target.value);
  //  };

  //  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //    e.preventDefault();
  //    if (!name.trim()) {
  //      setError(true);
  //    } else {
  //      setError(false);
  //    }
  //  };

  //  return (
  //    <div className="page-center">
  //      <form onSubmit={handleSubmit}>
  //        <h3 className="form-title">Login Form</h3>
  //       <Input
  //          type="text"
  //          label="Name"
  //          value={name}
  //          name="name"
  //          error={error}
  //          onChange={handleNameChange}
  //          placeholder="Please enter your name"
  //       />
  //        <button type="submit">Submit</button>
  //      </form>
  //    </div>
  //  );
  //};
  //export default App;

  //import React from "react";
  //import { getAllSellerAPI } from "../services/SellerService";

  //export function SellerPage() {
  //function getSellers() {
  //getAllSellerAPI()
  //.then((response) => {
  //return response.json();
  //})
  //.then((json) => {
  //console.log(json);
  //});
  //}
  function postSeller() {
    //     postSomeSeller()
    //     .then(response => {return response.json()})
    //     .then(json => {console.log(json)})
    //     .catch(error => {console.log(error)})
    // }
    return (
      <>
        <div>
          <button onClick={SellerList}>test i can get all sellers</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>Seller HTML goes here</div>
    </>
  );
}
