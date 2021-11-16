/**
 * Takes a year number and returns whether it is a leap year.
 *
 * @param {number} year The year to identify as leap year
 */
 export const isLeapYear = (year: number): boolean => {
  if (year % 400 == 0) return true;
  if (year % 100 == 0) return false;
  return year % 4 == 0;
};

export enum Part {
  first = 'first',
  second = 'second',
}

/**
 * Takes a year as string and returns a sentence describing whether it is a leap year.
 * Can only return a part of the sentence if desired.
 *
 * @param {string} year The year to identify as leap year
 * @param {Part} part The part to return if not the entire string should be returned
 * @returns
 */
const leapYearText = (year: string, part?: Part): string => {
  const isL = isLeapYear(parseInt(year, 10));

  const firstPart = `The year ${year}`;
  const secondPart = `is ${isL ? "a" : "no"} leap year ${isL ? "🎉!" : "😕."}`;

  switch(part) {
    case Part.first:
      return firstPart;
    case Part.second:
      return secondPart;
    default:
      return `${firstPart} ${secondPart}`;
  }
};

export default leapYearText;
