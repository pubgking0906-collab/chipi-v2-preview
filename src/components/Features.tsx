"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CreditCard, 
  ArrowRightLeft, 
  Wallet, 
  Shield, 
  Globe,
  Building2,
  TrendingUp,
  Lock,
  Users,
  Coins,
  FileCheck,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "IBAN Accounts",
    description: "Personal & business accounts with dedicated IBAN for seamless banking integration.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ArrowRightLeft,
    title: "Crypto to Fiat",
    description: "Instant conversion between crypto and traditional currencies with competitive rates.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Asset Management",
    description: "Professional portfolio management and investment solutions for your digital and traditional assets.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Operate worldwide with multi-currency support and international payment networks.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-50 to-transparent opacity-50" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
              Platform Features
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Bridge Crypto & Finance</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[var(--muted)] leading-relaxed"
          >
            A complete suite of banking and crypto services designed for businesses,
            institutions, and high-net-worth individuals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <div className="group h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={26} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-3 transition-all">
            View Full API Documentation
            <ArrowRightLeft size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
