import React from "react";

function FloatingActionButtons() {
    return (
        <div class="fixed bottom-8 right-8 flex flex-col space-y-4">
            <button class="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors group">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span class="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Me gusta
                </span>
            </button>
            <button class="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-colors group">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                <span class="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Guardar
                </span>
            </button>
        </div>
    )
}

export default FloatingActionButtons;