import React, { useEffect } from 'react';

interface NoticeSliderProps {
  notices: {
    id: number;
    text: string;
  }[];
  speed?: number; // Animation speed in seconds (default: 25)
  className?: string;
}

const NoticeSlider: React.FC<NoticeSliderProps> = ({
  notices,
  speed = 25,
  className = '',
}) => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  if (!notices.length) return null;

  return (
    <section 
      className={`notice-slider ${className}`}
      aria-label="Latest updates"
    >
      <div 
        className="marquee-content"
        style={{ animationDuration: `${speed}s` }}
      >
        {notices.map((notice, index) => (
          <span key={notice.id} className="notice-item">
            {notice.text}
            {index !== notices.length - 1 && (
              <span className="separator">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Accessibility: Hidden live region for screen readers */}
      <div aria-live="polite" className="visually-hidden">
        Latest updates: {notices.map(n => n.text).join(', ')}
      </div>
    </section>
  );
};

const styles = `
  .notice-slider {
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    overflow: hidden;
    position: relative;
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .marquee-content {
    display: inline-block;
    white-space: nowrap;
    animation: marquee linear infinite;
    padding-left: 100%;
  }

  .notice-item {
    display: inline-flex;
    align-items: center;
    margin-right: 40px;
    color: #2d5a27;
    opacity: 0.9;
  }

  .separator {
    margin: 0 20px;
    opacity: 0.3;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .notice-slider:hover .marquee-content {
    animation-play-state: paused;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default NoticeSlider;
