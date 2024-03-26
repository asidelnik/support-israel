import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { opinionsInitialState } from '../data/contextsInitialState';
import { OpinionsType } from '../interfaces/opinions/opinions-context-types';

const opinionsSlice = createSlice({
  name: 'opinions',
  initialState: opinionsInitialState,
  reducers: {
    uploadProfileImage: (state: OpinionsType, action: PayloadAction<string>) => {
      state.uploadedProfileImageUrl = action.payload;
    },
    updateCoverOpinion: (state: OpinionsType, action: PayloadAction<string>) => {
      state.coverOpinion = action.payload;
    },
    updateProfileOpinion: (state: OpinionsType, action: PayloadAction<string>) => {
      state.profileOpinion = action.payload;
    },
  }
});

export const { uploadProfileImage, updateCoverOpinion, updateProfileOpinion } = opinionsSlice.actions;
export default opinionsSlice.reducer;