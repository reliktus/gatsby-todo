import React from 'react';
import LocalStorageHandler from '../services/LocalStorageHandler';

export default function ColorModeSwitch() {
    const PAGE_COLOR_THEME_KEY = 'pageColorMode'; // dark or default
    const LocalStorage = new LocalStorageHandler();
    let checkBoxState = true;
    const colorChange = (e) => {
        let body = document.body;
        // mode === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');

        // console.log(e.currentTarget.checked);
        checkBoxState ? body.classList.add('dark') : body.classList.remove('dark');
        LocalStorage.setLocalStorageKeyValue(PAGE_COLOR_THEME_KEY, checkBoxState ? 'dark' : 'default');
    };
    LocalStorage.getLocalStorageKeyValue('pageColorMode') && colorChange(LocalStorage.getLocalStorageKeyValue('pageColorMode'))
    return (
        <div>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="toogleA" className="flex items-center cursor-pointer" >
                    <div className="relative">
                        <input id="toogleA" type="checkbox" defaultChecked={checkBoxState} className="hidden" onClick={(e) => colorChange(e)} />
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