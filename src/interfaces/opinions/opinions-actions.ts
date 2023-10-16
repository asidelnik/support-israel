type UploadProfileImage = {
  type: 'upload-profile-image';
  payload: string;
};

type UpdateCoverOpinion = {
  type: 'update-cover-opinion';
  payload: string;
};

type UpdateProfileOpinion = {
  type: 'update-profile-opinion';
  payload: string;
};

export type OpinionsActions =
  | UploadProfileImage
  | UpdateCoverOpinion
  | UpdateProfileOpinion;
