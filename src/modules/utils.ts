/**
 * Format Tailwind Classes String Literal
 * @param str String
 * @returns String
 */

export function fsc(str: String) {
  return str
    .split("\n")
    .join("")
    .split("\t")
    .join("")
    .split(" ")
    .filter((a) => a.length > 1)
    .join(" ");
}
