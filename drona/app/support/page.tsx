'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  service: z.string().min(1, { message: "Please select an option" }),
  message: z.string().max(100, { message: "Message must not exceed 100 words" }).min(1, { message: "Message is required" }),
})

const services = [
  { id: "subscriptions", label: "Subscriptions" },
  { id: "maintenance", label: "Maintenance" },
  { id: "dronadata", label: "DronaData" },
  { id: "other", label: "Other" },
]

export default function Support() {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitSuccess(true)
    form.reset()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <h2 className="text-3xl leading-tight font-bold text-gray-900 mb-6">Get Support from Drona</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">What is your question related to?</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select an option</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message here (max 100 words)" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Please keep your message under 100 words.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  Submit
                </Button>
              </form>
            </Form>
            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for reaching out. Our support team will get back to you soon!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

