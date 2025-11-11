"use client";

import { useState } from "react";

export default function TickerCard() {
    const [hoveringCard, setHoveringCard] = useState(false);
    const [hoveringButton, setHoveringButton] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [timeframe, setTimeframe] = useState("1h");
    const [theme, setTheme] = useState("dark");

    return (
        <div
            onMouseEnter={() => setHoveringCard(true)}
            onMouseLeave={() => setHoveringCard(false)}
            className={`ticker-card ${hoveringCard ? "ticker-card--hover" : ""}`}
        >
            <div className={`ticker-card-overlay ${hoveringCard ? "ticker-card-overlay--hover" : ""}`}></div>

            <div className="ticker-card-header">
                <div className="ticker-card-header-content">
                    <div className="ticker-card-header-text">
                        <span className="text-white-500">Single Ticker</span> |{" "}
                        <span className="text-red-500">EURUSD</span>
                    </div>

                    <div className="ticker-card-header-buttons">
                        <button
                            className="ticker-card-header-button ticker-card-header-button--settings"
                            onClick={() => setShowSettings(true)}
                        >
                            ⚙️
                        </button>

                        <button className="ticker-card-header-button ticker-card-header-button--close">
                            ✕
                        </button>
                    </div>
                </div>
            </div>
            <div className="ticker-card-main">
                <div className="ticker-card-left">
                    <div className="ticker-card-icon">
                        🇪🇺
                    </div>
                    <div className="ticker-card-info">
                        <div className="ticker-card-symbol">EURUSD</div>
                        <div className="ticker-card-description">EURO / U.S. DOLLAR</div>
                    </div>
                </div>
                <div className="ticker-card-right">
                    <div className="ticker-card-price-container">
                        <div className="ticker-card-price">1.07400</div>
                        <div className="ticker-card-price-divider"></div>
                    </div>
                    <div className="ticker-card-change">
                        +0.00032
                        <span
                            onMouseEnter={() => setHoveringButton(true)}
                            onMouseLeave={() => setHoveringButton(false)}
                            className={`ticker-card-change-button ${hoveringButton ? "ticker-card-change-button--hover" : ""}`}
                        >
                            ▲ 0.03%
                        </span>
                    </div>
                </div>
            </div>
            {showSettings && (
                <div
                    className={`settings-modal-overlay ${showSettings ? 'settings-modal-overlay--active' : ''}`}
                    onClick={() => setShowSettings(false)}
                >
                    <div
                        className={`settings-modal ${showSettings ? 'settings-modal--active' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="settings-modal-header">
                            <h3 className="settings-modal-title">Settings</h3>
                            <button
                                className="settings-modal-close"
                                onClick={() => setShowSettings(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="settings-modal-content">
                            <div className="settings-dropdown-group">
                                <label className="settings-dropdown-label">
                                    Currency
                                </label>
                                <div className="dropdown-container">
                                    <select
                                        value={timeframe}
                                        onChange={(e) => setTimeframe(e.target.value)}
                                        className="settings-dropdown"
                                    >
                                        <option value="eurusd">EURUSD</option>
                                        <option value="gbpusd">GBPUSD</option>
                                        <option value="usdjpy">USDJPY</option>
                                    </select>
                                    <div className="dropdown-arrow">
                                        <svg className="dropdown-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-dropdown-group">
                                <label className="settings-dropdown-label">
                                    Price Layout
                                </label>
                                <div className="dropdown-container">
                                    <select
                                        value={theme}
                                        onChange={(e) => setTheme(e.target.value)}
                                        className="settings-dropdown"
                                    >
                                        <option value="BelowSymbol">Below Symbol</option>
                                        <option value="RightSide">Right Side</option>
                                    </select>
                                    <div className="dropdown-arrow">
                                        <svg className="dropdown-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}