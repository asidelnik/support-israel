import { createContext, useContext, useReducer } from "react";
import { OpinionsActions } from "../interfaces/opinions/opinions-actions";
import {
  OpinionsContextProviderProps,
  OpinionsType,
} from "../interfaces/opinions/opinions-context-types";
import { opinionsInitialState } from "../data/contextsInitialState";

const OpinionsContext = createContext<OpinionsType>(opinionsInitialState);
const OpinionsDispatchContext = createContext<any>(null);

export function OpinionsProvider({ children }: OpinionsContextProviderProps) {
  const [state, dispatch] = useReducer(opinionsReducer, opinionsInitialState);

  return (
    <OpinionsContext.Provider value={state}>
      <OpinionsDispatchContext.Provider value={dispatch}>
        {children}
      </OpinionsDispatchContext.Provider>
    </OpinionsContext.Provider>
  );
}

function opinionsReducer(opinions: OpinionsType, action: OpinionsActions): any {
  switch (action.type) {
    // case "reset": {
    //   return opinionsInitialState;
    // }
    case "upload-excel-opinion-groups": {
      return { ...opinions, opinionGroups: action.payload } as OpinionsType;
    }
    case "upload-profile-image": {
      return {
        ...opinions,
        uploadedProfileImageUrl: action.payload,
      } as OpinionsType;
    }
    case "update-cover-opinion": {
      return { ...opinions, coverOpinion: action.payload } as OpinionsType;
    }
    case "update-profile-opinion": {
      return { ...opinions, profileOpinion: action.payload } as OpinionsType;
    }

    default: {
      return opinions;
    }
  }
}

export function useOpinions() {
  return useContext(OpinionsContext);
}

export function useOpinionsDispatch() {
  return useContext(OpinionsDispatchContext);
}
