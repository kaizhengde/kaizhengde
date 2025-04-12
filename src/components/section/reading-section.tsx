"use client";

import React, { useState, useRef, useEffect } from 'react';

type ReadingSectionProps = {
  children: React.ReactNode;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentDiv = divRef.current;
    if (!currentDiv) return;

    const calculateDynamicThreshold = () => {
      const viewportHeight = window.innerHeight;
      const rect = currentDiv.getBoundingClientRect();
      const relativeHeight = rect.height / viewportHeight;
      return relativeHeight > 1 ? 1 / relativeHeight : 1;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: calculateDynamicThreshold()
      }
    );

    observer.observe(currentDiv);

    return () => {
      observer.unobserve(currentDiv);
    };
  }, []);

  const sectionStyle = {
    backgroundColor: isVisible ? 'var(--kai-grey)' : 'transparent',
    transition: 'background-color 0.5s ease',
  };

  const divStyle = {
    backgroundColor: isVisible ? 'var(--kai-white)' : 'transparent',
    transition: 'background-color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className="content">
      <div ref={divRef} style={divStyle} className="layer-text">
        {children}
      </div>
    </section>
  );
};

export default ReadingSection;
