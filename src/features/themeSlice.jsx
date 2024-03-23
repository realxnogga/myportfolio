
import { createSlice } from "@reduxjs/toolkit"

export const ThemeSlice = createSlice({
    name: 'ThemeSliceName',
    initialState: {
        themestate: false,
        tailwindText: {
            whitebg: '',
            semiwhitebg: '',
            blacktext: '',
            semiblacktext: '',
        },
    },

    reducers: {
        toggle: (state) => {
            state.themestate = !state.themestate;

            if (state.themestate) {
                state.tailwindText.whitebg = '!bg-white';
                state.tailwindText.semiwhitebg = '!bg-gray-200';
                state.tailwindText.purple = '!bg-purple-900';
                state.tailwindText.purpledropdown = '!bg-purple-900 !bg-opacity-50 !backdrop-blur-md';
                state.tailwindText.darkdropdown = '!bg-black !bg-opacity-50 !backdrop-blur-md';
                state.tailwindText.blacktext = '!text-black';
                state.tailwindText.semiblacktext = '!bg-gray-800';               
            }
            else if (!state.themestate) {
                state.tailwindText.whitebg = '';
                state.tailwindText.semiwhitebg = '';
                state.tailwindText.purple = '';
                state.tailwindText.blacktext = '';
                state.tailwindText.semiblacktext = '';         
            }

        }

    }
})

export const tailwindText = state => state.ThemeSliceName.tailwindText;
export const actualState = state => state.ThemeSliceName.themestate;
export const { toggle } = ThemeSlice.actions;
export const ThemeSliceReducer = ThemeSlice.reducer;
