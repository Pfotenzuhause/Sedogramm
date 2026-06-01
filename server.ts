import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve JSON payloads
  app.use(express.json());

  // API Route for Inquiry Submissions
  app.post("/api/contact", async (req, res) => {
    const { name, email, message, phone, kebabsPerDay, weightOffset } = req.body;

    if (!name || !email) {
       res.status(400).json({ error: "Name und E-Mail-Adresse sind erforderlich." });
       return;
    }

    console.log("📨 Neue Anfrage erhalten:", { name, email, message, phone, kebabsPerDay, weightOffset });

    // Generate beautiful HTML and text formats for the email
    const subject = `Neue SedoGramm Anfrage von ${name}`;
    const textBody = `
Neue Anfrage für SedoGramm:
------------------------------------------
Name des Betriebs: ${name}
E-Mail-Adresse: ${email}
Telefonnummer: ${phone || "Nicht angegeben"}
Geschätzte Döner/Tag: ${kebabsPerDay || "Nicht angegeben"}
Gewichtsabweichung (g): ${weightOffset || "Nicht angegeben"}

Nachricht:
${message || "Keine Nachricht hinterlassen."}
------------------------------------------
Gesendet an: sedogramm@gmail.com
`;

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 12px; background-color: #fafafa;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; margin-top: 0;">SedoGramm Premium Anfrage</h2>
        
        <p>Ein neuer Betrieb möchte SedoGramm kostenlos testen oder anfragen!</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 20px;">
          <tr style="background-color: #f3f4f6;">
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Parameter</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Wert</th>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Gastro-Betrieb:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">E-Mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone || "Nicht angegeben"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Döner pro Tag:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${kebabsPerDay || "Nicht angegeben"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Gewichtsabweichung:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #dc2626; font-weight: bold;">${weightOffset ? `${weightOffset}g pro Portion` : "Nicht angegeben"}</td>
          </tr>
        </table>
        
        <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h4 style="margin-top: 0; color: #374151;">Nachricht:</h4>
          <p style="white-space: pre-wrap; color: #4b5563; margin-bottom: 0;">${message || "<i>Keine zusätzliche Nachricht angegeben.</i>"}</p>
        </div>
        
        <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          Gesendet über das SedoGramm Anfrageformular. Zieladresse: sedogramm@gmail.com
        </p>
      </div>
    `;

    // Try sending with Nodemailer if SMTP details are defined in environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        console.log(`🔗 Connecting to SMTP: ${SMTP_HOST}:${SMTP_PORT || 587}`);
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT) || 587,
          secure: Number(SMTP_PORT) === 465, // Use true for 465, false for other ports
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"SedoGramm Website" <${SMTP_USER}>`,
          to: "sedogramm@gmail.com",
          replyTo: email,
          subject: subject,
          text: textBody,
          html: htmlBody,
        });

        console.log("✅ E-Mail erfolgreich über SMTP gesendet!");
        res.json({ success: true, method: "smtp" });
        return;
      } catch (err) {
        console.error("❌ Fehler beim SMTP E-Mail-Versand:", err);
        // Fallback to successful response under simulation
        res.json({ 
          success: true, 
          method: "simulation_fallback", 
          error: (err as Error).message,
          message: "E-Mail simuliert, da SMTP fehlgeschlagen ist."
        });
        return;
      }
    } else {
      console.log(`ℹ️ Keine SMTP-Zugangsdaten konfiguriert. E-Mail logged:
      ----------------------------------------
      EMPFÄNGER: sedogramm@gmail.com
      BETREFF: ${subject}
      INHALT:
      ${textBody}
      ----------------------------------------`);
      
      res.json({ 
        success: true, 
        method: "simulation", 
        message: "E-Mail simuliert, da keine SMTP-Daten in .env vorhanden sind." 
      });
      return;
    }
  });

  // Serve static UI assets based on environment
  if (process.env.NODE_ENV !== "production") {
    console.log("🚀 Starting in DEVELOPMENT mode with Vite Middleware");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("⭐ Starting in PRODUCTION mode with compiled assets");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌍 SedoGramm Backend running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("💥 Server failed to start:", err);
});
