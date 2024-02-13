import { createContext, useContext, useState } from "react";
import { CheckoutData, DeliveryInfo, PaymentInfo, PersonalInfo } from "../schema/checkout.schema";


type CheckoutContextType = {
    setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>,
    setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>,
    setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>,
    onSubmitAll: (paymentInformation: PaymentInfo) => Promise<boolean>,
};

const CheckoutContext = createContext<CheckoutContextType>({
    setPayment: () => { },
    setPersonal: () => { },
    setDelivery: () => { },
    onSubmitAll: () => Promise.resolve(false)
});

export default function CheckoutContextProvider({ children }) {

    const [personal, setPersonal] = useState<PersonalInfo | null>(null);
    const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
    const [payment, setPayment] = useState<PaymentInfo | null>(null);


    const onSubmitAll = async (paymentInformation: PaymentInfo) => {
        // setPayment(paymentInformation);

        const checkoutData: CheckoutData = { ...personal, ...delivery, ...payment }

        console.log("Submitting the multi-step form");
        // console.log("personal", personal);
        // console.log("delivery", delivery);
        // console.log("payment", payment);
        // console.log("paymentInfo", paymentInformation);
        console.log("checkoutData", checkoutData);

        return true;
    };

    return (
        <CheckoutContext.Provider value={{ setDelivery, setPersonal, setPayment, onSubmitAll }}>
            {children}
        </CheckoutContext.Provider>
    )
};

export const useCheckoutContext = () => useContext(CheckoutContext);