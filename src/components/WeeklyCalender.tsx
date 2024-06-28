import React, { useState, useEffect } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { readUserPostCheck } from "~/apis/user";

interface Stickers {
  Sun: boolean;
  Mon: boolean;
  Tue: boolean;
  Wed: boolean;
  Thu: boolean;
  Fri: boolean;
  Sat: boolean;
}

const WeeklyCalendar: React.FC = () => {
  const email = useBoundStore((x) => x.email);
  const [stickers, setStickers] = useState<Stickers>({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });

  useEffect(() => {
    async function fetchPostCheck() {
      try {
        const postCheck = await readUserPostCheck(email);
        if (postCheck) {
          setStickers({
            Sun: postCheck[0],
            Mon: postCheck[1],
            Tue: postCheck[2],
            Wed: postCheck[3],
            Thu: postCheck[4],
            Fri: postCheck[5],
            Sat: postCheck[6],
          });
        }
      } catch (error) {
        console.error("Error fetching post check:", error);
      }
    }

    fetchPostCheck().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [email]);

  return (
    <div className="m-5 flex flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-500 p-5 text-white shadow-lg sm:p-8">
      <h2 className="mb-3 pb-2 text-xl font-semibold sm:text-2xl">
        이번주 챌린지 현황
      </h2>
      <div className="grid w-full grid-cols-4 gap-3 min-[850px]:flex min-[850px]:justify-between">
        {(
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as Array<
            keyof Stickers
          >
        ).map((day) => (
          <div
            key={day}
            className="flex transform flex-col items-center transition-transform duration-200 ease-in-out"
          >
            <span
              className={`mb-1 text-sm sm:text-base ${
                ["Thu", "Fri", "Sat"].includes(day)
                  ? "max-[850px]:ml-[20vw]"
                  : ""
              }`}
            >
              {day}
            </span>
            <span
              className={`relative flex h-[7vw] max-h-20 min-h-16 w-[7vw] min-w-16 max-w-20 items-center justify-center rounded-full bg-gray-200 ${
                stickers[day] ? "animate-bounce bg-yellow-300" : ""
              } ${
                ["Thu", "Fri", "Sat"].includes(day)
                  ? "max-[850px]:ml-[20vw]"
                  : ""
              }`}
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
