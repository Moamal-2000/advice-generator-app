"use strict";

// Selectors
const numberOfAdv = document.querySelector(".advices-box .number-of-advices span");
const adviceEle = document.querySelector(".advices-box .advice");
const prevAdv = document.querySelector(".advices-box .prev-advice");
const nextAdv = document.querySelector(".advices-box .next-advice");

// Variables
const advices = [
  { id: 32, advice: "Take care of your mental health." },
  { id: 139, advice: "Don't be afraid to ask for help when needed." },
  { id: 150, advice: "Practice kindness daily." },
  { id: 92, advice: "Spend time in nature." },
  { id: 54, advice: "Embrace failure as a teacher." },
  { id: 120, advice: "Believe in yourself and your abilities." },
  { id: 77, advice: "Stay present and mindful." },
  { id: 68, advice: "Learn to communicate effectively." },
  { id: 5, advice: "Find ways to give back to your community." },
  { id: 49, advice: "Develop a growth mindset." },
  { id: 26, advice: "Read daily for personal growth." },
  { id: 163, advice: "Set realistic goals and work towards them." },
  { id: 9, advice: "Take calculated risks for growth." },
  { id: 103, advice: "Challenge yourself to grow." },
  { id: 22, advice: "Don't compare yourself to others." },
  { id: 129, advice: "Take care of your physical health." },
  { id: 153, advice: "Keep a positive mindset." },
  { id: 72, advice: "Follow your passion, not the crowd." },
  { id: 61, advice: "Keep things simple and don't overthink." },
  { id: 42, advice: "Celebrate small wins along the way." },
  { id: 51, advice: "Face your fears to overcome them." },
  { id: 155, advice: "Surround yourself with positive people." },
  { id: 140, advice: "Learn to manage your time well." },
  { id: 162, advice: "Invest in your personal and professional development." },
  { id: 19, advice: "Take breaks for better productivity." },
  { id: 83, advice: "Be yourself, everyone else is taken." },
  { id: 95, advice: "Don't be afraid to try new things." },
  { id: 118, advice: "Be mindful of your thoughts and words." },
  { id: 45, advice: "Travel and explore new cultures." },
  { id: 156, advice: "Cultivate meaningful relationships." },
  { id: 167, advice: "Prioritize self-care." },
  { id: 165, advice: "Seek feedback for improvement." },
  { id: 37, advice: "Stay curious and open-minded." },
  { id: 105, advice: "Never stop learning." },
  { id: 89, advice: "Take responsibility for your actions." },
  { id: 166, advice: "Practice self-discipline." },
  { id: 79, advice: "Keep a gratitude journal." },
  { id: 48, advice: "Learn from your mistakes." },
  { id: 93, advice: "Build a strong work ethic." },
  { id: 167, advice: "Prioritize self-care." },
  { id: 128, advice: "Don't be afraid to ask for help when needed." },
  { id: 58, advice: "Spend time in nature." },
  { id: 34, advice: "Set boundaries and stick to them." },
  { id: 135, advice: "Focus on progress, not perfection." },
  { id: 90, advice: "Practice active listening in conversations." },
  { id: 159, advice: "Keep a positive attitude towards challenges." },
  { id: 44, advice: "Invest in meaningful experiences, not just things." },
  { id: 147, advice: "Learn to forgive yourself and others." },
  { id: 70, advice: "Take time to reflect on your experiences." },
  { id: 66, advice: "Choose your battles wisely." },
  { id: 141, advice: "Don't be afraid to say no when necessary." },
  { id: 81, advice: "Make time for hobbies and interests outside of work." },
  { id: 143, advice: "Develop healthy habits for better well-being." },
  { id: 98, advice: "Take action towards your goals, no matter how small." },
  { id: 150, advice: "Practice kindness daily." },
  { id: 125, advice: "Learn from successful people in your field." },
  { id: 152, advice: "Surround yourself with those who lift you up." },
  { id: 28, advice: "Take care of your emotional well-being." },
  { id: 63, advice: "Learn to handle stress in healthy ways." },
  { id: 97, advice: "Practice active self-reflection for personal growth." },
  { id: 121, advice: "Don't let fear hold you back." },
  { id: 8, advice: "Find a mentor or role model for guidance." },
  { id: 72, advice: "Follow your passion, not the crowd." },
  { id: 6, advice: "Volunteer for a cause you believe in." },
  { id: 160, advice: "Focus on what you can control, let go of what you can't.",},
  { id: 36, advice: "Stay organized for better productivity." },
  { id: 107, advice: "Be resilient in the face of challenges." },
  { id: 67, advice: "Learn to manage stress and avoid burnout." },
  { id: 99, advice: "Learn to adapt to change." },
  { id: 78, advice: "Practice self-compassion." },
  { id: 142, advice: "Invest in your mental and physical health." },
  { id: 2, advice: "Make time for the people you care about." },
  { id: 24, advice: "Embrace your unique qualities." },
  { id: 111, advice: "Take care of your financial well-being." },
  { id: 64, advice: "Stay humble and open to feedback." },
  { id: 75, advice: "Focus on the present moment, not the past or future." },
];

let numberOfAdvice = 0

const numberOfAdviceLocal = localStorage.getItem('numberOfAdvice')
if (numberOfAdviceLocal) numberOfAdvice = numberOfAdviceLocal







// Functions
function handleAdvice(data, i, button) {
  const { id, advice } = data[i];
  const lettersLimitation = 70;
  const prevBtnCondition = numberOfAdvice === 0 && button.classList.contains('prev-advice')
  const nextBtnCondition = numberOfAdvice === advices.length - 1 && button.classList.contains('next-advice')

  let adviceText = advice;


  if (prevBtnCondition || nextBtnCondition) return


  if (advice.length >= lettersLimitation)
    adviceText = `${advice.slice(0, lettersLimitation)}...`;


  numberOfAdv.innerHTML = id;
  adviceEle.innerHTML = adviceText;
  adviceEle.title = advice;


  button.classList.contains('next-advice')
  ? numberOfAdvice++
  : numberOfAdvice--
  localStorage.setItem('numberOfAdvice', i)
}
handleAdvice(advices, numberOfAdvice, nextAdv)






// Events
nextAdv.addEventListener("click", () => {
  setTimeout(() => {
    handleAdvice(advices, numberOfAdvice, nextAdv)
  }, 300);
});

prevAdv.addEventListener("click", () => {
  setTimeout(() => {
    handleAdvice(advices, numberOfAdvice, prevAdv)
  }, 300);
});
