// src/LanguageContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface LanguageContextProps {
    language: string;
    setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: 'ko', // 기본 언어: 한국어
    setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('ko');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);