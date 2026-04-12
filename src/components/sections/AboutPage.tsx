import Image from "next/image";
import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  Settings,
  Sprout,
  Award,
  FileCheck,
  UserCheck,
  FileText,
  Clock,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden text-[#181d25]">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative w-full h-[420px]">
        <Image
          src="/assets/about_hero.jpg"
          alt="Industrial warehouse with forklifts"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-semibold tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* ── B2B Rental Marketplace Section ──────────────────── */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3.5 h-3.5 bg-[#ffd371] rounded-sm shrink-0" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#333d4c]">
              About Us
            </span>
          </div>

          {/* Heading + Circular badge */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-14 gap-8">
            <h2 className="text-4xl md:text-[44px] lg:text-[52px] font-bold leading-[1.15] max-w-2xl">
              B2B Rental Marketplace
              <br />
              for EaaS
            </h2>

            {/* Rotating circular badge */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 md:-mt-4">
              <style>{`
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .badge-spin { animation: spin-slow 14s linear infinite; }
              `}</style>
              <svg viewBox="0 0 120 120" className="w-full h-full badge-spin">
                <defs>
                  <path
                    id="cp"
                    d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  />
                </defs>
                <text
                  fontSize="9.5"
                  fill="#181d25"
                  letterSpacing="3.5"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  <textPath href="#cp">
                    RELIABILITY · INNOVATION · SUSTAINABILITY ·
                  </textPath>
                </text>
              </svg>
              {/* Center Arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shrink-0">
              <Image
                src="/assets/about_warehouse.png"
                alt="Warehouse"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-[#ffd371] rounded-sm" />
                  <h3 className="text-2xl font-bold">Mission</h3>
                </div>
                <p className="text-[#6c727f] leading-[1.8] text-[15px]">
                  To simplify and transform industrial equipment access by
                  offering reliable rentals, seamless fleet partnerships, and
                  technology-driven solutions that empower businesses to scale
                  efficiently while reducing ownership costs.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-[#ffd371] rounded-sm" />
                  <h3 className="text-2xl font-bold">Vision</h3>
                </div>
                <p className="text-[#6c727f] leading-[1.8] text-[15px]">
                  To be India&apos;s most trusted B2B rental ecosystem,
                  connecting equipment owners, OEMs, and businesses across
                  industries — delivering operational excellence, financial
                  flexibility, and sustainable growth through innovation in
                  rentals and fleet management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values Section ─────────────────────────────── */}
      <section className="bg-white py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] gap-12 lg:gap-20 items-start">
            {/* Left Image */}
            <div className="relative aspect-[4/4.8] w-full overflow-hidden">
              <Image
                src="/assets/target.png"
                alt="Core Values"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>

            {/* Right Core Values Text */}
            <div className="md:pt-4">
              <h2 className="text-3xl md:text-[40px] font-bold mb-10 md:mb-14">
                Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {[
                  {
                    title: "Reliability",
                    icon: ShieldCheck,
                    desc: "We ensure equipment uptime and dependable service, so businesses can operate without disruption",
                  },
                  {
                    title: "Partnership",
                    icon: Handshake,
                    desc: "We grow together with equipment owners, OEMs, and customers by building transparent and fair relationships",
                  },
                  {
                    title: "Innovation",
                    icon: Lightbulb,
                    desc: "We leverage technology to create smarter rental solutions, improving efficiency and accessibility",
                  },
                  {
                    title: "Integrity",
                    icon: Settings,
                    desc: "We are committed to ethical business practices, clear pricing, and honest dealings with all stakeholders",
                  },
                  {
                    title: "Sustainability",
                    icon: Sprout,
                    desc: "By promoting rentals over ownership, we help optimize asset utilization and reduce environmental footprint",
                  },
                  {
                    title: "Customer Success",
                    icon: Award,
                    desc: "Our success is defined by the productivity, profitability, and growth of the businesses we serve",
                  },
                ].map((val, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <val.icon strokeWidth={1.25} size={32} className="text-[#181d25] mb-1" />
                    <h3 className="text-lg font-bold">{val.title}</h3>
                    <p className="text-[13px] md:text-[14px] text-[#6c727f] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Message from Founder & CEO ──────────────────────── */}
      <section className="bg-[#fcfaf4] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-12 lg:gap-24 items-start">
            {/* Left */}
            <div className="relative">
              <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] text-[#111] max-w-sm mb-12">
                Message from
                <br />
                the Founder &
                <br />
                CEO
              </h2>

              {/* Dashed trail & Paperplane */}
              <div className="relative h-32 w-full max-w-[280px]">
                {/* SVG dashed trail */}
                <svg
                  viewBox="0 0 200 100"
                  className="absolute left-0 top-0 w-[180px] h-[100px]"
                >
                  <path
                    d="M10,10 C10,90 80,110 120,60 C140,30 160,50 160,80"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                </svg>
                {/* Yellow paper plane */}
                <div className="absolute right-6 bottom-0 rotate-[15deg]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="#ffd371"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9266 2.07328C22.2513 2.15822 22.4839 2.42875 22.5283 2.7634C22.5727 3.09805 22.42 3.42551 22.1384 3.60195L9.63841 11.4144L14.7061 21.0406C14.8559 21.3253 15.1528 21.4988 15.4746 21.4883C15.7964 21.4779 16.08 21.2858 16.2081 20.9904L22.9515 5.42444L18.7302 7.25304L21.9266 2.07328Z"
                      fill="#ffd371"
                    />
                    <path
                      d="M2.20305 10.638L9.63821 11.4143L22.1382 3.60181L2.83618 9.94065C2.52227 10.0437 2.3168 10.3341 2.31295 10.6622C2.30909 10.9904 2.50743 11.2859 2.8188 11.3965L9.63821 11.4143H2.20305V10.638Z"
                      fill="#ffe299"
                    />
                    <path
                      d="M21.9265 2.07343L1.93603 9.42169C1.464 9.59524 1.15546 10.0381 1.15277 10.54C1.15008 11.0418 1.45347 11.4878 1.92318 11.6668L9.20822 14.4443"
                      stroke="#ffd371"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.20822 14.4443L15.3374 21.196C15.6599 21.5512 16.143 21.6845 16.5925 21.5422C17.0421 21.3999 17.3789 21.0084 17.4682 20.5255L21.9265 2.07343"
                      stroke="#ffd371"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.20822 14.4443L12.3853 10.2785"
                      stroke="#e6b12d"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right text */}
            <div className="pt-2 text-[14px] md:text-[15px] text-[#4d5666] leading-[1.85] flex flex-col gap-6">
              <p>
                At B2BRentals.in, we believe businesses should focus on growth,
                not heavy investments in equipment. With over a decade of
                experience in the material handling and aggregator space, we
                understand the challenges SMEs face in accessing reliable,
                cost-effective equipment. Our mission is to create a trusted
                rental ecosystem that provides high-quality, well-maintained
                equipment without large upfront costs, while offering equipment
                owners new revenue opportunities. Safety, reliability, and
                transparency are at the core of our service, with every machine
                inspected and maintained to OEM standards. Our platform empowers
                businesses to scale faster and smarter, with a focus on safety,
                uptime, and fair pricing.
              </p>
              <p>
                Thank you for trusting us to be a part of your journey.
                Together, let&apos;s redefine the future of industrial rentals.
              </p>
              <div className="mt-4">
                <p className="italic text-[#181d25] mb-1 font-medium">
                  Founder & CEO
                </p>
                <p className="italic text-[#6c727f]">B2B Rental Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSR Section ─────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
              <Image
                src="/assets/earth.png"
                alt="Corporate Social Responsibility"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3.5 h-3.5 bg-[#ffd371] rounded-sm shrink-0" />
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#333d4c]">
                  CSR
                </span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#111] mb-6 leading-tight">
                Corporate Social Responsibility
              </h2>
              <p className="text-[14px] text-[#4d5666] leading-[1.8] mb-8">
                At B2B Rentals, we believe growth must be inclusive,
                sustainable, and responsible. Beyond simplifying industrial
                rentals, we are committed to:
              </p>
              <div className="flex flex-col gap-6">
                {[
                  "Empowering local youth through equipment operator training programs",
                  "Promoting safe workplaces with awareness sessions on handling material-handling equipment",
                  "Supporting sustainability by encouraging adoption of electric and eco-friendly rentals",
                  "Engaging with communities near our operations to create jobs and opportunities",
                  "Ensuring inclusive participation by extending skill development to underprivileged groups",
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-[14px] text-[#4d5666] leading-[1.6]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESG Section ─────────────────────────────────────── */}
      <section className="bg-white pb-20 lg:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_45%] gap-12 lg:gap-20 items-center">
            {/* Left Text */}
            <div className="order-2 md:order-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3.5 h-3.5 bg-[#ffd371] rounded-sm shrink-0" />
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#333d4c]">
                  ESG
                </span>
              </div>
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#111] mb-6 leading-tight">
                Our ESG Commitment
              </h2>
              <p className="text-[14px] text-[#4d5666] leading-[1.8] mb-8">
                At B2B Rentals, sustainability and responsibility are at the
                core of how we operate.
              </p>
              <div className="flex flex-col gap-7">
                <p className="text-[14px] text-[#4d5666] leading-[1.8]">
                  <strong className="text-[#181d25] block mb-1">
                    Environmental:
                  </strong>
                  We promote eco-friendly equipment rentals such as electric
                  forklifts and stackers, reduce industrial waste through shared
                  rentals, and invest in renewable energy solutions like
                  solar-powered warehouses.
                </p>
                <p className="text-[14px] text-[#4d5666] leading-[1.8]">
                  <strong className="text-[#181d25] block mb-1">Social:</strong>
                  We empower communities through skill development, certified
                  operator training, workplace safety programs, and inclusive
                  employment opportunities for rural youth.
                </p>
                <p className="text-[14px] text-[#4d5666] leading-[1.8]">
                  <strong className="text-[#181d25] block mb-1">
                    Governance:
                  </strong>
                  We believe in transparency, fairness, and accountability — from
                  vendor contracts to digital invoicing — ensuring ethical growth
                  for all stakeholders.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 w-full relative aspect-[4/3]">
              <Image
                src="/assets/esg.png"
                alt="ESG Commitment graphic"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why US Section ──────────────────────────────────── */}
      <section className="bg-[#fcfaf4] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-[#ffd371] rounded-sm shrink-0" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#333d4c]">
                Why Us
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111]">
              Why B2B Rentals
            </h2>
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Equipment Reliability",
                icon: ShieldCheck,
                desc: "New equipment for long-term rentals; well-maintained equipment for short-term rentals.",
              },
              {
                title: "Compliance & Safety",
                icon: FileCheck,
                desc: "Compliant with relevant regulations such as the Factories Act, Motor Vehicles Act, etc.",
              },
              {
                title: "Trained Operators",
                icon: UserCheck,
                desc: "Certified and experienced operators with safety compliance",
              },
              {
                title: "Flexible Rental Terms",
                icon: FileText,
                desc: "Customizable rental plans to suit short-term projects or long-term needs.",
              },
              {
                title: "Quick Availability & Fast Turnaround",
                icon: Clock,
                desc: "Rapid deployment with minimal lead time to keep your operations running.",
              },
              {
                title: "Digital Experience",
                icon: Smartphone,
                desc: "E-invoicing, real-time equipment tracking and support",
              },
              {
                title: "End-to-End Support, Maintenance & Service",
                icon: Headphones,
                desc: "Full lifecycle support, from installation to regular servicing and breakdown response",
              },
              {
                title: "Brand Assurance / OEM Backing",
                icon: Award,
                desc: "Trusted brands like Godrej, Toyota, Tennant, IPC, and Hilti.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow"
              >
                <card.icon strokeWidth={1.5} size={38} className="text-[#181d25] mb-2" />
                <h3 className="text-lg font-bold text-[#181d25] leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#6c727f] leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
