import { useContext } from "react";
import ThemeContext from "../../Context/MyContextTheme";

const ToggleTheme = () => {
    const {isDarkMode,toggleDarkMode} = useContext(ThemeContext)
    return (
        <div className="flex justify-end">
            <button type="button" onClick={toggleDarkMode}>
                {isDarkMode ? <img src="https://cdn-icons-png.flaticon.com/128/702/702471.png" width={20} alt="" /> 
                :
                <img width={30} className="invert" src="https://cdn-icons-png.flaticon.com/128/2392/2392508.png" alt="" />}
            </button>
        </div>
    );
};

export default ToggleTheme ;