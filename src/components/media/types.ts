import type { StaticImageData } from "next/image";
import type { ElementType, Ref } from "react";

export interface Props {
  alt?: string;
  className?: string;
  fill?: boolean; // for NextImage only
  htmlElement?: ElementType | null;
  onClick?: () => void;
  onLoad?: () => void;
  loading?: "lazy" | "eager"; // for NextImage only
  priority?: boolean; // for NextImage only
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>;
  size?: string; // for NextImage only
  src?: StaticImageData; // for static media
  videoClassName?: string;
  videoPoster?: string;
}
