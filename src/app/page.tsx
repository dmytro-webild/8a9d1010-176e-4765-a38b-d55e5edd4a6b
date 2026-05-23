"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { BookOpen, Lightbulb, ShieldCheck, BarChart3, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Dashboard", id: "dashboard" },
              { name: "About", id: "about" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="ADG Trading Center"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Learn Trading the Right Way"
            description="Start your trading journey with ADG Trading Center. Learn, practice, and grow with professional guidance and funded-style demo accounts."
            buttons={[{ text: "Start Trading", href: "#pricing" }, { text: "View Demo Accounts", href: "#pricing" }]}
            imageSrc="http://img.b2bpic.net/free-photo/trading-stock-stock-market-business-graph-trading-investment-broker-stock-exchange-market_169016-66723.jpg"
            showDimOverlay={true}
          />
        </div>

        <div id="dashboard" data-section="dashboard">
            <MetricCardOne
                title="Live Market Dashboard"
                description="Track performance metrics and real-time market data with interactive visual components."
                textboxLayout="split"
                gridVariant="bento-grid"
                animationType="blur-reveal"
                useInvertedBackground={true}
                metrics={[
                    { id: "pnl", title: "Portfolio PnL", value: "+$12,450", description: "Real-time trade performance", icon: BarChart3 },
                    { id: "vol", title: "Market Volatility", value: "14.2%", description: "Current market sentiment", icon: TrendingUp },
                    { id: "active", title: "Active Trades", value: "3", description: "Currently running positions", icon: Zap }
                ]}
            />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={true}
            title="Commitment to Excellence"
            description="ADG Trading Center provides a structured environment for aspiring traders to refine their skills."
            bulletPoints={[
              { title: "Expert Education", description: "Master market mechanics and analysis." },
              { title: "Risk Focus", description: "Learn to preserve capital with discipline." },
              { title: "Guided Growth", description: "Mentorship programs for serious traders." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/startup-team-review-financial-reports-performance-metrics-laptop_482257-90887.jpg"
          />
        </div>

        <div id="education" data-section="education">
          <FeatureCardTwentyNine
            animationType="slide-up"
            gridVariant="asymmetric-60-wide-40-narrow"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Advanced Trading Tools"
            description="Explore our analytical tools designed to give you an edge in the markets."
            features={[
              { title: "Chart Analytics", description: "Professional tools for technical analysis.", imageSrc: "http://img.b2bpic.net/free-photo/charts-finance-text-white-background_23-2148305954.jpg", titleImageSrc: "", buttonText: "Learn More" },
              { title: "Risk Management", description: "Advanced equity protection protocols.", imageSrc: "http://img.b2bpic.net/free-vector/pack-golden-shields-flat-design_23-2147611013.jpg", titleImageSrc: "", buttonText: "Learn More" }
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardNine
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Demo Account Plans"
            description="Choose the account size that fits your learning journey."
            plans={[
              { id: "p1", title: "Starter", price: "$25", period: "one-time", features: ["Access to dashboard", "Market reports"], button: { text: "Buy Now", href: "#contact" } },
              { id: "p2", title: "Professional", price: "$65", period: "one-time", features: ["Full access", "Advanced course", "Priority support"], button: { text: "Buy Now", href: "#contact" } }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Mark D.", role: "Full-time Trader", company: "Student", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/hispanic-man-working-office-night-smiling-cheerful-showing-pointing-with-fingers-teeth-mouth-dental-health-concept_839833-28090.jpg" }
            ]}
            kpiItems={[
              { value: "4.9/5", label: "Average Rating" },
              { value: "1.2k", label: "Active Traders" },
              { value: "98%", label: "Learner Satisfaction" }
            ]}
            title="Student Success Stories"
            description="What our students say about the ADG experience."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "Is trading risky?", content: "Yes, trading involves significant risk of loss." },
              { id: "f2", title: "How do I sign up?", content: "Fill out the contact form below." }
            ]}
            title="Frequently Asked Questions"
            description="Common questions regarding our education and demo accounts."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            tag="Contact Us"
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            title="Start Your Journey Today"
            description="Submit your request to create a demo account."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="ADG Trading Center"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "#hero" }, { label: "Dashboard", href: "#dashboard" }] },
              { title: "Connect", items: [{ label: "Discord", href: "#" }] }
            ]}
            copyrightText="© 2026 ADG Trading Center. All Rights Reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
