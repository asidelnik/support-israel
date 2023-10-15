import { OpinionsGroup } from "../interfaces";

// type Reset = { type: "reset" };

type UploadExcelOpinionGroups = {
  type: "upload-excel-opinion-groups";
  payload: OpinionsGroup[];
};

type UploadProfileImage = {
  type: "upload-profile-image";
  payload: string;
};

type UpdateCoverOpinion = {
  type: "update-cover-opinion";
  payload: string;
};

type UpdateProfileOpinion = {
  type: "update-profile-opinion";
  payload: string;
};

export type OpinionsActions =
  //   | Reset
  | UploadExcelOpinionGroups
  | UploadProfileImage
  | UpdateCoverOpinion
  | UpdateProfileOpinion;
