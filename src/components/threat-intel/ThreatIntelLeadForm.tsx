
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Check, User, Phone, Mail, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { countryCodesList } from "./countryCodes";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  countryCode: z.string({ required_error: "Please select a country code." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  captcha: z.boolean().refine(val => val === true, {
    message: "Please confirm you're not a robot.",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface ThreatIntelLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThreatIntelLeadForm({ open, onOpenChange }: ThreatIntelLeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      countryCode: "+1", // Default to US
      phone: "",
      email: "",
      captcha: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    
    // In a real implementation, you would send this data to your backend
    // For now we'll just simulate a successful submission
    
    toast({
      title: "Lead information captured",
      description: `Thank you ${data.name}, we'll be in touch soon.`,
    });
    
    setIsSubmitted(true);
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-900 border border-slate-700 text-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-amber-400">
                Request xonThreatIntel+ Access
              </DialogTitle>
              <DialogDescription className="text-slate-300">
                Fill out the form below and our team will get back to you shortly.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-200">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                          <Input 
                            placeholder="Enter your full name" 
                            className="pl-10 bg-slate-800 border-slate-700 text-white" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-amber-500" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">Code</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px] bg-slate-800 border-slate-700 text-white">
                            {countryCodesList.map(country => (
                              <SelectItem key={country.code} value={country.code} className="hover:bg-slate-700">
                                {country.code} ({country.name})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-amber-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-slate-200">Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                            <Input 
                              placeholder="Enter your phone number" 
                              className="pl-10 bg-slate-800 border-slate-700 text-white" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-amber-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-200">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />
                          <Input 
                            placeholder="Enter your email address" 
                            className="pl-10 bg-slate-800 border-slate-700 text-white" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-amber-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-700 p-4 bg-slate-800/40">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-slate-200 flex items-center">
                          <ShieldCheck className="h-4 w-4 mr-2 text-amber-500" />
                          I'm not a robot
                        </FormLabel>
                      </div>
                      <FormMessage className="text-amber-500" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-slate-300 mb-6">
              Your request has been submitted successfully. Our team will reach out to you shortly with more information about xonThreatIntel+.
            </p>
            <Button
              onClick={resetForm}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
