import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const SEND_EMAIL_URL = "https://gpnswtaqwqraeujxadit.supabase.co/functions/v1/send-email";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Get in touch with us for your advertising needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">ANIL V. SORATHIYA</h3>
                <p className="text-muted-foreground font-body">+91 99097 09700</p>
                <p className="text-muted-foreground font-body">+91 99097 07270 (Office)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground font-body">omadsprint@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground font-body">
                  Shop No. 119, Ground Floor,<br />
                  Parishram Complex, Station Road,<br />
                  Bhuj-Gujarat. 370001.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-card-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-card-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-card-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-card-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            {status === "success" && (
              <p className="text-green-600 font-body text-sm">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-body text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-primary-foreground py-3 rounded-md font-heading font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
