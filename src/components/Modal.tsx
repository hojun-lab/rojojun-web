import React from 'react';
import styled from 'styled-components';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    reason: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, reason }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={(e) => {
            e.stopPropagation(); // 이벤트 버블링 중단
            onClose();
        }}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>✖</CloseButton>
                <h3>상세 설명</h3>
                <p>{reason}</p>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;

// 🔹 스타일 정의
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;