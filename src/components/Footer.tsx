import { BRAND_INFO } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] bg-noise flex justify-between items-center py-[28px] px-[clamp(24px,8vw,120px)] border-t border-gold/10">
      <span className="font-sans text-[0.70rem] md:text-[0.75rem] font-light text-text-muted tracking-[0.1em]">
        © {new Date().getFullYear()} Black Swan
      </span>
      <span className="font-sans text-[0.70rem] md:text-[0.75rem] font-light text-text-muted tracking-[0.1em] uppercase">
        {BRAND_INFO.creatorName}
      </span>
    </footer>
  );
}
