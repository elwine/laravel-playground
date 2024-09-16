import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Vui lòng nhập email.",
    })
    .email({
      message: "Vui lòng nhập email hợp lệ.",
    }),
  password: z
    .string({
      required_error: "Vui lòng nhập mật khẩu.",
    })
    .max(32, "Mật khẩu không được quá 32 ký tự.")
    .min(8, "Mật khẩu không được ít hơn 8 kí tự"),
});
