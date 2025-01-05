import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
}
export function getToken() {
  return localStorage.getItem("token");
}

export function filterUndefinedFields<T extends object>(data: T): T {
  return Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== undefined),
  ) as T;
}
