import { useState, useEffect } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import LessonComplete from "./LessonComplete";
import RenderComponent from "./UNIT1_0/RenderComponent";
import RenderBuy from "./UNIT1_1/RenderBuy";
import RenderSell from "./UNIT1_2/RenderSell";

const ProblemUnitPractice = ({
  backgroundColor,
  increaseLessonsCompleted,
  status,
  totalCorrectAnswersNeeded,
  practiceTitle,
  practiceNum,
}: {
  backgroundColor: "blue" | "#ce82ff" | "#00cd9c" | "#FF9EAA";
  increaseLessonsCompleted: (count: number) => void;
  status: string;
  totalCorrectAnswersNeeded: number;
  practiceTitle: string;
  practiceNum: number;
}) => {
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);

  useEffect(() => {
    if (lessonComplete) {
      if (status === "active") {
        increaseLessonsCompleted(1);
      }
    }
  }, [lessonComplete, increaseLessonsCompleted, status]);

  const onNext = () => {
    if (currentStep < totalCorrectAnswersNeeded - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const onPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const onFinish = () => {
    setLessonComplete(true);
  };
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      {!lessonComplete ? (
        <>
          <div className="flex grow flex-col items-center gap-0">
            <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
              <ProgressBar
                correctAnswerCount={currentStep + 1}
                totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
                setQuitMessageShown={setQuitMessageShown}
                color="blue"
              />
            </div>
            <h1 className="mt-1 font-['TTLaundryGothicB'] text-2xl font-bold sm:text-3xl">
              {practiceTitle}
            </h1>

            <div
              style={{
                backgroundImage: 'url("/UNIT1_0/BgPhone.png")',
                backgroundSize: "cover",
                height: 640,
                padding: "40px",

                paddingBottom: "20px",
                boxSizing: "border-box",
              }}
            >
              {practiceNum === 0 ? (
                <RenderComponent
                  onNext={onNext}
                  onFinish={onFinish}
                  onPrev={onPrev}
                />
              ) : practiceNum === 1 ? (
                <RenderBuy
                  onNext={onNext}
                  onFinish={onFinish}
                  onPrev={onPrev}
                />
              ) : (
                <RenderSell
                  onNext={onNext}
                  onFinish={onFinish}
                  onPrev={onPrev}
                />
              )}
            </div>
          </div>

          <QuitMessage
            quitMessageShown={quitMessageShown}
            setQuitMessageShown={setQuitMessageShown}
            color={backgroundColor}
          />
        </>
      ) : (
        <LessonComplete backgroundColor={backgroundColor} isUnit1={true} />
      )}
    </div>
  );
};

export default ProblemUnitPractice;
