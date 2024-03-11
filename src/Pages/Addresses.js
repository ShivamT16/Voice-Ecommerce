import { useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@material-ui/core";
import "./addresses.css";

import { AddressContext } from "..";

export const Addresses = () => {
  const {
    handleAddress,
    addresses,
    open,
    userAddress,
    handleDelete,
    handleUpdate,
    handleModalOpen,
    handleModalClose,
    handleAdressesInput,
    handleAdressesSubmit
  } = useContext(AddressContext);

  return (
    <div className="address">
      <h2>Select Address</h2>
      <button type="buttton" className="addBtn" onClick={handleModalOpen}>
        Add Address
      </button>
      <div className="Address">
        {addresses.map((add) => {
          const { id, firstName, lastName, locality, state, pincode } = add;
          return (
            <div
              className="Address1"
              key={id}
              onClick={() => handleAddress(id)}
            >
              <input type="radio" name="address" />
              <p>
                {firstName} {lastName},
              </p>
              <p>
                {locality}, {state}, {pincode}
              </p>
              <button className="deleteBtn" onClick={() => handleDelete(id)}>
                Delete
              </button>
              <button className="updateBtn" onClick={() => handleUpdate(id)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
      <Modal onClose={handleModalClose} open={open} className="modal">
        <form>
          <div>
            <label htmlFor="firstName"> </label>
            <input
              type="firstName"
              className="addressInput"
              autoComplete="off"
              value={userAddress.firstName}
              onChange={handleAdressesInput}
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <label htmlFor="lastName"> </label>
            <input
              type="lastName"
              className="addressInput"
              autoComplete="off"
              value={userAddress.lastName}
              onChange={handleAdressesInput}
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="locality"> </label>
            <input
              type="locality"
              className="addressInput"
              autoComplete="off"
              value={userAddress.locality}
              onChange={handleAdressesInput}
              name="locality"
              id="locality"
              placeholder="House Number/ Locality"
            />
            <label htmlFor="state"> </label>
            <input
              type="state"
              className="addressInput"
              autoComplete="off"
              value={userAddress.state}
              onChange={handleAdressesInput}
              name="state"
              id="state"
              placeholder="State"
            />
            <label htmlFor="pincode"> </label>
            <input
              type="pincode"
              className="addressInput"
              autoComplete="off"
              value={userAddress.pincode}
              onChange={handleAdressesInput}
              name="pincode"
              id="pincode"
              placeholder="Pincode"
            />
            <button className="add-Btn" onClick={handleAdressesSubmit}>
              {" "}
              Add Address{" "}
            </button>
          </div>
        </form>
      </Modal>
      <br></br>
      <Link className="link" to="/checkout">
        <button>CheckOut</button>
      </Link>
    </div>
  );
};
