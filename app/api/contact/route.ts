import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Kadrek Site <noreply@kadrek.com>",
        to: ["contact@kadrek.com"],
        subject: `Nouveau message Kadrek - ${service ?? "Contact"}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
            <h2 style="color:#020617;">Nouveau message depuis kadrek.com</h2>
            <p><strong>Nom :</strong> ${name ?? "Non renseigne"}</p>
            <p><strong>Email :</strong> ${email ?? "Non renseigne"}</p>
            <p><strong>Telephone :</strong> ${phone ?? "Non renseigne"}</p>
            <p><strong>Service :</strong> ${service ?? "Non renseigne"}</p>
            <div style="margin-top:16px;padding:16px;background:#f8fafc;border-left:3px solid #22d3ee;">
              <p style="white-space:pre-wrap;margin:0;">${message ?? ""}</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
