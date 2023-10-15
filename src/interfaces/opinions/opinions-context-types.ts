import { ReactNode } from "react";
import { OpinionsGroup } from "../interfaces";

export type OpinionsContextProviderProps = {
  children: ReactNode;
};

export interface OpinionsType {
  opinionGroups: OpinionsGroup[];
  uploadedProfileImageUrl: string;
  coverOpinion: string;
  profileOpinion: string;
}