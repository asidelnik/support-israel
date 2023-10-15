import { ReactNode } from "react";
import { CoverType, EditPageDesignType } from "../interfaces";

export type DesignContextProviderProps = {
  children: ReactNode;
};

export interface DesignType {
  editPage: EditPageDesignType;
  cover: CoverType;
}
