import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-10 font-sans">
      <section className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-6xl font-extrabold leading-tight">Azeem Aslam</h1>
            <p className="text-2xl text-sky-300 mt-2">Computer Vision & Deep Learning Engineer</p>
            <div className="flex gap-4 mt-4 text-sky-400">
              <a href="https://github.com/azeem" target="_blank"><Github /></a>
              <a href="https://linkedin.com/in/azeem" target="_blank"><Linkedin /></a>
              <a href="mailto:azeem.aslam91@yahoo.com"><Mail /></a>
              <a href="/resume/Azeem_Aslam_CV.pdf" download className="flex items-center gap-1">
                <Download size={18} /> <span className="underline">Download CV</span>
              </a>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="Azeem Aslam"
              width={160}
              height={160}
              className="rounded-full ring-4 ring-sky-400 shadow-xl"
            />
          </motion.div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "YOLOv8 Vehicle Classification",
                desc: "Real-time vehicle detection using YOLOv8.",
              },
              {
                title: "Brain Tumor Detection",
                desc: "Medical imaging analysis using YOLOv9.",
              },
              {
                title: "3D Printing Defect Detection",
                desc: "Anomaly detection in additive manufacturing.",
              },
              {
                title: "Face Recognition Attendance System",
                desc: "Attendance automation with OpenCV & Dlib.",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-sky-500/40"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <button className="bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded-full font-semibold transition-all">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Collaborate</h2>
          <form className="grid gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Your Name" className="bg-gray-700 rounded px-4 py-3 placeholder-gray-400" required />
            <input type="email" placeholder="Your Email" className="bg-gray-700 rounded px-4 py-3 placeholder-gray-400" required />
            <textarea placeholder="Your Message" rows="5" className="bg-gray-700 rounded px-4 py-3 placeholder-gray-400" required></textarea>
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full text-white font-semibold">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-10">
          © {new Date().getFullYear()} Azeem Aslam. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
