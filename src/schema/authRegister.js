import * as yup from "yup";

const MATCHES_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username harus diisi minimal 6 karakter huruf')
    .required("Username harus diisi, ini digunakan untuk public profile"),

  email: yup
    .string()
    .email("Masukan email yang valid")
    .required("Email harus diisi"),

  password: yup
    .string()
    .min(8, 'Password harus diisi minimal 8 karakter dan mengandung huruf, angka, dan simbol')
    .matches(MATCHES_PASSWORD, "Password harus mengandung huruf, angka dan simbol")
    .required("Password harus diisi"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Konfirmasi password harus sama dengan password")
    .required("Konfirmasi password harus diisi"),
});

export default RegisterSchema;
