// src/components/LanguageSwitcher.tsx
import React from 'react';
import styled from 'styled-components';
import {useLanguage} from "../context/LanguageContext.tsx";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #61afef;
  }
  &:focus + span {
    box-shadow: 0 0 1px #61afef;
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    return (
        <SwitchContainer>
            <SwitchLabel>
                <SwitchInput type="checkbox" checked={language === 'en'} onChange={toggleLanguage} />
                <SwitchSlider />
            </SwitchLabel>
        </SwitchContainer>
    );
};

export default LanguageSwitcher;