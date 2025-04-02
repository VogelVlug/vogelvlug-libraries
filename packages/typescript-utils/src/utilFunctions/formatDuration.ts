/**
 * Formats the given duration in milliseconds into a string representation of hours, minutes, and seconds.
 *
 * @param {number} milliseconds - The duration in milliseconds to be formatted.
 * @return {string} The formatted duration string in the format "hh:mm:ss" or "mm:ss" if the duration is less than one hour.
 */
export function formatDuration(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;

  if (hours === 0) {
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  } else {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(
      2,
      "0"
    )}`;
  }
}
