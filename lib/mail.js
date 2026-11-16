import nodemailer from "nodemailer";

// Same Gmail setup the live site uses: EMAIL_USER / EMAIL_PASS (an app password) send, EMAIL_TO receives.
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reads the posted form, checks it, emails it. Returns a Response for the route handler.
export async function sendForm(request, { subject, title, required, fields }) {
  let data;
  try { data = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  if (data._gotcha) return Response.json({ ok: true }); // spam trap: pretend success
  const missing = required.filter((k) => !String(data[k] ?? "").trim());
  if (missing.length || !EMAIL_RE.test(data.email || "")) {
    return Response.json({ error: "Enter your name, a valid email address and the required details." }, { status: 400 });
  }
  if (Object.values(data).some((v) => String(v).length > 5000)) return Response.json({ error: "Message is too long." }, { status: 400 });
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    console.error("Mail not configured: set EMAIL_USER, EMAIL_PASS and EMAIL_TO.");
    return Response.json({ error: "Messaging is not set up yet." }, { status: 503 });
  }

  const rows = fields
    .filter(([k]) => String(data[k] ?? "").trim())
    .map(([k, label]) => `<tr><td style="padding:6px 12px 6px 0;color:#565e74;vertical-align:top">${label}</td><td style="padding:6px 0">${esc(data[k]).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");
  const html = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#263d85;color:#fff;padding:20px;border-radius:10px 10px 0 0"><h2 style="margin:0;font-size:20px">${title}</h2></div>
    <div style="background:#fff;padding:24px;border:1px solid #e2e5ee;border-top:0;border-radius:0 0 10px 10px"><table style="border-collapse:collapse;font-size:15px">${rows}</table>
    <p style="margin-top:20px;color:#888;font-size:13px">Reply to this email to answer ${esc(data.name)} directly.</p></div></div>`;

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } });
    await transporter.sendMail({ from: process.env.EMAIL_USER, to: process.env.EMAIL_TO, replyTo: data.email, subject: subject(data), html });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return Response.json({ error: "We couldn't send your message. Please try again." }, { status: 502 });
  }
}
