import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">Azeem Aslam</h1>
            <p className="text-xl text-gray-300">Computer Vision & Deep Learning Engineer</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/azeem" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="https://linkedin.com/in/azeem" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="mailto:azeem.aslam91@yahoo.com"><Mail /></a>
              <a href="/resume/Azeem_Aslam_CV.pdf" download className="flex items-center space-x-1 text-sm text-sky-400">
                <Download size={16} /> <span>Download CV</span>
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/profile.jpg"
              alt="Azeem Aslam"
              width={160}
              height={160}
              className="rounded-full border-4 border-gray-600 shadow-lg"
            />
          </div>
        </header>

        {/* Projects */}
        <section className="grid gap-6 md:grid-cols-2">
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
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded text-white">
                View Project
              </button>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-16">
          © {new Date().getFullYear()} Azeem Aslam. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
