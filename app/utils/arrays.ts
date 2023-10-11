import { Quiz } from "./questions-with-answers";

export function pickRandomItems<T>(arr: T[], amount = 3): T[] {
  if (arr.length <= amount) {
    // If the array has 2 or fewer items, return a copy of the array
    return [...arr];
  }

  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, amount);
}

export function shuffleArray<T>(arr: T[]): T[] {
  return arr.slice().sort(() => Math.random() - 0.5);
}

export const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();
