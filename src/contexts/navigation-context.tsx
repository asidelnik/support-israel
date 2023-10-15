import { createContext, useContext, useReducer } from "react";
import {
  NavigationContextProviderProps,
  NavigationType,
} from "../interfaces/navigation/navigation-context-types";
import { NavigationActions } from "../interfaces/navigation/navigation-actions";
import { navigationInitialState } from "../data/contextsInitialState";

const NavigationContext = createContext<NavigationType>(navigationInitialState);
const NavigationDispatchContext = createContext<any>(null);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [state, dispatch] = useReducer(
    navigationReducer,
    navigationInitialState
  );

  return (
    <NavigationContext.Provider value={state}>
      <NavigationDispatchContext.Provider value={dispatch}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationContext.Provider>
  );
}

function navigationReducer(
  nav: NavigationType,
  action: NavigationActions
): any {
  switch (action.type) {
    case "set-a-field-touched": {
      return {
        ...nav,
        aFieldTouched: action.payload,
      } as NavigationType;
    }

    // case "set-is-onboarding-active": {
    //   return {
    //     ...nav,
    //     isOnboardingActive: action.payload,
    //   } as NavigationType;
    // }

    case "set-is-show-terms-of-service": {
      return {
        ...nav,
        isShowTermsOfService: action.payload,
      } as NavigationType;
    }

    case "set-is-show-site-mission": {
      return {
        ...nav,
        isShowSiteMission: action.payload,
      } as NavigationType;
    }

    case "set-is-opinions-uploaded": {
      return {
        ...nav,
        isOpinionsUploaded: action.payload,
      } as NavigationType;
    }

    case "set-edit-panel-active-tab": {
      return {
        ...nav,
        editPanelActiveTab: action.payload,
      } as NavigationType;
    }

    case "set-is-show-edit-panel-mobile": {
      return {
        ...nav,
        isShowEditPanel: {
          ...nav.isShowEditPanel,
          mobile: action.payload,
        },
      } as NavigationType;
    }

    case "set-is-show-edit-panel-web": {
      return {
        ...nav,
        isShowEditPanel: {
          ...nav.isShowEditPanel,
          web: action.payload,
        },
      } as NavigationType;
    }

    case "set-is-show-advanced-edit": {
      return {
        ...nav,
        isShowAdvancedEdit: action.payload,
      } as NavigationType;
    }

    default: {
      return nav;
    }
  }
}

export function useNavigation() {
  return useContext(NavigationContext);
}

export function useNavigationDispatch() {
  return useContext(NavigationDispatchContext);
}
