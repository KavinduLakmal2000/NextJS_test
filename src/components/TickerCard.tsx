"use client";

import { useState } from "react";

export default function TickerCard() {
    const [hoveringCard, setHoveringCard] = useState(false);
    const [hoveringButton, setHoveringButton] = useState(false);

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
                        <button className="ticker-card-header-button ticker-card-header-button--settings">
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
        </div>
    );
}