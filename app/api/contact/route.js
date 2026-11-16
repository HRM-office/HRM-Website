import { sendForm } from "@/lib/mail";

export const POST = (request) => sendForm(request, {
  title: "New contact message",
  subject: (d) => `${d.topic || "General"} enquiry from ${d.name} - HRM Office website`,
  required: ["name", "email", "message"],
  fields: [["name", "Name"], ["company", "Company"], ["email", "Email"], ["phone", "Phone"], ["topic", "Topic"], ["message", "Message"]],
});
