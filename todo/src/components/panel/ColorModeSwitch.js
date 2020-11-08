import React from 'react'

export default function ColorModeSwitch() {
    return (
        <div>
            <button
                onClick={() => colorChange('default')}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Normal
                </button>
            <button
                onClick={() => colorChange('dark')}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Dark
                </button>
        </div>
    )
}