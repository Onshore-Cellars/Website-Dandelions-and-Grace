import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  height?: "default" | "large" | "full";
  overlay?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  cta,
  secondaryCta,
  height = "default",
  overlay = true,
}) => {
  const heights = {
    default: "h-[70vh] min-h-[500px]",
    large: "h-[85vh] min-h-[600px]",
    full: "h-screen",
  };

  return (
    <div className={`relative ${heights[height]} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        )}
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-white mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {description}
            </p>
          )}
          {(cta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {cta && (
                <Link href={cta.href}>
                  <Button size="lg" variant="primary">
                    {cta.text}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900">
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
