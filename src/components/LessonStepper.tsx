import React, { useState, useEffect } from "react";

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

interface StepperProps {
  steps: Step[];
  onNext: () => void;
  onFinish: () => void;
  onPrev: () => void;
  practiceNum: number;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  onNext,
  onFinish,
  onPrev,
  practiceNum,
}) => {
  const [activeStep, setActiveStep] = useState(practiceNum);

  useEffect(() => {
    console.log(`${steps[activeStep].name} props updated`);
  }, [steps, onNext, onPrev, setActiveStep, activeStep]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      onNext();
    } else {
      onFinish();
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      onPrev();
    }
  };

  const CurrentComponent = steps[activeStep].component;

  return (
    <div>
      <CurrentComponent
        onNext={handleNext}
        onFinish={steps[activeStep].isFinal ? onFinish : undefined}
        onPrev={activeStep > 0 ? handlePrev : undefined}
      />
    </div>
  );
};

export default Stepper;
