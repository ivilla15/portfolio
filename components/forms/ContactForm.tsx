"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendContact } from "./actions/sendContact";

export default function ContactForm() {
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("✅ handleSubmit triggered");

    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log("📤 FormData entries:", Object.fromEntries(formData.entries()));

    try {
      await sendContact(formData);
      console.log("✅ sendContact completed without error");

      toast({
        title: "✅ Message Sent",
        description: "Thanks for reaching out! I’ll get back to you soon.",
      });

      form.reset(); // clear the form
    } catch (error) {
      console.error("❌ Error in handleSubmit:", error);
      toast({
        title: "❌ Something went wrong",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="border-0 rounded-none bg-background/95 backdrop-blur-sm">
      <CardHeader className="p-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl">Send me a message</CardTitle>
        </div>
        <p className="text-muted-foreground text-lg">
          Got a project in mind? Let&apos;s discuss how we can bring your ideas
          to life.
        </p>
      </CardHeader>

      <CardContent className="px-12 pb-12 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-6">
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
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-medium transform hover:scale-[1.02] transition-all duration-300"
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
