import { useState, useEffect } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import LessonComplete from "./LessonComplete";
import Accounts from "./UNIT1_0/MakeAccount";
import Accounts2 from "./UNIT1_0/MakeAccount2";
import Accounts3 from "./UNIT1_0/MakeAccount3";
import Accounts4 from "./UNIT1_0/MakeAccount4";
import Accounts5 from "./UNIT1_0/MakeAccount5";
import Accounts6 from "./UNIT1_0/MakeAccount6";
import Accounts7 from "./UNIT1_0/MakeAccount7";
import Accounts8 from "./UNIT1_0/MakeAccount8";
import Buy from "./UNIT1_1/Buy";
import BuyComplete from "./UNIT1_1/BuyComplete";
import Sell from "./UNIT1_2/Sell";
import SellComplete from "./UNIT1_2/SellComplete";
import Stepper from "./LessonStepper";
import BuyModal from "./UNIT1_1/BuyModal";
import SellModal from "./UNIT1_2/SellModal";
interface StepComponentProps {
  onNext: () => void;
  onFinish?: () => void;
  onPrev?: () => void;
}

interface MakeAccountProps {
  onNext?: () => void;
  onPrev: () => void;
  onFinish?: () => void;
}

interface BuyProps {
  onFinish: () => void;
  onPrev: () => void;
}

interface Step {
  name: string;

  component:
    | React.ComponentType<StepComponentProps>
    | React.ComponentType<MakeAccountProps>
    | React.ComponentType<BuyProps>;
  isFinal?: boolean;
}

//: { [key: number]: Step[] }
const stepsMap: { [key: number]: Step[] } = {
  0: [
    { name: "Accounts", component: Accounts },
    { name: "Accounts2", component: Accounts2 },
    { name: "Accounts3", component: Accounts3 },
    { name: "Accounts4", component: Accounts4 },
    { name: "Accounts5", component: Accounts5 },
    { name: "Accounts6", component: Accounts6 },
    { name: "Accounts7", component: Accounts7 },
    { name: "Accounts8", component: Accounts8, isFinal: true },
  ],
  1: [
    { name: "Buy", component: Buy },
    { name: "BuyModal", component: BuyModal },
    { name: "BuyComplete", component: BuyComplete, isFinal: true },
  ],
  2: [
    { name: "Sell", component: Sell },
    { name: "SellModal", component: SellModal },
    { name: "SellComplete", component: SellComplete, isFinal: true },
  ],
};

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
              <Stepper
                steps={stepsMap[practiceNum]}
                onNext={onNext}
                onFinish={onFinish}
                onPrev={onPrev}
                practiceNum={currentStep}
              />
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
