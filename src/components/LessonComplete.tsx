import React from "react";
import Link from "next/link";
import Image from "next/image";

const LessonComplete = ({
  backgroundColor,
  isUnit1,
}: {
  backgroundColor: "blue" | "#ce82ff" | "#00cd9c" | "#FF9EAA";
  isUnit1?: boolean;
}) => {
  const buttonColor = {
    blue: "border-blue-600 bg-blue-500",
    "#ce82ff": "border-fuchsia-500 bg-fuchsia-400",
    "#00cd9c": "border-emerald-500 bg-emerald-400",
    "#FF9EAA": "border-rose-500 bg-rose-400",
  };
  const isunit1 = isUnit1 || false;
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 font-['TTLaundryGothicB'] sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        {isunit1 ? (
          <>
            <Image
              className="mt-4"
              alt="설명 이미지"
              src="/UNIT1_0/shinhanEvent.png"
              width={350}
              height={400}
            />
            <div className="flex items-center">
              <Image
                className="mt-4"
                alt="설명 이미지"
                src="/UNIT1_0/신한투자증권qr코드.jpg"
                width={100}
                height={100}
              />
              <h1 className="text-center font-['TTLaundryGothicB'] text-xl text-shinhan-blue">
                신한투자증권 바로가기
              </h1>
            </div>
          </>
        ) : (
          <h1 className="text-center text-3xl text-yellow-400">
            Lesson Complete!
          </h1>
        )}
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <Link
            className={`${buttonColor[backgroundColor]} flex w-full items-center justify-center rounded-2xl border-b-4 border-${backgroundColor}-600 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit`}
            href="/tutorial"
          >
            돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LessonComplete;
