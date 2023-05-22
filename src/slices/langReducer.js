import { createSlice } from "@reduxjs/toolkit";

// const langReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_LANG":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default langReducer;
const initialState = {
  lang: "ENG", // Idioma inicial por defecto
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
