import { createContext, useContext, useReducer } from "react";
import {
  DesignContextProviderProps,
  DesignType,
} from "../interfaces/design/design-context-types";
import { DesignActions } from "../interfaces/design/design-actions";
import { designInitialState } from "../data/contextsInitialState";

const DesignContext = createContext<DesignType>(designInitialState);
const DesignDispatchContext = createContext<any>(null);

export function DesignProvider({ children }: DesignContextProviderProps) {
  const [state, dispatch] = useReducer(designReducer, designInitialState);

  return (
    <DesignContext.Provider value={state}>
      <DesignDispatchContext.Provider value={dispatch}>
        {children}
      </DesignDispatchContext.Provider>
    </DesignContext.Provider>
  );
}

function designReducer(design: DesignType, action: DesignActions): any {
  switch (action.type) {
    ////// Poster

    case "set-color-theme": {
      return { ...design, posterColorTheme: action.payload } as DesignType;
    }

    case "set-poster-fonts": {
      return { ...design, posterFont: action.payload } as DesignType;
    }

    case "set-edit-page-designs": {
      return { ...design, editPage: action.payload } as DesignType;
    }

    case "set-cover-designs": {
      return { ...design, cover: action.payload } as DesignType;
    }

    ////// Temp
    case "set-edit-page-background-color": {
      return {
        ...design,
        editPage: { ...design.editPage, backgroundColor: action.payload },
      } as DesignType;
    }

    case "set-cover-sentence-bg-color": {
      return {
        ...design,
        editPage: { ...design.editPage, sentenceBgColor: action.payload },
      } as DesignType;
    }

    ////// Cover
    case "set-edit-page-font-family": {
      return {
        ...design,
        editPage: {
          ...design.editPage,
          fontFamily: action.payload,
        },
      } as DesignType;
    }

    case "set-cover-font": {
      return {
        ...design,
        cover: {
          ...design.cover,
          font: action.payload,
        },
      } as DesignType;
    }

    case "set-cover-text-color": {
      return {
        ...design,
        cover: {
          ...design.cover,
          textColor: action.payload,
        },
      } as DesignType;
    }

    case "set-cover-is-show-text-background": {
      return {
        ...design,
        cover: {
          ...design.cover,
          isShowTextBackground: action.payload,
        },
      } as DesignType;
    }

    ////// Profile

    case "set-profile-picture-text-color": {
      return {
        ...design,
        editPage: {
          ...design.editPage,
          profilePicture: {
            ...design.editPage.profilePicture,
            textColor: action.payload,
          },
        },
      } as DesignType;
    }

    case "set-profile-font-size": {
      return {
        ...design,
        editPage: {
          ...design.editPage,
          profilePicture: {
            ...design.editPage.profilePicture,
            font: action.payload,
          },
        },
      } as DesignType;
    }

    default: {
      return design;
    }
  }
}

export function useDesign() {
  return useContext(DesignContext);
}

export function useDesignDispatch() {
  return useContext(DesignDispatchContext);
}
