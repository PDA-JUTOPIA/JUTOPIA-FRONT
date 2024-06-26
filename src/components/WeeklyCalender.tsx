import React, { useState } from "react";

const WeeklyCalendar: React.FC = () => {
  const [stickers, setStickers] = useState<{ [key: string]: boolean }>({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });

  const toggleSticker = (day: string) => {
    setStickers((prevStickers) => ({
      ...prevStickers,
      [day]: !prevStickers[day],
    }));
  };

  return (
    <div className="m-5 flex flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-500 p-5 text-white shadow-lg sm:p-8">
      <h2 className="mb-3 border-b-2 border-white pb-2 text-xl font-semibold sm:text-2xl">
        This Week
      </h2>
      <div className="grid w-full grid-cols-4 gap-3 min-[850px]:flex min-[850px]:justify-evenly min-[850px]:gap-6">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="flex transform flex-col items-center transition-transform duration-200 ease-in-out"
            onClick={() => toggleSticker(day)}
          >
            <span
              className={`mb-1 text-sm sm:text-base ${["Thu", "Fri", "Sat"].includes(day) ? "max-[850px]:ml-[20vw]" : ""}`}
            >
              {day}
            </span>
            <span
              className={`relative flex h-[7vw] max-h-20 min-h-16 w-[7vw] min-w-16 max-w-20 items-center justify-center rounded-full bg-gray-200 ${
                stickers[day] ? "animate-bounce bg-yellow-300" : ""
              } ${["Thu", "Fri", "Sat"].includes(day) ? "max-[850px]:ml-[20vw]" : ""}`}
            >
              👍
              {stickers[day] && (
                <span className="absolute right-0 top-0 h-3 w-3 animate-ping rounded-full bg-red-500 sm:h-4 sm:w-4" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
