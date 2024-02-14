// // https://zod.dev/?id=basic-usage
// import { z as zodInstance } from "zod"; // just for better naming 
// /* If you mean to say "Is z a Zod instance?" in the context of a specific piece of code you're looking at, it's important to understand that z itself is not an instance; it's the module or namespace that provides methods for creating instances of Zod schemas. */

// // creating an object schema
// const personalInfo = zodInstance.object({
//     name: zodInstance.string(),
//     // email: zodInstance.string().email(),
//     email: zodInstance.string().email({message:"Please enter a valid email address"}),
// })


// // parsing
// const info = personalInfo.parse(
//     {
//         name: "Luffy Shera",
//         email: "dotyh@alo.com"
//     }
// )

// console.log(info);



// Method 2:-
import { z as zodInstance } from "zod";


// Personal info schema
export const PersonalInfoSchema = zodInstance.object({
    name: zodInstance.string({
        required_error: "Name is required"
    }).min(5),
    email: zodInstance.string({
        required_error: "Email is required"
    }).email({
        message: "Please enter a valid email address"
    }),
})

export type PersonalInfo = zodInstance.infer<typeof PersonalInfoSchema>




// Delivery info schema
export const DeliveryInfoSchema = zodInstance.object({
    city: zodInstance.string().min(1),
    postalCode: zodInstance.string(),
    address: zodInstance.string(),
    shippingOptions: zodInstance.enum(["free", "fast", "same_day"])
});

export type DeliveryInfo = zodInstance.infer<typeof DeliveryInfoSchema>




const isLuhnValid = (value) => {
    const cleanedCardNumber = value.replace(/[\s-]/g, '');
    /* the variable cleanedCardNumber is used to represent the credit card number after removing any spaces or dashes. The purpose of cleaning the card number is to standardize the input and make it easier to perform checks or validations. */
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedCardNumber[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
};

const isCreditCardNumberValid = (value) => {
    const cleanedCardNumber = value.replace(/[\s-]/g, '');

    // Check if the cleaned card number consists of 16 digits
    if (!/^\d{16}$/.test(cleanedCardNumber)) {
        return false;
    }

    // Check if the Luhn algorithm validates
    if (!isLuhnValid(cleanedCardNumber)) {
        return false;
    }

    // Add more sophisticated credit card number validation logic here
    // For simplicity, we are only checking the length and Luhn algorithm in this example

    return true;
};


// Payment info schema
export const PaymentInfoSchema = zodInstance.object({
    cardNumber: zodInstance.string().refine(isCreditCardNumberValid, {
        message: "Invalid credit card number"
    }),
    // expiryDate: zodInstance.string().regex(/^(0[1-9]|1[0-2])\/\d{4}$/),
    expiryDate: zodInstance.string().refine(value => {
        const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regex.test(value)) {
            return false; // Not a valid MM/YYYY format
        }

        const [month, year] = value.split('/').map(Number);

        // Get the current date
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Month is zero-based

        // Check if the year is in the future or if it's the current year and the month is in the future
        return year > currentYear || (year === currentYear && month >= currentMonth);
    }, {
        message: "Invalid or not a future date"
    }),
    securityCode: zodInstance.coerce.number().gte(100).lte(999),
    saveInfo: zodInstance.boolean()
});


export type PaymentInfo = zodInstance.infer<typeof PaymentInfoSchema>;


export const CheckoutInfoSchemma = PersonalInfoSchema.merge(DeliveryInfoSchema).merge(PaymentInfoSchema);

export type CheckoutData = zodInstance.infer<typeof CheckoutInfoSchemma>