import { createContext, useContext } from "react";


type CheckoutContextType = {};

const CheckoutContext = createContext<CheckoutContextType>({});

export default function CheckoutContextProvider({ children }) {
    return (
        <CheckoutContext.Provider value={{ test: "abc_________tsting______owytow" }}>
            {children}
        </CheckoutContext.Provider>
    )
};

export const useCheckoutContext = () => useContext(CheckoutContext);