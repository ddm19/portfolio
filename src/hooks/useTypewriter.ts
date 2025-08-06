import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 150,
  deletingSpeed = 50,
  delay = 2000
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | undefined>(0);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const isFinished = !isDeleting && text === current;
    const isEmpty = isDeleting && text === '';

    const next = () => {
      if (isFinished) {
        timeoutRef.current = window.setTimeout(() => setIsDeleting(true), delay);
        return;
      }
      if (isEmpty) {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        return;
      }

      const delta = isDeleting
        ? deletingSpeed
        : typingSpeed;
      const nextText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      timeoutRef.current = window.setTimeout(() => {
        setText(nextText);
      }, delta);
    };

    next();

    return () => window.clearTimeout(timeoutRef.current);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
}
