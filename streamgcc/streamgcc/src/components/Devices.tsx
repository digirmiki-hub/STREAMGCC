import { VERIFIED_DEVICES } from "@/content/plan";
import { Section } from "./Section";

export function Devices() {
  return (
    <Section
      id="devices"
      title="Supported devices"
      intro="We list a device only after we have verified that it works. If yours is not here, ask support before you buy."
    >
      {VERIFIED_DEVICES.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VERIFIED_DEVICES.map((device) => (
            <li key={device.name} className="border border-line bg-panel p-6">
              <h3 className="font-display text-xl font-medium">{device.name}</h3>
              {device.note ? <p className="mt-2 text-white/72">{device.note}</p> : null}
              {device.verifiedOn ? (
                <p className="mt-4 text-sm text-gold-400">Verified {device.verifiedOn}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <div className="max-w-2xl border border-dashed border-gold-500/50 p-7">
          <h3 className="font-display text-xl font-medium">The verified list is being compiled</h3>
          <p className="mt-3 text-white/72">
            No devices are listed yet because none have completed our testing. We would rather show
            an empty list than promise compatibility we have not confirmed. Contact support with the
            device you plan to use and we will tell you what we can confirm.
          </p>
        </div>
      )}
    </Section>
  );
}
