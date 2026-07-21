export function kebab(str: string) {
  return str.split(" ").map(Boolean).join("-").toLowerCase();
}
