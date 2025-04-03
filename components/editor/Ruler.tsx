import { useRef, useState } from "react";
import Marker from "./Marker";
import { useStorage, useMutation } from "@liveblocks/react";
import { DEFAULT_MARGIN, MIN_GAP } from "@/constant";

const markers = Array.from({ length: 83 }, (_, i) => i);

const Ruler = () => {
  const leftMargin = useStorage((root) => root.leftMargin) || DEFAULT_MARGIN;
  const rightMargin = useStorage((root) => root.rightMargin) || DEFAULT_MARGIN;
  const setLeftMargin = useMutation(({ storage }, position: number) => {
    storage.set("leftMargin", position);
  }, []);
  const setRightMargin = useMutation(({ storage }, position: number) => {
    storage.set("rightMargin", position);
  }, []);

  const rulerRef = useRef<HTMLDivElement>(null);
  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const rawPosition = Math.max(10, Math.min(relativeX, 816));

        if (isDraggingLeft) {
          const maxLeftPosition = 816 - rightMargin - MIN_GAP;
          const newLeftPosition = Math.min(rawPosition, maxLeftPosition);
          setLeftMargin(newLeftPosition);
        } else if (isDraggingRight) {
          const maxRightPosition = 816 - leftMargin - MIN_GAP;
          const newRightPosition = Math.max(816 - rawPosition, 0);
          const contraintedRightPosition = Math.min(
            newRightPosition,
            maxRightPosition
          );
          setRightMargin(contraintedRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-[816px] mx-auto h-6 border-b border-gray-300 flex items-end relative select-none print:hidden"
    >
      <div id="ruler-container" className="w-full h-full relative">
        <Marker
          position={leftMargin}
          isLeft
          isDragging={isDraggingLeft}
          onMouseDown={() => setIsDraggingLeft(true)}
          onDoubleClick={() => setLeftMargin(DEFAULT_MARGIN)}
        />
        <Marker
          position={rightMargin}
          isDragging={isDraggingRight}
          onMouseDown={() => setIsDraggingRight(true)}
          onDoubleClick={() => setRightMargin(DEFAULT_MARGIN)}
        />
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full w-[816px]">
            {markers.map((m) => {
              const pos = (m * 816) / 82;
              return (
                <div
                  key={m}
                  className="absolute bottom-0"
                  style={{ left: `${pos}px` }}
                >
                  {m % 10 === 0 && (
                    <>
                      <div className="abolute bottom-0 w-[1px] h-2 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                        {m}
                      </span>
                    </>
                  )}
                  {m % 5 === 0 && m % 10 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                  )}
                  {m % 5 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruler;
