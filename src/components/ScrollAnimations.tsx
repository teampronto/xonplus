
import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Uncomment the line below if you want elements to animate again when scrolling back
          // entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
      observer.observe(el);
    });

    // Parallax tilt effect for cards
    const handleTilt = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.parallex-tilt') as NodeListOf<HTMLElement>;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (centerY - y) / 20;
        const tiltY = (x - centerX) / 20;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
      });
    };
    
    const resetTilt = () => {
      const cards = document.querySelectorAll('.parallex-tilt') as NodeListOf<HTMLElement>;
      cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    };
    
    document.addEventListener('mousemove', handleTilt);
    document.addEventListener('mouseleave', resetTilt);
    
    return () => {
      animateElements.forEach(el => {
        observer.unobserve(el);
      });
      document.removeEventListener('mousemove', handleTilt);
      document.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  return null;
}
