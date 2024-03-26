// import { Step, StepLabel, Stepper } from "@mui/material";
// import { useNavigation } from "../../contexts/navigation-context";
// import { createCoverStepperSteps } from "../../data/initialState";
// import { stepStyle } from "../../mui-styles/mui-styling";

// const createCoverStepperSteps = ["הזנת דעות", "עיצוב והורדה"];
const HorizontalLinearStepper = () => {
  //   const nav = useSelector((state: RootState) => state.navigation);;

  return (
    <>
      {/* <Stepper activeStep={nav.activeStep}>
        {createCoverStepperSteps.map((label) => {
          return (
            <Step
              key={label}
              sx={stepStyle}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}
    </>
  );
};

export default HorizontalLinearStepper;

// export const stepStyle = {
//   padding: "0.4rem 0.6rem 0.4rem 1.3rem",
//   border: "1px solid rgb(224, 224, 224)",
//   borderRadius: "2.2rem",
//   position: "relative",
//   marginLeft: "0.8rem",

//   "& .Mui-completed": {
//     color: "green",
//     "&.MuiStepIcon-root": {
//       color: "green",
//     },
//   },
//   "& .css-vnkopk-MuiStepLabel-iconContainer": {
//     padding: "0 0 0 0.8rem",
//   },
// };

// export const muiTheme = createTheme({
//   typography: {
//     // fontSize: 24,
//     htmlFontSize: 8,
//     button: {
//       fontSize: "2rem",
//     },
//   },
//   components: {
//     MuiStep: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "white",
//         },
//       },
//     },
//     MuiStepLabel: {
//       styleOverrides: {
//         label: {
//           fontSize: "2rem",
//         },
//       },
//     },
//     MuiStepIcon: {
//       styleOverrides: {
//         root: {
//           fontSize: "2.5rem",
//         },
//         text: {
//           fontSize: "1.8rem",
//         },
//       },
//     },
//     MuiAlert: {
//       styleOverrides: {
//         root: {
//           width: "2em",
//           fontSize: "2em",
//           alignItems: "center",
//           direction: "ltr",
//         },
//       },
//     },
//   },
// });

// type StepperStart = { type: "stepper-start" };
// type StepperSetStep = { type: "stepper-set-step"; payload: number };

  //   | StepperStart
  //   | StepperSetStep

  //   navDispacth({
      //     type: "stepper-set-step",
      //     payload: StepperSteps.DesignPicking,
      //   });

          // case "stepper-start": {
    //   return {
    //     ...nav,
    //     route: PageRoute.Stepper,
    //     activeStep: 0,
    //   } as NavigationType;
    // }

    // case "stepper-set-step": {
    //   return {
    //     ...nav,
    //     route: PageRoute.Stepper,
    //     activeStep: action.payload,
    //   } as NavigationType;
    // }

    //     case "navigate-to-home": {
    //   return { ...nav, route: PageRoute.Home } as NavigationType;
    // }

    //   | NavigateHome
    //   type NavigateHome = { type: "navigate-to-home" };