/**
 * Format String Literal Classes to String Classes
 * @param str String
 * @returns String
 */

export function fslc(str: String) {
  return str
    .split("\n")
    .join("")
    .split("\t")
    .join("")
    .split(" ")
    .filter((a) => a.length > 1)
    .join(" ");
}
