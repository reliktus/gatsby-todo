import React, { useState } from 'react';
import LocalStorageHandler from '../../utils/LocalStorageHandler';

export default function ColorModeSwitch() {
    const body = document.body;
    const DARK_MODE_ACTIVE = 'pageColorMode';
    const LocalStorage = new LocalStorageHandler();
    const darkModeStateInLS = LocalStorage.getLocalStorageKeyValue(DARK_MODE_ACTIVE) === 'true' ? true : false;
    const [darkMode, setDarkModeState] = useState(darkModeStateInLS);
    darkMode ? body.classList.add('dark') : body.classList.remove('dark');
    const setDarkMode = () => {
        LocalStorage.setLocalStorageKeyValue(DARK_MODE_ACTIVE, !darkMode);
        setDarkModeState(!darkMode);
    };
    return (
        <div>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="toogleA" className="flex items-center cursor-pointer" >
                    <div className="relative">
                        <input id="toogleA" type="checkbox" defaultChecked={darkMode} className="hidden" onClick={() => setDarkMode()} />
                        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">Dark Mode
                    </div>
                </label>
            </div>
        </div>
    )
}