"use client";

import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  reason: z.string().min(2, { message: "Reason is required" }),
  email: z.string().email(),
  message: z.string().min(2, { message: "Message is too short" }),
});

export function Contact() {
  const formID = process.env.NEXT_PUBLIC_FORM_ID;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      reason: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState<boolean>();
  const [error, setError] = React.useState<
    { message: string; status?: string } | undefined
  >();
  const router = useRouter();

  const onSubmit = React.useCallback(
    (data: z.infer<typeof formSchema>) => {
      let loadingTimerID: ReturnType<typeof setTimeout>;
      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(
            `${process.env.NEXT_PUBLIC_FORM_URL}/api/form-submissions`,
            {
              body: JSON.stringify({
                form: formID,
                submissionData: dataToSend,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            }
          );

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);

            setError({
              message: res.errors?.[0]?.message || "Internal Server Error",
              status: res.status,
            });

            return;
          }

          setIsLoading(false);
          // setHasSubmitted(true)
          toast.success("Success", {
            // description:
            //   confirmationType === 'message' ? <RichText data={confirmationMessage} /> : undefined,
          });

          form.reset();
        } catch (err) {
          console.warn(err);
          setIsLoading(false);
          setError({
            message: "Something went wrong.",
          });
        }
      };

      void submitForm();
    },
    [router, redirect, formID]
  );

  return (
    <div id='contact__form' className='pt-12 lg:py-16'>
      <div className='container md:border rounded-xl lg:p-16 space-y-12'>
        <h1 className='text-3xl'>Let’s transform your business together!</h1>

        <Form {...form}>
          <form
            id={formID}
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-12'
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Joseph Adu' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='reason'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason to contact</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select from dropdown' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Enquiry'>Enquiry</SelectItem>
                        <SelectItem value='Demo'>Demo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='joseph.adu@gmail.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Hi there, I’d like to...'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className='space-x-2'>
              {isLoading && <Loader className='animate-spin size-4' />}
              <span>Submit</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
