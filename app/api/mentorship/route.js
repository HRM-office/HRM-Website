import { sendForm } from "@/lib/mail";

export const POST = (request) => sendForm(request, {
  title: "New HR mentorship application",
  subject: (d) => `Mentorship application from ${d.name} - HRM Office website`,
  required: ["name", "email", "agree"],
  fields: [["name", "Name"], ["email", "Email"], ["phone", "Phone"], ["message", "About them"], ["agree", "Agreed to take part"]],
});
