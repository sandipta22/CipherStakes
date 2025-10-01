"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState, UIEvent } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [stepOffsets, setStepOffsets] = useState<number[]>([]);

  // Calculate scroll progress on scroll
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const total = scrollHeight - target.clientHeight;
    const current = Math.min(target.scrollTop, total); // Cap scrollTop to prevent overflow
    setProgress(total > 0 ? current / total : 0);
  };

  // Set scrollHeight to include symmetric padding and step offsets for checkpoints
  useEffect(() => {
    if (containerRef.current && data.length > 0) {
      const stepEls = Array.from(containerRef.current.querySelectorAll('.timeline-step')) as HTMLElement[];
      if (stepEls.length > 0) {
        // Get the offsetTop of the first step to use as symmetric padding
        const firstStepOffset = stepEls[0].offsetTop;
        // Set scrollHeight to the last checkpoint's offsetTop + its height + first step's offsetTop
        const lastStep = stepEls[stepEls.length - 1];
        const newScrollHeight = lastStep.offsetTop + lastStep.offsetHeight + firstStepOffset;
        setScrollHeight(newScrollHeight);
        // Calculate the offsetTop for each step
        setStepOffsets(stepEls.map(el => el.offsetTop + el.offsetHeight / 2));
        // Adjust container's padding-bottom to match the last checkpoint
        containerRef.current.style.paddingBottom = `${firstStepOffset}px`;
      }
    }
  }, [data]);

  // Themed colors
  const checkpointActive = 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-400/30 border-2 border-cyan-400';
  const checkpointInactive = 'bg-neutral-800 border border-neutral-700';

  return (
    <div
      className="w-full font-sans relative min-w-[300px] h-full bg-transparent"
      ref={containerRef}
      onScroll={handleScroll}
      style={{ overflowY: 'auto', maxHeight: '100%' }}
    >
      {/* Timeline vertical progress line */}
      <div
        className="pointer-events-none absolute md:left-8 left-8 top-0 w-[2px] z-0"
        style={{ height: scrollHeight }}
      >
        <motion.div
          style={{
            height: progress * scrollHeight,
            opacity: 1,
            transition: 'height 0.2s',
          }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-400 via-blue-500 to-purple-500 from-[0%] via-[40%] rounded-full shadow-cyan-400/30"
        />
      </div>
      <div className="relative z-10">
        {data.map((item, index) => {
          // Determine if this checkpoint is reached
          const checkpointReached = stepOffsets[index] !== undefined && (progress * scrollHeight) >= stepOffsets[index];
          return (
            <div
              key={index}
              className="timeline-step flex justify-start py-20 md:py-32 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${checkpointReached ? 'scale-110' : ''}`}
                  >
                  <div className={`h-4 w-4 rounded-full p-2 transition-all duration-300 ${checkpointReached ? checkpointActive : checkpointInactive}`} />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-cyan-400 drop-shadow-[0_1.5px_4px_rgba(0,255,255,0.25)] ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-cyan-400 drop-shadow-[0_1.5px_4px_rgba(0,255,255,0.25)]">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};