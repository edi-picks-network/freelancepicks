"use client";

import { useState } from "react";
import { Leaf, MapPin, Clock, Send, Mail, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5 border border-border-soft bg-leaf-subtle/50 text-leaf">
            <Leaf className="w-3.5 h-3.5" />
            Let&apos;s Find Your Platform Fit
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Whether you&apos;re curious about our process, ready to book a session,
            or just want to say hi — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          <div className="lg:col-span-2">
            <div className="card-story-compact p-8">
              <h2 className="text-xl font-bold text-text-primary mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-leaf-subtle border border-leaf-lighter/40 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-leaf-subtle flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-7 h-7 text-leaf" />
                  </div>
                  <p className="text-text-primary font-semibold text-lg mb-1">Message Received!</p>
                  <p className="text-text-muted text-sm">
                    Thanks for reaching out. We typically respond within 24 hours during business days.
                    In the meantime, feel free to browse our research on the blog.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-warm-card border border-border-soft rounded-xl text-text-primary placeholder:text-text-muted focus:border-leaf focus:ring-1 focus:ring-leaf/20 focus:outline-none transition-all"
                        placeholder="Alex Rivera"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-warm-card border border-border-soft rounded-xl text-text-primary placeholder:text-text-muted focus:border-leaf focus:ring-1 focus:ring-leaf/20 focus:outline-none transition-all"
                        placeholder="alex@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      Which platforms are you currently using?
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-warm-card border border-border-soft rounded-xl text-text-primary focus:border-leaf focus:ring-1 focus:ring-leaf/20 focus:outline-none transition-all"
                    >
                      <option value="">Select your main platform...</option>
                      <option value="upwork">Upwork</option>
                      <option value="fiverr">Fiverr</option>
                      <option value="toptal">Toptal</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="multiple">Multiple platforms</option>
                      <option value="none">Not on any yet</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      Tell us about your situation
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-card border border-border-soft rounded-xl text-text-primary placeholder:text-text-muted focus:border-leaf focus:ring-1 focus:ring-leaf/20 focus:outline-none transition-all resize-none"
                      placeholder="I've been on Upwork for 6 months but only made $2,000. I'm a React developer and I think I might be on the wrong platform..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-story-compact p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-leaf" />
                Email Us
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-text-muted">General Inquiries</p>
                  <a href="mailto:hello@leafconsulting.io" className="text-sm text-leaf hover:underline font-medium">
                    hello@leafconsulting.io
                  </a>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Book a Session</p>
                  <a href="mailto:sessions@leafconsulting.io" className="text-sm text-leaf hover:underline font-medium">
                    sessions@leafconsulting.io
                  </a>
                </div>
              </div>
            </div>

            <div className="card-story-compact p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-leaf" />
                Studio
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                LoDo District
                <br />
                Denver, CO 80202
                <br />
                United States
              </p>
              <p className="text-xs text-text-muted mt-2">
                Remote-first team. In-person sessions available for Denver locals.
              </p>
            </div>

            <div className="card-story-compact p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-leaf" />
                Quick Start
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Ready to jump in? Book a free 15-minute discovery call and we&apos;ll help you figure out
                your next move.
              </p>
              <Link
                href="/"
                className="text-sm text-leaf font-medium hover:underline flex items-center gap-1"
              >
                Learn about our process <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="card-story-compact p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-leaf" />
                Response Time
              </h3>
              <p className="text-sm text-text-secondary">
                We typically respond within <strong className="text-text-primary">24 hours</strong> on
                business days. Discovery calls are usually scheduled within the same week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
