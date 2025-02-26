import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className={`relative flex items-center w-full transition-all duration-200 ${
            isFocused ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
        } rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:ring-blue-300 dark:hover:ring-gray-600 dark:ring-gray-700`}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Buscar..."
                aria-label="Buscar"
                className="w-full px-4 py-2.5 bg-transparent border-none outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm rounded-lg transition-colors"
            />
            <div className="absolute right-3 flex items-center pointer-events-none">
                <Search 
                    className={`w-5 h-5 transition-colors ${
                        isFocused ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'
                    }`}
                />
            </div>
        </div>
    );
}

export default SearchBar;