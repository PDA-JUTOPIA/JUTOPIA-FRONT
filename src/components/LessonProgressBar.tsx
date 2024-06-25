import Link from "next/link";
import { CloseSvg } from "~/components/Svgs";

const ProgressBar = ({
  correctAnswerCount, // 맞춘 문제개수
  totalCorrectAnswersNeeded, //전체문제개수
  setQuitMessageShown,
  color,
}: {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: (isShown: boolean) => void;
  color: "blue" | "#ce82ff" | "#00cd9c" | "#FF9EAA";
}) => {
  const color400 = {
    blue: "bg-blue-400",
    "#ce82ff": "bg-fuchsia-400",
    "#00cd9c": "bg-emerald-400",
    "#FF9EAA": "bg-rose-400",
  };
  const color500 = {
    blue: "bg-blue-500",
    "#ce82ff": "bg-fuchsia-500",
    "#00cd9c": "bg-emerald-500",
    "#FF9EAA": "bg-rose-500",
  };

  return (
    <header className="flex items-center gap-4">
      {correctAnswerCount === 0 ? ( //첫 번째 문제는 바로 나가기 가능
        <Link href="/tutorial" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        // 한 문제 이상 풀었으면 나가기 버튼 누를때 알림창 나옴
        <button
          className="text-gray-400"
          onClick={() => setQuitMessageShown(true)}
        >
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}
      >
        <div
          className={
            `h-full rounded-full ${color500[color]} transition-all duration-700 ` +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}
        >
          <div
            className={`h-[5px] w-full rounded-full ${color400[color]}`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default ProgressBar;
