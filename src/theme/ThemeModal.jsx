import React from 'react';
import './theme.css';

const ThemeModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleThemeChange = (hueValue) => {
        document.documentElement.style.setProperty('--primary-hue', hueValue);
        onClose();
    };

    return (
        <div className="theme-modal">
            <div className="theme-modal-content">
                <h3>Select Theme</h3>
                <div className="theme-options">
                    <div className="theme-option" style={{ background: '#f44336' }} onClick={() => handleThemeChange('0')}></div>  
                    <div className="theme-option" style={{ background: '#4CAF50' }} onClick={() => handleThemeChange('120')}></div>  
                    <div className="theme-option" style={{ background: '#2196F3' }} onClick={() => handleThemeChange('204')}></div>  
                    <div className="theme-option" style={{ background: '#9C27B0' }} onClick={() => handleThemeChange('300')}></div> 
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ThemeModal;
