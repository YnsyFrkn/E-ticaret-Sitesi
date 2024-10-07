import * as yup from "yup";

export const registerPageSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı adı giriniz"),
  password: yup.string().required("Şifreyi giriniz"),
});
