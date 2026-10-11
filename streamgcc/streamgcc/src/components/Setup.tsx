import { STEPS } from "@/content/plan";
import { Section } from "./Section";

export function Setup() {
  return (
    <Section
      id="setup"
      title="Set up in five steps"
      intro="Your activation email has the exact details. This is the order things happen in."
    >
      <ol className="max-w-3xl">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[3.25rem_1fr] gap-5 border-t border-line py-7 last:border-b sm:grid-cols-[5rem_1fr]"
          >
            <span
              className="font-display text-4xl font-medium leading-none text-gold-400 sm:text-5xl"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl font-medium">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-[56ch] text-white/72">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
