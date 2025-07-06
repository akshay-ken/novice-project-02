export function TimerSection({ timeUnit, time }) {
  return (
    <>
      <section>
        <div className="size-20 flex flex-col justify-center rounded-xl bg-Dark-desaturated-blue">
          <p className="text-Soft-red font-black text-5xl">{time}</p>
        </div>
        <p className="tracking-[0.2rem] uppercase text-Grayish-blue text-xs mt-2">
          {timeUnit}
        </p>
      </section>
    </>
  );
}
