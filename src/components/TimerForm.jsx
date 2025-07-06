export function TimerForm({
  day,
  setDay,
  hour,
  setHour,
  minute,
  setMinute,
  second,
  setSecond,
  onClickSubmit,
}) {
  return (
    <>
      <form className="flex flex-col items-center" action="">
        <label
          htmlFor="time"
          className="text-xl font-bold text-Dark-desaturated-blue"
        >
          Day
        </label>
        <input
          className="outline-2 text-center rounded-full"
          type="number"
          value={day}
          onChange={setDay}
        />
        <label
          htmlFor="time"
          className="text-xl font-bold text-Dark-desaturated-blue"
        >
          Hour
        </label>
        <input
          className="outline-2 text-center rounded-full"
          type="number"
          value={hour}
          onChange={setHour}
        />
        <label
          htmlFor="time"
          className="text-xl font-bold text-Dark-desaturated-blue"
        >
          Minute
        </label>
        <input
          className="outline-2 text-center rounded-full"
          type="number"
          value={minute}
          onChange={setMinute}
        />
        <label
          htmlFor="time"
          className="text-xl font-bold text-Dark-desaturated-blue"
        >
          Second
        </label>
        <input
          className="outline-2 text-center rounded-full"
          type="number"
          value={second}
          onChange={setSecond}
        />
        <button
          onClick={onClickSubmit}
          className="my-6 bg-Soft-red rounded-full py-1 px-4 font-bold text-White"
        >
          SET TIMER
        </button>
      </form>
    </>
  );
}
