"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ExternalLink,
  ArrowRight,
  BookOpen,
  X,
  Mail,
  User,
  Globe,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import ParallaxEffect from "@/app/components/ParallaxEffect";
import GlassCard from "@/app/components/GlassCard";

export default function SessionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("training"); // 'training' or 'competency'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("sessions");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Confirmed sessions in the CodeX Session Series.
  // TODO: add the remaining sessions as each speaker is confirmed.
  const trainingSessions = [
    {
      id: 1,
      title:
        "Introduction to Competitive Programming & Time and Space Complexity + Insights from the ICPC Sri Lanka 2025 Champions",
      description:
        "Kickstart your journey into competitive programming, learn to analyze algorithm efficiency through time and space complexity, and hear first-hand insights from the ICPC Sri Lanka 2025 champions.",
      speaker: "Mr. Apiram Rajamohan",
      date: "22-Aug-2026",
      time: "08:00 PM – 10:00 PM",
      topics: [
        "Introduction to Competitive Programming",
        "Time and Space Complexity",
        "ICPC Sri Lanka 2025 Insights",
      ],
      slug: "intro-complexity-icpc-insights",
      type: "training",
    },
    {
      id: 2,
      title: "Recursion & Backtracking",
      description:
        "Tackle problems with recursive solutions and explore the power of backtracking in decision-making scenarios.",
      speaker: "Mr. Rukshan Senanayake",
      date: "12-Sep-2026",
      time: "07:00 PM – 09:00 PM",
      topics: ["Recursion", "Backtracking"],
      slug: "recursion-backtracking",
      type: "training",
    },
  ];

  const REGISTRATION_LINK = "https://forms.gle/ztErfhqc2nXYZ3Px7";
  const WHATSAPP_CHANNEL_LINK =
    "https://whatsapp.com/channel/0029VbB9vyIHbFV7qVYULT41";

  const competencySession = {
    id: 1,
    title: "Competency Building Series",
    description:
      "This series focuses on developing essential soft skills including time management, team management, and strategic planning. Participants will learn how to manage their schedules effectively, coordinate with team members, and plan tasks to achieve goals efficiently - skills essential for success in competitions, projects, and future careers. More sessions in this series will be announced soon.",
    date: "Details Coming Soon",
    slug: "competency-building-series",
    type: "competency",
    skills: ["Time Management", "Team Management", "Strategic Planning"],
  };

  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  const currentSessions =
    activeTab === "training" ? trainingSessions : [competencySession];
  const seriesInfo =
    activeTab === "training"
      ? {
          title: "Technical Training Series",
          subtitle:
            "Expert-led sessions building strong competitive programming foundations, from the basics to advanced algorithms",
          stats: [
            { value: "12", label: "Planned Sessions" },
            { value: "2", label: "Announced So Far" },
            { value: "Online", label: "Expert-Led Sessions" },
          ],
        }
      : {
          title: "Competency Building Series",
          subtitle:
            "Essential soft skills training for competitive programming and career success",
          stats: [
            { value: "TBA", label: "Number of Sessions" },
            { value: "3", label: "Core Skills" },
            { value: "Practical", label: "Hands-on Learning" },
          ],
        };

  return (
    <section
      id="sessions"
      className="py-24 bg-darkBlue-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern absolute inset-0"></div>
      </div>

      {/* Floating book symbols - all blue */}
      <div className="absolute top-20 left-10 text-blue-500 opacity-20 animate-bounce-slow">
        <BookOpen size={32} />
      </div>
      <div
        className="absolute bottom-20 right-10 text-blue-500 opacity-20 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <Users size={32} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30 mb-4 inline-block">
            TRAINING
          </span>

          {/* Updated Header with CodeX Text Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
            <Image
              src="/images/codex-text.png"
              alt="CodeX"
              width={160}
              height={45}
              className="drop-shadow-lg blue-glow-text"
              style={{
                filter: "drop-shadow(0 0 10px rgba(30, 58, 138, 0.5))",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold blue-glow-text">
              Session Series
            </h2>
          </div>

          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

          {/* Series Toggle Tabs - all blue theme */}
          <div className="mb-8">
            <div className="inline-flex p-1 bg-darkBlue-800 bg-opacity-60 rounded-lg">
              <button
                onClick={() => setActiveTab("training")}
                className={`flex items-center px-6 py-3 rounded-md transition-all text-sm font-medium ${
                  activeTab === "training"
                    ? "bg-blue-600 bg-opacity-30 text-blue-300 border border-blue-500 border-opacity-40"
                    : "text-gray-300 hover:text-blue-300 hover:bg-darkBlue-700"
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Technical Training
                <span className="ml-2 text-xs bg-darkBlue-700 px-2 py-0.5 rounded-full">
                  12 Sessions
                </span>
              </button>
              <button
                onClick={() => setActiveTab("competency")}
                className={`flex items-center px-6 py-3 rounded-md transition-all text-sm font-medium ${
                  activeTab === "competency"
                    ? "bg-blue-600 bg-opacity-30 text-blue-300 border border-blue-500 border-opacity-40"
                    : "text-gray-300 hover:text-blue-300 hover:bg-darkBlue-700"
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Competency Building
                <span className="ml-2 text-xs bg-darkBlue-700 px-2 py-0.5 rounded-full">
                  TBA
                </span>
              </button>
            </div>
          </div>

          <p className="text-lg text-gray-300">{seriesInfo.subtitle}</p>

          {/* Register Now - primary call to action for the session series */}
          <div className="mt-8">
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all border border-blue-500 group blue-glow-subtle hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Register Now
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Sessions Grid */}
        <div
          className={`grid ${activeTab === "competency" ? "lg:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 lg:gap-8`}
        >
          {currentSessions.map((session, index) => (
            <div
              key={session.id}
              className={`transition-all duration-1000 delay-${200 + index * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <ParallaxEffect speed={0.03} direction="vertical">
                <GlassCard
                  className="p-6 h-full flex flex-col cursor-pointer group transition-colors duration-300"
                  hoverEffect="premium-lift"
                  glowIntensity="medium"
                  borderStyle="solid"
                  onClick={() => handleSessionClick(session)}
                >
                  {/* Top Header Row */}
                  <div className="flex justify-between items-center mb-5 pb-4 border-b border-blue-500/10 group-hover:border-blue-400/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-900/40 flex items-center justify-center border border-blue-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                        <span className="text-blue-300 font-bold text-sm">
                          {activeTab === "training"
                            ? `S${session.id}`
                            : session.id}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {activeTab === "training" ? "Training" : "Soft Skills"}
                      </span>
                    </div>
                    <div className="text-blue-400/50 group-hover:text-cyan-300 transition-colors">
                      {activeTab === "training" ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <Users className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors leading-tight">
                    {session.title}
                  </h3>
                  <p className="text-gray-400 mb-5 text-sm leading-relaxed flex-grow">
                    {session.description}
                  </p>

                  {/* Topics covered */}
                  {session.topics && (
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {session.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="text-[11px] font-medium bg-[#0f172a] text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/20 group-hover:border-blue-400/40 transition-colors"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills badges */}
                  {session.skills && (
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {session.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-[11px] font-medium bg-[#0f172a] text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/20 group-hover:border-blue-400/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Speaker */}
                  {session.speaker && (
                    <div className="mb-5 flex items-center text-sm text-gray-300">
                      <User className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{session.speaker}</span>
                    </div>
                  )}

                  {/* Footer details */}
                  <div className="mt-auto pt-4 border-t border-blue-500/10 group-hover:border-blue-400/30 transition-colors flex items-center justify-between">
                    <div className="flex flex-col text-gray-400 group-hover:text-blue-300 transition-colors">
                      <span className="flex items-center text-xs font-medium">
                        <Calendar className="h-4 w-4 mr-2" />
                        {session.date}
                      </span>
                      {session.time && (
                        <span className="flex items-center text-xs font-medium mt-1">
                          <Clock className="h-4 w-4 mr-2" />
                          {session.time}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-blue-400 group-hover:text-cyan-300 transition-colors text-xs font-semibold">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </ParallaxEffect>
            </div>
          ))}
        </div>

        {/* More sessions notice + WhatsApp channel QR */}
        {activeTab === "training" && (
          <div
            className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <GlassCard className="p-8 rounded-xl max-w-3xl mx-auto text-center">
              <p className="text-gray-400 text-sm mb-6">
                More sessions will be announced as each speaker is confirmed.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-6">
                Follow our WhatsApp channel and stay tuned for the latest
                updates!
              </h3>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={WHATSAPP_CHANNEL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-xl border border-blue-500 border-opacity-30 blue-glow-subtle hover:scale-105 transition-transform"
                  aria-label="Open the CodeX Sri Lanka WhatsApp channel"
                >
                  <Image
                    src="/images/whatsapp-channel-qr.png"
                    alt="QR code linking to the IEEE CodeX Sri Lanka WhatsApp channel"
                    width={180}
                    height={180}
                    className="w-[180px] h-[180px]"
                  />
                </a>
                <a
                  href={WHATSAPP_CHANNEL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Scan the QR code or tap here to join
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Series Overview - blue theme */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <GlassCard className="p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              About the {seriesInfo.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {activeTab === "training"
                ? "This session series is designed to take you from the basics of competitive programming to advanced algorithmic concepts. Sessions are held online and led by experienced competitive programmers, giving you a structured learning path that prepares you for national and international programming competitions. Sessions are announced as each speaker is confirmed."
                : "This specialized series focuses on developing essential soft skills that complement technical abilities. Learn to manage time effectively, lead teams successfully, and plan strategically - skills that are crucial for competitive programming success and professional career advancement. Additional sessions in this series will be announced soon."}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              {seriesInfo.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Prominent Join Sessions Button */}
            {activeTab === "training" && (
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-50 rounded-xl p-6 border border-blue-500 border-opacity-40 blue-glow-subtle">
                <h4 className="text-xl font-bold text-blue-300 mb-3">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-gray-300 mb-6">
                  Register once to join every session in the series and master
                  competitive programming
                </p>
                <a
                  href={REGISTRATION_LINK}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all border border-blue-500 group blue-glow-subtle hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Join Session Series
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-blue-300 text-sm mt-4">
                  Register now to secure your spot and get all session details
                </p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>

      {/* Session Registration Modal */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-darkBlue-900 rounded-2xl border border-blue-500 border-opacity-30 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Header - blue theme */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-900 bg-opacity-70 flex items-center justify-center mr-4 blue-glow-subtle">
                      <span className="text-blue-400 font-bold text-lg">
                        {selectedSession.type === "training"
                          ? `S${selectedSession.id}`
                          : selectedSession.id}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {selectedSession.title}
                      </h3>
                      <p className="text-blue-300 text-sm mt-1">
                        {selectedSession.type === "training"
                          ? `Session ${selectedSession.id}`
                          : "Competency Series"}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-darkBlue-800 rounded-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Date Badge - blue theme */}
              <div className="flex items-center mb-6 bg-blue-900 bg-opacity-30 rounded-lg p-3 border border-blue-500 border-opacity-30">
                <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-blue-300 font-medium">
                  {selectedSession.date}
                </span>
              </div>

              {/* Topics covered (for training sessions) - blue theme */}
              {selectedSession.topics && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSession.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="text-sm bg-blue-900 bg-opacity-30 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills (for competency session) - blue theme */}
              {selectedSession.skills && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-blue-400" />
                    Core Skills Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSession.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm bg-blue-900 bg-opacity-30 text-blue-300 px-3 py-1 rounded-full border border-blue-500 border-opacity-30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  {selectedSession.type === "training" ? (
                    <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                  ) : (
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                  )}
                  About This Session
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedSession.description}
                </p>
              </div>

              {/* Session Details */}
              <div className="bg-darkBlue-800 bg-opacity-50 rounded-xl p-5 mb-6 border border-blue-900 border-opacity-30">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Session Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Speaker:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                      {selectedSession.speaker || "TBA"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Schedule:</span>
                    </div>
                    <span className="text-blue-300 font-medium">
                      {selectedSession.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Time:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                      {selectedSession.time || "TBA"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-gray-400">Meeting Link:</span>
                    </div>
                    <span className="text-blue-300 font-medium bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                      TBA
                    </span>
                  </div>
                </div>
              </div>

              {/* Join Sessions Button */}
              <div className="mb-6">
                <a
                  href={REGISTRATION_LINK}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all flex items-center justify-center border border-blue-500 group blue-glow-subtle"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Join Session Series
                </a>
                <p className="text-blue-300 text-sm text-center mt-2">
                  Click to register and get all session details
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-30 rounded-xl p-5 border border-blue-500 border-opacity-30">
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="text-blue-300 font-semibold">
                    Need More Information?
                  </h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about this session?
                  Contact our team for detailed information and updates.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:thamindusri@ieee.org"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70"
                  >
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">
                      thamindusri@ieee.org
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="mailto:dineth@ieee.org"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group bg-darkBlue-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70"
                  >
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm group-hover:underline">
                      dineth@ieee.org
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom styles - only blue glow */}
      <style jsx>{`
        .blue-glow-subtle {
          box-shadow: 0 0 10px rgba(30, 58, 138, 0.3);
        }
      `}</style>
    </section>
  );
}
