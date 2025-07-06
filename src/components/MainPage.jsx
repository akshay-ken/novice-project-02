import { useState } from "react";
import { FooterSection } from "./FooterSection";
import { TimerSection } from "./TimerSection";
import { Modal } from "./Modal";

export function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main>
        <div
          className="w-full flex flex-col gap-y-16 justify-center
         items-center h-screen text-center"
        >
          <h1 className="text-2xl font-semibold tracking-[0.7rem] text-White">
            WE'RE LAUNCHING SOON
          </h1>
          <div className="flex flex-row gap-x-4">
            <TimerSection timeUnit={"days"} time={"08"} />
            <TimerSection timeUnit={"hours"} time={"08"} />
            <TimerSection timeUnit={"minutes"} time={"08"} />
            <TimerSection timeUnit={"seconds"} time={"08"} />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-Soft-red text-Dark-desaturated-blue rounded-full font-black text-2xl p-4"
          >
            testing
          </button>
          <FooterSection />
        </div>
      </main>
      {isOpen ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-semibold mb-4">Working</h2>
          <p className="mb-6">
            This is a native &lt;dialog&gt; rendered via a Portal.
          </p>
          <button
            className="px-4 py-2 bg-Soft-red text-White rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Modal>
      ) : null}
    </>
  );
}
