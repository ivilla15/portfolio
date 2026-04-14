"use client";

import * as React from "react";
import { Loader2, Send } from "lucide-react";

import { sendContact } from "@/components/forms/actions/sendContact";
import { Button, Input, Label, Textarea, Typography } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      await sendContact(formData);

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      const description =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.";

      toast({
        title: "Unable to send message",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex h-full flex-col bg-surface-2 p-6 sm:p-7 rounded-b-[28px] lg:rounded-bl-none lg:rounded-tr-[28px] lg:p-8">
      <Typography variant="h3" className="text-2xl sm:text-3xl">
        Send a message
      </Typography>

      <Typography variant="body" className="mt-3 max-w-2xl">
        Whether you want to talk about a project, an opportunity, or just say
        hello, feel free to reach out.
      </Typography>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" autoComplete="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={6} required />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
