'use client';

import { useState, useEffect } from 'react';

/**
 * TAYKA - Calm Zone
 * Sensory emergency button for children with autism
 * - Accessible at any time
 * - Calming environment with soft colors
 * - Breathing guide
 * - Optional nature sounds
 * - No pressure or timers
 */

export default function CalmZone() {
  const [isOpen, setIsOpen] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale'); // inhale, hold, exhale
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Breathing cycle: 4s inhale, 4s hold, 4s exhale
  useEffect(() => {
    if (!isOpen) return;

    const breathingCycle = setInterval(() => {
      setBreathingPhase(current => {
        if (current === 'inhale') return 'hold';
        if (current === 'hold') return 'exhale';
        return 'inhale';
      });
    }, 4000);

    return () => clearInterval(breathingCycle);
  }, [isOpen]);

  const getBreathingText = () => {
    switch(breathingPhase) {
      case 'inhale': return '🌬️ Breathe in gently';
      case 'hold': return '⏸️ Hold';
      case 'exhale': return '😌 Breathe out slowly';
      default: return '';
    }
  };

  const getBreathingEmoji = () => {
    switch(breathingPhase) {
      case 'inhale': return '🌬️';
      case 'hold': return '⏸️';
      case 'exhale': return '😌';
      default: return '🌙';
    }
  };

  return (
    <>
      {/* Floating button - always visible */}
      <button
        className="calm-zone-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open calm zone"
        title="Need a calm moment?"
      >
        <span className="calm-emoji">🌙</span>
      </button>

      {/* Calm zone modal */}
      {isOpen && (
        <div className="calm-modal">
          <div className="calm-content">
            {/* Close button */}
            <button
              className="close-calm-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close calm zone"
            >
              ✕
            </button>

            {/* Title */}
            <div className="calm-header">
              <h2 className="calm-title">
                <span className="title-emoji">🌙</span>
                Calm Zone
              </h2>
              <p className="calm-subtitle">
                Take all the time you need
              </p>
            </div>

            {/* Círculo de respiración */}
            <div className="breathing-container">
              <div className={`breathing-circle ${breathingPhase}`}>
                <span className="breathing-emoji">
                  {getBreathingEmoji()}
                </span>
              </div>
              <p className="breathing-text">
                {getBreathingText()}
              </p>
            </div>

            {/* Calming activities */}
            <div className="calm-activities">
              {/* Simple visual counter */}
              <div className="activity-card">
                <span className="activity-emoji">✨</span>
                <p className="activity-text">Watch the stars</p>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="floating-star"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft colors */}
              <div className="activity-card">
                <span className="activity-emoji">🎨</span>
                <p className="activity-text">Calm colors</p>
                <div className="color-orbs">
                  <div className="color-orb" style={{ background: '#E1BEE7' }} />
                  <div className="color-orb" style={{ background: '#B2DFDB' }} />
                  <div className="color-orb" style={{ background: '#C5E1A5' }} />
                  <div className="color-orb" style={{ background: '#FFF9C4' }} />
                </div>
              </div>

              {/* Sound toggle */}
              <div className="activity-card">
                <span className="activity-emoji">🔊</span>
                <p className="activity-text">Nature sounds</p>
                <button
                  className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
                  onClick={() => setSoundEnabled(!soundEnabled)}
                >
                  {soundEnabled ? '🔊 On' : '🔇 Off'}
                </button>
              </div>
            </div>

            {/* Support message */}
            <div className="support-message">
              <p className="support-text">
                💚 It's okay to take a break.
                <br />
                Come back when you feel ready.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Botón flotante */
        .calm-zone-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #E1BEE7, #CE93D8);
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(206, 147, 216, 0.4);
          transition: all 400ms ease;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .calm-zone-button:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 32px rgba(206, 147, 216, 0.5);
        }
        .calm-emoji {
          font-size: 36px;
          animation: gentle-glow 3s ease-in-out infinite;
        }
        @keyframes gentle-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.8));
            transform: scale(1.05);
          }
        }
        /* Modal */
        .calm-modal {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #E8EAF6, #F3E5F5, #E1BEE7);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fade-in 600ms ease;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .calm-content {
          max-width: 600px;
          width: 100%;
          position: relative;
        }
        /* Botón cerrar */
        .close-calm-btn {
          position: absolute;
          top: 0;
          right: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          font-size: 24px;
          cursor: pointer;
          transition: all 300ms ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }
        .close-calm-btn:hover {
          transform: scale(1.1) rotate(90deg);
          background: white;
        }
        /* Header */
        .calm-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .calm-title {
          font-family: 'Fredoka', 'Nunito', sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #4A148C;
          margin: 0 0 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .title-emoji {
          font-size: 48px;
          animation: gentle-float 4s ease-in-out infinite;
        }
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .calm-subtitle {
          font-size: 18px;
          color: #6A1B9A;
          margin: 0;
          font-weight: 600;
        }
        /* Círculo de respiración */
        .breathing-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 48px;
        }
        .breathing-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(225, 190, 231, 0.5));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(156, 39, 176, 0.2);
          margin-bottom: 24px;
        }
        .breathing-circle.inhale {
          animation: breathe-in 4s ease-in-out;
        }
        .breathing-circle.hold {
          animation: breathe-hold 4s ease-in-out;
        }
        .breathing-circle.exhale {
          animation: breathe-out 4s ease-in-out;
        }
        @keyframes breathe-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
        @keyframes breathe-hold {
          0%, 100% { transform: scale(1.2); }
        }
        @keyframes breathe-out {
          0% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .breathing-emoji {
          font-size: 64px;
        }
        .breathing-text {
          font-family: 'Fredoka', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #4A148C;
          margin: 0;
        }
        /* Actividades */
        .calm-activities {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .activity-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        .activity-emoji {
          font-size: 40px;
          display: block;
          margin-bottom: 12px;
        }
        .activity-text {
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #4A148C;
          margin: 0 0 16px 0;
        }
        /* Estrellas flotantes */
        .stars-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          min-height: 40px;
        }
        .floating-star {
          font-size: 24px;
          display: inline-block;
          animation: float-star 3s ease-in-out infinite;
        }
        @keyframes float-star {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 1;
          }
        }
        /* Orbes de color */
        .color-orbs {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .color-orb {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: pulse-orb 2s ease-in-out infinite;
        }
        .color-orb:nth-child(2) { animation-delay: 0.5s; }
        .color-orb:nth-child(3) { animation-delay: 1s; }
        .color-orb:nth-child(4) { animation-delay: 1.5s; }
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        /* Toggle de sonido */
        .sound-toggle {
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 300ms ease;
          background: #E0E0E0;
          color: #5A6C7D;
        }
        .sound-toggle.active {
          background: linear-gradient(135deg, #B2DFDB, #80CBC4);
          color: #004D40;
        }
        .sound-toggle:hover {
          transform: scale(1.05);
        }
        /* Mensaje de apoyo */
        .support-message {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        .support-text {
          font-family: 'Nunito', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #4A148C;
          margin: 0;
          line-height: 1.6;
        }
        /* Responsive */
        @media (max-width: 640px) {
          .calm-title {
            font-size: 32px;
          }
          .breathing-circle {
            width: 160px;
            height: 160px;
          }
          .breathing-emoji {
            font-size: 48px;
          }
          .breathing-text {
            font-size: 20px;
          }
          .calm-activities {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
