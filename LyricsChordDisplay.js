import React from 'react';

const LyricsChordsDisplay = ({ lyrics, chords }) => {
  return (
    <div className="lyrics-chords-display p-4 rounded-xl bg-black/30">
      <h3 className="text-lg font-semibold mb-4">Lyrics & Chords</h3>
      <div className="lyrics">
        {lyrics.split('\n').map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>
      <div className="chords mt-4">
        {chords.split('\n').map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default LyricsChordsDisplay;
