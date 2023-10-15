import { ReactNode } from "react";
import { CoverType, FontSizeType, EditPageDesignType } from "../interfaces";

export type DesignContextProviderProps = {
  children: ReactNode;
};

export interface DesignType {
  posterColorTheme: string;
  posterFont: FontSizeType;
  editPage: EditPageDesignType;
  cover: CoverType;
}
