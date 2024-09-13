import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const loginSchema = z.object({
  email: z.string({
    required_error: "Vui lòng nhập email.",
  }).email({
    message: "Vui lòng nhập email hợp lệ."
  }),
  password: z.string({
    required_error: "Vui lòng nhập mật khẩu."
  }).max(32, "Mật khẩu không được quá 32 ký tự.").min(8, "Mật khẩu không được ít hơn 8 kí tự"),
  accountType: z.enum(["personal", 'company'])
})


const handleLoginSubmit = (values: z.infer<typeof loginSchema>) => {
  console.log(values)
}


export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      accountType: "personal"
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
              <Input placeholder="Enter your email address" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        }} />

        {/* === PASSWORD FIELD */}
        <FormField name="password" control={form.control} render={({ field }) => {
          return <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Your password" type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        }}>
        </FormField>

        {/* === ACCOUNT TYPE FIELD */}
        <FormField name="accountType" control={form.control} render={(({ field }) => {
          return <FormItem>
            <FormLabel>Account type</FormLabel>
            <FormMessage />
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue="personal">
                <SelectTrigger >
                  <SelectValue placeholder="Your account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal" defaultChecked>Personal</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                </SelectContent>
              </Select>

            </FormControl>
          </FormItem>
        })}>
        </FormField>

        <Button className="w-fit mt-3" type="submit">Login</Button>
      </form>
    </Form>
  </>
}