import React from 'react';

interface TileContentProps {
  imageIndex: string;
}

export const TileContent = ({ imageIndex }: TileContentProps) => {
  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, '0');
  return (
    <div>
      imageIndex: {imageIndex}
      {/* <img
        className="imageTile"
        src={`assets/images/1860-${zeroPad(parseInt(imageIndex, 10), 3)}.jpg`}
      /> */}
    </div>
  );
};
