// import { Button } from "@mui/material";
// import { useState } from "react";
// import { onboardingSteps } from "../../data/initialState";
// import { useNavigationDispatch } from "../../contexts/navigation-context";
// import CheckIcon from "@mui/icons-material/Check";
// import c from "../../styles/Onboarding.module.scss";
// import clsx from "clsx";

export default function Onboarding() {
  //   const [activeStep, setActiveStep] = useState(0);
  //   

  //   function handleNextStep(event: any) {
  //     event.stopPropagation();
  //     if (activeStep < onboardingSteps.length - 1) {
  //       setActiveStep((prevStep) => prevStep + 1);
  //     } else {
  //       navDispatch({ type: "set-is-onboarding-active", payload: false });
  //     }
  //   }

  //   function handleStepClick(event: any) {
  //     event.stopPropagation();
  //   }

  return (
    <>
      {/* <div
        className={c.onboardingOverlay}
        onClick={() =>
          navDispatch({ type: "set-is-onboarding-active", payload: false })
        }
      >
        <div
          className={c.onboardingStep}
          style={{
            top: onboardingSteps[activeStep].top,
            right: onboardingSteps[activeStep].right,
          }}
          onClick={handleStepClick}
        >
          <p>
            {onboardingSteps[activeStep].number +
              ". " +
              onboardingSteps[activeStep].text}
          </p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CheckIcon className={clsx("icon")} />}
            className={clsx("button-with-one-start-icon")}
            onClick={handleNextStep}
          >
            {onboardingSteps[activeStep].buttonText}
          </Button>
        </div>
      </div> */}
    </>
  );
}
