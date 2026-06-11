import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
    name: z.string({ error: "Name is required" }).min(1, { error: "Name is required" }),
    company: z.string().optional(),
    email: z
        .string()
        .email({ error: "Invalid email address" })
        .min(1, { error: "Email is required" })
        .regex(/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i, { error: "This is not a valid email." }),
    phone: z
        .string()
        .regex(/^(?:\+\d{1,4})?\d{10,14}$/, { error: "Invalid phone number" })
        .optional()
        .or(z.literal("")),
    country: z.string().optional(),
    type: z.string({ error: "Inquiry type is required" }).min(1, { error: "Inquiry type is required" }),
    message: z.string({ error: "Message is required" }).min(1, { error: "Message is required" }),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = FormSchema.safeParse(body);

        if (!parsed.success) {
            const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
            return NextResponse.json({ success: false, error: firstError }, { status: 400 });
        }

        const { name, company, email, phone, country, type, message } = parsed.data;

        const { error } = await resend.emails.send({
            from: "Titico Textiles <titico.webadmin@wizards.co.in>",
            to: ["titico.webadmin@wizards.co.in"],
            cc: ["akshat.gd@gmail.com"],
            replyTo: email,
            subject: `[${type}] from ${name}${company ? ` — ${company}` : ""}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <h2 style="border-bottom: 2px solid #c8a35a; padding-bottom: 10px; color: #c8a35a;">
                        New Contact Inquiry
                    </h2>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; width: 160px; color: #555;">Full Name</td>
                            <td style="padding: 10px 0;">${name}</td>
                        </tr>
                        ${company ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Company</td>
                            <td style="padding: 10px 0;">${company}</td>
                        </tr>` : ""}
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Email</td>
                            <td style="padding: 10px 0;">
                                <a href="mailto:${email}" style="color: #c8a35a;">${email}</a>
                            </td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Phone</td>
                            <td style="padding: 10px 0;">${phone}</td>
                        </tr>` : ""}
                        ${country ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Country</td>
                            <td style="padding: 10px 0;">${country}</td>
                        </tr>` : ""}
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Inquiry Type</td>
                            <td style="padding: 10px 0;">${type}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; vertical-align: top; color: #555;">Message</td>
                            <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
                        </tr>
                    </table>

                    <p style="margin-top: 32px; font-size: 12px; color: #999;">
                        Sent via Titico Textiles contact page
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("[Resend error]", error);
            return NextResponse.json({ success: false, error: "Failed to send email. Please try again." }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error("[Contact page route error]", err);
        return NextResponse.json({ success: false, error: "Unexpected server error." }, { status: 500 });
    }
}