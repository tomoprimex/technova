import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// RESEND
const resend = new Resend(process.env.RESEND_API_KEY);

// SUPABASE
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {

    const { name, email, message } = await req.json();

    // SAVE TO SUPABASE (safe, non-blocking)
    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([{ name, email, message }]);

      if (error) {
        console.error("SUPABASE ERROR:", error);
      } else {
        console.log("SUPABASE SUCCESS:", data);
      }
    } catch (err) {
      console.error("Supabase crashed but continuing:", err);
    }

    // SEND EMAIL TO YOU (ADMIN ONLY)
    const adminEmail = await resend.emails.send({
      from: "Technova <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("ADMIN EMAIL RESPONSE:", adminEmail);

    if (adminEmail.error) {
      console.error("EMAIL FAILED:", adminEmail.error);
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json({
      success: false,
      message: "Something went wrong",
    });
  }
}