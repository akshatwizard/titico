import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
    full_name: z
        .string({ error: "Name is required" })
        .min(1, { error: "Name is required" })
        .describe("Name of the User/Customer"),
    company_name: z
        .string()
        .optional()
        .describe("Name of the company"),
    email_address: z
        .email({ error: "Email is required" })
        .min(1, { error: "This field has to be filled." })
        .regex(/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i, { error: "This is not a valid email." })
        .describe("Email of the user"),
    phone_no: z
        .string({ error: "Invalid Phone no" })
        .regex(/^(?:\+\d{1,4})?\d{10,14}$/, { error: "Invalid mobile number" })
        .optional()
        .describe("Phone no of the user which is optional"),
    message: z
        .string()
        .optional()
        .describe("Message by the user if they want to send any.")
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = FormSchema.safeParse(body);

        if (!parsed.success) {
            const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
            return NextResponse.json({ success: false, error: firstError }, { status: 400 });
        }

        const { full_name, company_name, email_address, phone_no, message } = parsed.data;

        const { error } = await resend.emails.send({
            from: "Titico Textiles <titico.webadmin@wizards.co.in>",
            to: ["titico.webadmin@wizards.co.in"],
            cc: ["akshat.gd@gmail.com"],
            replyTo: email_address,
            subject: `New Inquiry from ${full_name}${company_name ? ` — ${company_name}` : ""}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <h2 style="border-bottom: 2px solid #c8a35a; padding-bottom: 10px; color: #c8a35a;">
                        New Contact Inquiry
                    </h2>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; width: 160px; color: #555;">Full Name</td>
                            <td style="padding: 10px 0;">${full_name}</td>
                        </tr>
                        ${company_name ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Company</td>
                            <td style="padding: 10px 0;">${company_name}</td>
                        </tr>` : ""}
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Email</td>
                            <td style="padding: 10px 0;">
                                <a href="mailto:${email_address}" style="color: #c8a35a;">${email_address}</a>
                            </td>
                        </tr>
                        ${phone_no ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #555;">Phone</td>
                            <td style="padding: 10px 0;">${phone_no}</td>
                        </tr>` : ""}
                        ${message ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; vertical-align: top; color: #555;">Requirements</td>
                            <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
                        </tr>` : ""}
                    </table>

                    <p style="margin-top: 32px; font-size: 12px; color: #999;">
                        Sent via Titico Textiles contact form
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
        console.error("[Contact route error]", err);
        return NextResponse.json({ success: false, error: "Unexpected server error." }, { status: 500 });
    }
}