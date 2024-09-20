import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tr: null,
  en: null,
};

const localizationSlice = createSlice({
  name: "localizationSlice",
  initialState,
  reducers: {
    setLangValues: (state, { payload }) => {
      state[payload.lang] = payload;
    },
    removeLangValues: (state, { payload }) => {
      state[payload.lang] = null;
    },
  },
});

export const { setLangValues, removeLangValues } = localizationSlice.actions;
export default localizationSlice.reducer;
