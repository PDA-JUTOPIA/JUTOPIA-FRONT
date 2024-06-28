import Link from "next/link";

// 프로그레스바 옆에 닫기 버튼 누르면 나오는 메시지창
const QuitMessage = ({
  quitMessageShown,
  setQuitMessageShown,
  color,
}: {
  quitMessageShown: boolean;
  setQuitMessageShown: (isShown: boolean) => void;
  color: "blue" | "#ce82ff" | "#00cd9c" | "#FF9EAA";
}) => {
  const buttonColor = {
    blue: "border-blue-500 bg-blue-400",
    "#ce82ff": "border-fuchsia-500 bg-fuchsia-400",
    "#00cd9c": "border-emerald-500 bg-emerald-400",
    "#FF9EAA": "border-rose-500 bg-rose-400",
  };
  return (
    <>
      <div
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-60 transition-all duration-300"
            : "pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-0 transition-all duration-300"
        }
        onClick={() => setQuitMessageShown(false)}
        aria-label="Close quit message"
        role="button"
      ></div>

      <article
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
            : "fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
        }
        aria-hidden={!quitMessageShown}
      >
        <div className="flex grow flex-col gap-4 font-['TTLaundryGothicB']">
          <h2 className="text-lg font-bold sm:text-2xl">정말 나가시겠어요?</h2>
          <p className="text-gray-500 sm:text-lg">
            진행사항은 저장되지 않습니다.
          </p>
        </div>
        <div className="flex grow flex-col items-center justify-center gap-4 font-['TTLaundryGothicB'] sm:flex-row-reverse">
          <Link
            className={`flex w-full items-center justify-center rounded-2xl border-b-4 ${buttonColor[color]} py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48`}
            href="/tutorial"
          >
            나가기
          </Link>
          <button
            className="w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100"
            onClick={() => setQuitMessageShown(false)}
          >
            머무르기
          </button>
        </div>
      </article>
    </>
  );
};

export default QuitMessage;
