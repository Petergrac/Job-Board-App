
import { useInView } from "react-intersection-observer";
import MainFooter from "../components/HomepageFooter";

// Motion variants
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable Animated Image with external inView logic
const AnimatedImage = ({ src, alt, refHook, inView }) => (
  <motion.img
    ref={refHook}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={variants}
    className="object-scale-down flex md:object-contain"
    src={src}
    alt={alt}
    loading="lazy"
  />
);

// Reusable Paragraph
const SectionText = ({ children }) => (
  <p className="text-[#2b3452] pb-3 p-5 text-lg text-center">{children}</p>
);

// Company Logos
const logos = [
  { src: "/icons/amazon.svg", alt: "amazon-icon" },
  { src: "/icons/youtube.svg", alt: "youtube-icon" },
  { src: "/icons/google.svg", alt: "google-icon" },
  { src: "/icons/safaricom.svg", alt: "safaricom-icon-1" },
  { src: "/icons/instagram.svg", alt: "instagram-icon" },
  { src: "/icons/safaricom.png", alt: "safaricom-icon-2" },
];

const Homepage = () => {
  // Three separate refs for three animated images
  const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div>
      <div className="bg-sky-100 flex flex-col md:flex-row justify-center md:h-screen">
        {/* Left Side */}
        <div className="md:overflow-y-auto flex flex-col md:p-20 flex-1 p-15 md:border-r-2 border-dotted border-b-2 border-sky-700 md:border-b-0">
          <div>
            <p className="p-4 text-center font-bold text-4xl text-[#2b3452]">Find Your Career.</p>
            <p className="font-bold text-center mb-4 text-4xl text-[#2b3452]">You Deserve it.</p>
            <p className="text-[#2b3452] text-lg">
              Each month, more than 7 million JobSeeker turn to website in their search for work,
              making over <br /> 160,000 applications every day.
            </p>
          </div>
          {/* Logos Grid */}
          <div className="grid justify-items-center grid-cols-4 md:gap-5 mt-3 gap-2">
            {logos.map(({ src, alt }, index) => (
              <img
                key={index}
                className="p-4 w-20 md:w-24 bg-white"
                src={src}
                alt={alt}
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <button className="p-1 border-1 rounded-lg border-sky-600 text-white bg-sky-600 hover:translate-y-0.5">
              Apply Now
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:overflow-y-auto flex-1 p-5 flex flex-col md:bg-linear-to-l bg-linear-to-t md:from-[#85d6e0] from-[#0683cb] to-sky-100">
          <SectionText>
            Discover your next career opportunity with ease. Our comprehensive job board connects
            talented individuals with leading companies across various industries.
          </SectionText>
          <AnimatedImage src="/images/smily woman.avif" alt="smiling-woman" refHook={ref1} inView={inView1} />
          <SectionText>
            Your dream job awaits! Browse thousands of listings, from entry-level positions to
            executive roles, and take the next step in your professional journey.
          </SectionText>
          <AnimatedImage src="/images/work.jpg" alt="work-environment" refHook={ref2} inView={inView2} />
          <SectionText>
            Simplifying your job search, one click at a time. Find relevant openings, apply directly,
            and accelerate your path to a fulfilling career.
          </SectionText>
          <AnimatedImage src="/images/application.webp" alt="application-process" refHook={ref3} inView={inView3} />
        </div>
      </div>
          <MainFooter />
    </div>
  );
};

export default Homepage;
