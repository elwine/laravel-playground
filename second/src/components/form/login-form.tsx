import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { apiClient } from "@/lib/api-client";


const loginSchema = z.object({
  email: z.string({
    required_error: "Vui lòng nhập email.",
  }).email({
    message: "Vui lòng nhập email hợp lệ."
  }),
  password: z.string({
    required_error: "Vui lòng nhập mật khẩu."
  }).max(32, "Mật khẩu không được quá 32 ký tự.").min(8, "Mật khẩu không được ít hơn 8 kí tự")
})


const handleLoginSubmit = (values: z.infer<typeof loginSchema>) => {
  apiClient.post('/auth/login', values).then(console.log)
}


export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  return <>
    <Form {...form}>
      <form className="w-96 mx-auto flex flex-col gap-3 " onSubmit={form.handleSubmit(handleLoginSubmit)}>
        {/* === EMAIL FIELD */}
        <FormField name="email" control={form.control} render={({ field }) => {
          return <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input placeholder="Vui lòng nhập địa chỉ email." type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        }} />

        {/* === PASSWORD FIELD */}
        <FormField name="password" control={form.control} render={({ field }) => {
          return <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Vui lòng nhập mật khẩu." type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        }}>
        </FormField>


        <Button className="w-fit mt-3" type="submit">Login</Button>
      </form>
    </Form>
  </>
}