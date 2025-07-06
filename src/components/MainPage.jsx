import { useEffect, useRef, useState } from "react";
import { FooterSection } from "./FooterSection";
import { TimerSection } from "./TimerSection";
import { Modal } from "./Modal";
import { TimerForm } from "./TimerForm";

export function MainPage() {
  const [day, setDay] = useState("");
  function changeDay(event) {
    setDay(Number(event.target.value));
  }
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    return day * 86400 + hour * 3600 + minute * 60 + second;
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    // Only start interval if timer is running and modal is closed
    if (timeLeft > 0 && !isOpen) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    // Cleanup previous interval
    return () => clearInterval(intervalRef.current);
  }, [timeLeft, isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    setTimeLeft(day * 86400 + hour * 3600 + minute * 60 + second);
    setIsOpen(false);
  }
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
            <TimerSection
              timeUnit={"days"}
              time={Math.floor(timeLeft / 86400)}
            />
            <TimerSection
              timeUnit={"hours"}
              time={Math.floor((timeLeft % 86400) / 3600)}
            />
            <TimerSection
              timeUnit={"minutes"}
              time={Math.floor((timeLeft % 3600) / 60)}
            />
            <TimerSection timeUnit={"seconds"} time={timeLeft % 60} />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-Soft-red text-Dark-desaturated-blue rounded-full font-black text-2xl p-4"
          >
            set countdown
          </button>
          <FooterSection />
        </div>
      </main>
      {isOpen ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <TimerForm
            onClickSubmit={handleSubmit}
            day={day}
            setDay={changeDay}
            hour={hour}
            setHour={(e) => setHour(Number(e.target.value))}
            minute={minute}
            setMinute={(e) => setMinute(Number(e.target.value))}
            second={second}
            setSecond={(e) => setSecond(Number(e.target.value))}
          />
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
