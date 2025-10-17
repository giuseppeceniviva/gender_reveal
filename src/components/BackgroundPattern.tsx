import './BackgroundPattern.css';

interface BackgroundPatternProps {
  type: 'hearts' | 'stars' | 'balloons' | 'neutral';
}

export const BackgroundPattern = ({ type }: BackgroundPatternProps) => {
  if (type === 'neutral') return null;

  const getEmojis = () => {
    switch (type) {
      case 'hearts':
        return ['💙', '💖', '💛', '💚', '🤍'];
      case 'stars':
        return ['⭐', '✨', '🌟', '💫', '🌠'];
      case 'balloons':
        return ['🎈', '🎉', '🎊', '🎁', '🎀'];
      default:
        return [];
    }
  };

  const emojis = getEmojis();
  const numberOfEmojis = 15;

  return (
    <div className="background-pattern" aria-hidden="true">
      {Array.from({ length: numberOfEmojis }).map((_, index) => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomSize = 1.5 + Math.random() * 2;
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 10;

        return (
          <span
            key={index}
            className="pattern-emoji"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              fontSize: `${randomSize}rem`,
              animationDelay: `${randomDelay}s`,
              animationDuration: `${randomDuration}s`
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};
