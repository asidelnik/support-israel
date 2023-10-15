import { ReactNode } from "react";

export type OpinionsContextProviderProps = {
  children: ReactNode;
};

export interface OpinionsType {
  uploadedProfileImageUrl: string;
  coverOpinion: string;
  profileOpinion: string;
}