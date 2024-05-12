import * as Yup from "yup";
export const userValidation=Yup.object({
    FirstName:Yup.string().max(55,"first name must be at max 55 characters").trim().required("first name is required"),
    LastName:Yup.string().max(20,"last name must be at max 55 characters").trim().required("last name is required"),
    Email:Yup.string().trim().required("Email is required").max(60,"Email must be at most 60 characters").lowercase().email(),
    Password:Yup.string().min(4,"password must be at least 4 characters").required(),
    gender:Yup.string().nullable().trim(),
    ContactNumber:Yup.number().positive().integer().required(),
    Country:Yup.string().required(),
    City:Yup.string().required(),
    Zip:Yup.number().required().positive().integer()



})