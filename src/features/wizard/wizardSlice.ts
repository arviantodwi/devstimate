import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Size = "small" | "medium" | "large";
export type Stage = "mvp" | "mmp";
export type Platform = "web" | "ios" | "android";

type WizardState = {
  size: Size;
  stage: Stage;
  platform: Platform;
};

const initialState: WizardState = {
  size: "small",
  stage: "mvp",
  platform: "web",
};

export const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    setSizeOption: (state, action: PayloadAction<Size>) => {
      state.size = action.payload;
    },
    setStageOption: (state, action: PayloadAction<Stage>) => {
      state.stage = action.payload;
    },
    setPlatformOption: (state, action: PayloadAction<Platform>) => {
      state.platform = action.payload;
    },
  },
});

export const { setSizeOption, setStageOption, setPlatformOption } =
  wizardSlice.actions;
export const selectSize = (state: RootState) => state.wizard.size;
export const selectStage = (state: RootState) => state.wizard.stage;
export const selectPlatform = (state: RootState) => state.wizard.platform;

export default wizardSlice.reducer;
