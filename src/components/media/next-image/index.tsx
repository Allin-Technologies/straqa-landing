"use client";

import type { StaticImageData } from "next/image";

import { cn } from "@/utilities/ui";
import NextImage from "next/image";
import React from "react";

import type { Props as MediaProps } from "../types";

import { cssVariables } from "@/cssVariables";
// import { getClientSideURL } from "@/utilities/getURL";

const { breakpoints } = cssVariables;

// A base64 encoded image to use as a placeholder while the image is loading
const placeholderBlur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7dFBAQAgDAChaYn1j2Mra9wDKnB29w0Zd0gREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMk5gMLSwHWjSlCZgAAAABJRU5ErkJggg==";

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    className,
    priority,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props;

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || "";

  const loading = loadingFromProps || (!priority ? "lazy" : undefined);

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(", ");

  return (
    <NextImage
      alt={alt || ""}
      className={cn(className)}
      fill={fill}
      height={!fill ? height : undefined}
      placeholder='blur'
      blurDataURL={placeholderBlur}
      priority={priority}
      quality={100}
      loading={loading}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  );
};
