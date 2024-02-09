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


export const PersonalInfoSchema = zodInstance.object({
    name: zodInstance.string().min(5),
    email: zodInstance.string().email({ message: "Please enter a valid email address" }),
})

export type PersonalInfo = zodInstance.infer<typeof PersonalInfoSchema>