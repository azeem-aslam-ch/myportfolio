import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Azeem Aslam</h1>
        <p className="text-lg text-gray-600">Computer Vision & Deep Learning Engineer</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/azeem" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/azeem" target="_blank"><Linkedin /></a>
          <a href="mailto:azeem.aslam91@yahoo.com"><Mail /></a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Python', 'OpenCV', 'PyTorch', 'YOLOv8/v9', 'TensorFlow', 'Streamlit', 'Flask', 'Git', 'Google Colab'].map(skill => (
            <span key={skill} className="bg-white px-4 py-2 rounded-full shadow text-sm">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">YOLOv8 Vehicle Classification</h2>
            <p className="text-sm text-gray-500 mt-2">A custom-trained YOLOv8 model to detect and classify vehicles in real-time traffic footage.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Brain Tumor Detection</h2>
            <p className="text-sm text-gray-500 mt-2">Medical image analysis using deep learning (YOLOv9) to localize and classify brain tumors from MRI scans.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">3D Printing Defect Detection</h2>
            <p className="text-sm text-gray-500 mt-2">Industrial application using object detection to identify printing anomalies like stringing and warping.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Face Recognition Attendance System</h2>
            <p className="text-sm text-gray-500 mt-2">Real-time face recognition system for automated attendance marking using Dlib and OpenCV.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm italic">"Azeem delivered exceptional work on our object detection project—precise, professional, and on time!"</p>
              <p className="text-sm font-semibold mt-2">— Client, Upwork</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm italic">"Incredible results on our brain imaging model. Highly recommend Azeem for any AI-based solution!"</p>
              <p className="text-sm font-semibold mt-2">— Client, Fiverr</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Download My Resume</h2>
        <a href="/resume/Azeem_Aslam_CV.pdf" download>
          <Button className="mx-auto flex items-center space-x-2">
            <Download size={16} />
            <span>Download Resume</span>
          </Button>
        </a>
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © 2025 Azeem Aslam. All rights reserved.
      </footer>
    </div>
  );
}