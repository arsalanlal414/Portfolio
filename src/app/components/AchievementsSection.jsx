"use client"
import React, { useState, useEffect } from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    postfix: "+",
    metric: "Certifications",
    value: "17",
  },
  {
    metric: "Git Repositories",
    value: "50",
  },
  {
    postfix: "+",
    metric: "Years",
    value: "3",
  }
];

const AchievementsSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([]);

  useEffect(() => {
    const animations = achievementsList.map((achievement) => ({
      start: 0,
      end: parseInt(achievement.value.replace(",", "")),
      stepSize: 50, 
      interval: 0,
    }));

    // Trigger animations
    animations.forEach((animation, index) => {
      animateNumbers(animation, index);
    });

    setAnimatedNumbers(animations);

    // Clean up intervals on unmount
    return () => {
      animations.forEach((animation) => {
        clearInterval(animation.interval);
      });
    };
  }, []);

  const animateNumbers = (animation, index) => {
    let current = animation.start;
    const step = animation.stepSize / Math.abs(animation.end - current);

    animation.interval = setInterval(() => {
      current += step;
      if (current >= animation.end) {
        current = animation.end;
        clearInterval(animation.interval);
      }
      setAnimatedNumbers(prevAnimations => {
        const newAnimations = [...prevAnimations];
        newAnimations[index].start = current;
        return newAnimations;
      });
    }, 50); // Adjust interval for smoother animation
  };

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <span className="animated-number">
                {animatedNumbers[index] && Math.abs(Math.round(animatedNumbers[index].start)).toLocaleString()}
              </span>
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;