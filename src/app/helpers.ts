import {
  BP_XLARGE_MIN,
  BP_LARGE_MIN,
  BP_MEDIUM_MIN,
  BP_SMALL_MIN,
  BASE_FONT_SIZE,
} from "./constants";

type BreakpointQueries = (
  viewport:
    | "s"
    | "sm"
    | "small"
    | "m"
    | "md"
    | "medium"
    | "l"
    | "lg"
    | "large"
    | "xl"
    | "xlarge"
) => string;

/**
 * Return media queries of specific breakpoint.
 * @param viewport
 * @returns Breakpoint queries
 */
export const bp: BreakpointQueries = (viewport) => {
  switch (viewport.toLowerCase()) {
    case "xl":
    case "xlarge":
      return `(min-width: ${BP_XLARGE_MIN}px)`;

    case "l":
    case "lg":
    case "large":
      return `(min-width: ${BP_LARGE_MIN}px) and (max-width: ${
        BP_XLARGE_MIN - 1
      }px)`;

    case "m":
    case "md":
    case "medium":
      return `(min-width: ${BP_MEDIUM_MIN}px) and (max-width: ${
        BP_LARGE_MIN - 1
      }px)`;

    case "s":
    case "sm":
    case "small":
    default:
      return `(min-width: ${BP_SMALL_MIN}px) and (max-width: ${
        BP_MEDIUM_MIN - 1
      }px)`;
  }
};

/**
 * Convert size of unit-based px to rem.
 * @param {number | string} px Size in px
 * @returns {string} Size as rem
 */
export const pxToRem = (px: number | string): string => {
  let pxSize = px;

  if (typeof px === "string") {
    let pxString: string = px;

    const paramHasUnit: boolean = new RegExp(/.*px$/i).test(pxString);
    if (paramHasUnit) {
      pxString = pxString.substring(0, pxString.length - 2);
    }

    pxSize = parseInt(pxString);
  }

  return `${(pxSize as number) / BASE_FONT_SIZE}rem`;
};
