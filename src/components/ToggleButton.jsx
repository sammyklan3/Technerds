// ToggleButton.js
import Switch from '@mui/material/Switch';
import { useTheme } from "../context/ThemeContext";

const ToggleButton = () => {

    const label = { inputProps: { 'aria-label': 'Theme toggle button' } };
    const { toggleTheme } = useTheme();

    return (
        <>
        {toggleTheme ? (

            <Switch {...label} defaultChecked onClick={toggleTheme}/>
        ) : (
            <p>hello</p>
        )}
        </>
    );
};

export default ToggleButton;
