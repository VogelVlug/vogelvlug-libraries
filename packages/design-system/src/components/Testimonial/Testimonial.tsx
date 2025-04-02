"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { useDesignSystem } from "../../provider/DesignSystemProvider";
import { Typography } from "../Typography/Typography";

interface TestimonialProps {
  imageSrc: string;
  name: string;
  tagline?: string;
  link?: string;
  text: string;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  imageSrc,
  name,
  tagline,
  link,
  text,
  className,
}) => {
  const { LinkElement, ImageElement } = useDesignSystem();

  return (
    <div
      className={cn(
        "flex w-80 flex-col gap-4 rounded border border-default bg-surface p-6 shadow-md",
        className,
      )}
    >
      <div className="flex gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <ImageElement
            src={imageSrc}
            width={48}
            height={48}
            alt={`${name}'s testimonial`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-0">
          <Typography element="h4" variant="h5" text={name} />

          {tagline && link && (
            <LinkElement href={link}>
              <Typography element="p" variant="subtitle" text={tagline} />
            </LinkElement>
          )}

          {tagline && !link && (
            <Typography element="p" variant="subtitle" text={tagline} />
          )}
        </div>
      </div>

      <Typography element="p" variant="body" text={text} />
    </div>
  );
};
