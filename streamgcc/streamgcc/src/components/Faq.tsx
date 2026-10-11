import { FAQ } from "@/content/plan";
import { Section } from "./Section";

export function Faq() {
  return (
    <Section id="faq" title="Questions, answered plainly">
      <div className="max-w-3xl border-t border-line">
        {FAQ.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-lg font-medium hover:text-gold-300">
              {item.q}
              <svg
                className="faq-icon shrink-0 text-gold-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </summary>
            <p className="max-w-[62ch] pb-6 text-white/72">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
