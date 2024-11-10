declare module '@dilrukr/react-text-scramble' {
    import { CSSProperties, ReactNode } from 'react';
  
    interface TextScrambleProps {
      texts?: string[];
      letterSpeed?: number;
      nextLetterSpeed?: number;
      paused?: boolean;
      pauseTime?: number;
      textStyles?: CSSProperties;
      containerStyle?: CSSProperties;
      scrambledColor?: string;
      revealedColor?: string;
      onAnimationEnd?: () => void;
      onTextScrambleComplete?: () => void;
      symbols?: string[];
    }
  
    const TextScramble: React.FC<TextScrambleProps>;
  
    export default TextScramble;
  }
  