export default function ProgressStepper({ currentStep = 1 }) {
  const steps = [
    "Basic Info",
    "Links",
    "Media",
    "Review",
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between gap-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const active = stepNumber <= currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "border-emerald-400 bg-emerald-400 text-black"
                      : "border-zinc-700 bg-zinc-900 text-zinc-400"
                  }`}
                >
                  {stepNumber}
                </div>

                <span
                  className={`mt-3 text-xs font-medium text-center ${
                    active
                      ? "text-white"
                      : "text-zinc-500"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-3 h-[2px] flex-1 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`h-full transition-all duration-500 ${
                      currentStep > stepNumber
                        ? "w-full bg-emerald-400"
                        : "w-0 bg-emerald-400"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}