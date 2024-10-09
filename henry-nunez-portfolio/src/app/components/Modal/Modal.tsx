"use client";
import React, { useState } from "react";
import "./styles.css";

export const Modal = ({
  isOpen,
  onClose,
  children,
  closeName,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeName: string;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    debugger;
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      debugger;
      setIsClosing(false);
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div
        className={`modal-content ${isClosing ? "closing" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <button className="modal-close-button" onClick={handleClose}>
          {closeName}
        </button>
        {children}
      </div>
    </div>
  );
};
