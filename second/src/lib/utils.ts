import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitTokenName(token: string) {
  return token.split("|").slice(-1).join("");
}

export function getSessionPath(): string {
  return `${process.cwd()}/session`;
}
