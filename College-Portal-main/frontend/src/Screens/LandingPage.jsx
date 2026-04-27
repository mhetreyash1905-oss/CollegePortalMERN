import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaUserShield, 
  FaBookOpen,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaMobile,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../Context/ThemeContext";
import LetterGlitch from "../components/LetterGlitch";
import CardSwap, { Card } from "../components/CardSwap";

const LandingPage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Student Portal",
      description: "Access assignments, grades, timetables, and course materials all in one place.",
      color: "bg-primary-600"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Faculty Management",
      description: "Streamline teaching with grade management, attendance tracking, and resource sharing.",
      color: "bg-secondary-600"
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Admin Control",
      description: "Complete oversight with user management, analytics, and system configuration.",
      color: "bg-primary-500"
    },
    {
      icon: <FaBookOpen className="text-4xl" />,
      title: "Digital Library",
      description: "Comprehensive resource library with study materials and reference documents.",
      color: "bg-secondary-500"
    },
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "Smart Scheduling",
      description: "Automated timetable generation and conflict-free schedule management.",
      color: "bg-primary-700"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into performance metrics and attendance patterns.",
      color: "bg-secondary-700"
    }
  ];

  const benefits = [
    { icon: <FaRocket />, text: "Lightning Fast Performance" },
    { icon: <FaShieldAlt />, text: "Enterprise-Grade Security" },
    { icon: <FaMobile />, text: "Fully Responsive Design" },
    { icon: <FaUsers />, text: "Multi-User Support" }
  ];

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "500+", label: "Faculty Members" },
    { number: "50+", label: "Departments" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-dark-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-800/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <MdSchool className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">College Portal</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 rounded-xl transition-all duration-300 border border-gray-300 dark:border-dark-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Matrix-Style Glitch Background - Extended */}
        <div className="absolute inset-0 overflow-hidden" style={{ height: '150%' }}>
          <LetterGlitch 
            glitchColors={['#1e3a8a', '#3b82f6', '#06b6d4', '#0891b2']}
            glitchSpeed={30}
            smooth={true}
            outerVignette={true}
            centerVignette={false}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/40 to-dark-900/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10 mt-10 md:mt-0">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-xs md:text-sm font-semibold backdrop-blur-sm">
                🎓 Modern Education Management System
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
              <span className="text-primary-300">Transform Your</span>
              <br />
              <span className="text-white">Educational Institution</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
              Streamline operations, enhance collaboration, and empower learning with our comprehensive college management platform. Built for the modern era.
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-col sm:flex-row px-4">
              <button
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2"
              >
                Start Free Trial
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800/30 backdrop-blur-md border border-primary-500/20 rounded-2xl p-4 md:p-6 text-center hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:bg-white dark:bg-dark-800/50"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 pb-20 md:pb-28 bg-white dark:bg-dark-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Powerful Features</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Everything you need to manage your institution efficiently and effectively. Our comprehensive platform brings together all essential tools in one place.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Comprehensive Management</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Handle students, faculty, and admin operations seamlessly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-Time Updates</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Stay informed with instant notifications and live data</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Advanced Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Make data-driven decisions with powerful insights</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="mt-8 px-6 py-3.5 md:px-8 md:py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-base md:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
              >
                Explore Features
                <FaArrowRight />
              </button>
            </div>

          {/* Right Section - Card Swap */}
            <div className="flex justify-center relative z-10 w-full mt-10 md:mt-0">
              <CardSwap
                width={windowWidth < 768 ? 300 : 400}
                height={windowWidth < 768 ? 400 : 500}
                cardDistance={windowWidth < 768 ? 15 : 30}
                verticalDistance={windowWidth < 768 ? 20 : 40}
                delay={3500}
                pauseOnHover={true}
                skewAmount={0}
                easing="power"
              >
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-300 shadow-2xl"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${feature.color} text-white rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-100/50 dark:bg-primary-900/10 border border-primary-500/20 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Why Choose Us?</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  Built with cutting-edge technology and designed with users in mind, our platform delivers unmatched performance and reliability.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-900 dark:text-white font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real-Time Collaboration</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Seamless communication between students, faculty, and administrators</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Analytics</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Comprehensive insights and reports to drive better decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-green-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Dedicated support team ready to help you anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-primary-100/30 dark:bg-primary-900/10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Ready to Get Started?</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of institutions already using our platform to revolutionize education management
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-xl font-semibold text-lg text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up Now
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 border border-gray-300 dark:border-dark-600 hover:border-primary-500/50 rounded-xl font-semibold text-lg text-gray-700 dark:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-dark-700 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                  <MdSchool className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold gradient-text">College Portal</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Modern education management platform for the digital age
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Product</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li><a href="/login" className="hover:text-primary-400 transition-colors">About Us</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Careers</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                <li><a href="/login" className="hover:text-primary-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-dark-700 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; 2025 College Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
