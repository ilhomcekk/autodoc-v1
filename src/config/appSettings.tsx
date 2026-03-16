import { getLanguage, setLanguage } from "./localStorage"

export const initApp = () => {
    // Инициализация языка из localStorage
    setLanguage(getLanguage())
}