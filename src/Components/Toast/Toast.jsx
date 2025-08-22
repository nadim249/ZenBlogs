import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // match animation duration
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]); // 👈 depend on message, so it reruns for new toasts

  const bgColor =
    type === 'success'
      ? 'bg-green-500 text-white'
      : 'bg-red-500 text-white';

  return (
    <div
      className={`fixed top-20 right-4 z-50 transform transition-all duration-300 ease-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
    >
      <div
        className={`${bgColor} px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2`}
      >
        {type === 'success' ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
