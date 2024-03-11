import { createContext, useState } from "react";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
  const Address = [
    {
      id: 1,
      firstName: "Shivam",
      lastName: "Tripathi",
      locality: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301"
    },
    {
      id: 2,
      firstName: "Shubham",
      lastName: "Awasthi",
      locality: "Dwarka",
      state: "Delhi",
      pincode: "110023"
    }
  ];

  const [open, setOpen] = useState(false);
  const [userAddress, setUserAddress] = useState({
    firstName: "",
    lastName: "",
    locality: "",
    state: "",
    pincode: ""
  });
  const [addresses, setAddresses] = useState(Address);
  const [address, setAddress] = useState();

  const handleModalClose = () => {
    setOpen(false);
    setUserAddress({
      firstName: "",
      lastName: "",
      locality: "",
      state: "",
      pincode: ""
    });
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleAdressesInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserAddress({ ...userAddress, [name]: value });
  };

  const handleAdressesSubmit = (e) => {
    e.preventDefault();
    handleModalClose();
    const newAddress = {
      ...userAddress,
      id: Number(new Date().getTime().toString())
    };
    setAddresses([...addresses, newAddress]);
  };

  const handleDelete = (element) => {
    const Delete = addresses.filter(({ id }) => id !== element);
    setAddresses(Delete);
  };

  const handleUpdate = (element) => {
    const Update = addresses.find(({ id }) => id === element);

    setUserAddress({
      firstName: Update.firstName,
      lastName: Update.lastName,
      locality: Update.locality,
      state: Update.state,
      pincode: Update.pincode
    });
    setAddresses(addresses.filter(({ id }) => id !== element));
    handleModalOpen();
  };

  const handleAddress = (e) => {
    setAddress((address) => e);
  };

  return (
    <AddressContext.Provider
      value={{
        handleAddress,
        address,
        addresses,
        open,
        userAddress,
        handleDelete,
        handleUpdate,
        handleModalClose,
        handleModalOpen,
        handleAdressesInput,
        handleAdressesSubmit
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
