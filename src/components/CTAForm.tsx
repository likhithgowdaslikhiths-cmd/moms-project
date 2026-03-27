import { useState } from "react";
import { motion } from "framer-motion";
import { ui } from "../styles/tokens";

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    window.open(
      `https://wa.me/919110430696?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="relative bg-[var(--cream)] py-28 overflow-hidden">

      {/* Soft background */}
      <div className="absolute inset-0 bg-warm-gradient opacity-30" />

      <div className={`${ui.container} relative z-10`}>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-lg"
          >

            <p className="text-[var(--gold-dark)] text-sm tracking-wide">
              Begin Your Journey
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-[var(--mocha)] leading-tight">
              You don’t have to do this alone.
            </h2>

            <p className="text-body leading-relaxed">
              The first days of motherhood can feel overwhelming —
              but with the right care, they can also feel calm, supported and beautiful.
            </p>

            <p className="text-body">
              At <strong>Appuge</strong>, we’re here to gently care for you and your baby,
              so you can focus on what truly matters — bonding, healing and resting.
            </p>

            <p className="text-[var(--rose)] font-medium text-lg">
              Book your care today — and feel supported from day one.
            </p>

            {/* Trust note */}
            <p className="text-sm text-muted">
              ✓ Trusted caregivers &nbsp;&nbsp; ✓ Safe & hygienic &nbsp;&nbsp; ✓ Home service
            </p>

          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[24px] p-8 shadow-xl space-y-5"
          >

            <h3 className="font-display text-xl text-[var(--mocha)] mb-2">
              Book Your Care
            </h3>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[var(--rose)] outline-none"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[var(--rose)] outline-none"
            />

            {/* Service */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[var(--rose)] outline-none"
            >
              <option value="">Select Service</option>
              <option>Pre-Pregnancy Care</option>
              <option>Post-Pregnancy Care</option>
              <option>Baby Care</option>
              <option>Mother & Baby Care</option>
              <option>All-in-One Care</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell us your needs (optional)"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[var(--rose)] outline-none"
            />

            {/* CTA */}
            <button
              type="submit"
              className="w-full bg-[var(--rose)] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Book Care Now
            </button>

            {/* Micro trust */}
            <p className="text-xs text-center text-muted">
              We’ll contact you within 15–30 minutes
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}