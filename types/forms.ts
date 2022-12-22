import * as yup from "yup";

export interface IAuthForm {
  username: string;
  password: string;
}

export const authSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .required("This field is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "Password must be at least 6 characters long, contain a least 1 number, 1 uppercase letter and 1 lowercase letter"
    )
    .required("This field is required"),
});
