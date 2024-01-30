import { useState, useRef, useEffect } from 'react';

interface TextSectionProps {
  children: React.ReactNode;
}

const TextSection: React.FC<TextSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        setIsVisible(firstEntry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    const currentSection = divRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const sectionStyle = {
    backgroundColor: isVisible ? 'var(--kai-grey)' : 'transparent',
    transition: 'background-color 0.5s ease'
  };

  const divStyle = {
    backgroundColor: isVisible ? 'var(--kai-white)' : 'transparent',
    transition: 'background-color 0.5s ease'
  };

  return (
    <section style={sectionStyle} className="content">
      <div ref={divRef} style={divStyle} className="layer-text">
        {children}
      </div>
    </section>
  );
};

export default TextSection;