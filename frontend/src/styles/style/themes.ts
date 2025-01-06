import { Theme } from "../interfaces/Theme";

export const lightTheme: Theme = {
    name: "light",
    colors: {
        primary: "#FFF",
        secondary: "#f5f5f5",
        bg: "#fff",
        bgSecondary: "#f4f9f5",
        text: "#000",
        error: "#ff0000",
        default: "#06B6D4",
        item: "#fff",
        itemSecondary: "#78ffed"
    }
};

export const darkTheme: Theme = {
    name: "dark",
    colors: {
        primary: "#08031a",
        secondary: "#000000",
        bg: "#111827",
        bgSecondary: "#0d010e",
        text: "#fff",
        error: "#ff0000",
        default: "#06B6D4",
        item: "#1F2937",
        itemSecondary: "#194B5D"
    }
};