import { Play } from "lucide-react";
import Image from "next/image";

interface CourseVideoProps {
  title: string;
  subtitle: string;
  videoUrl: string;
  thumbnail?: string;
}

export default function CourseVideo({
  title,
  subtitle,
  videoUrl,
  thumbnail = '/video-mock/video-image-mock.avif',
}: CourseVideoProps) {
  return (
    <section className="bg-background-lighter py-7">
      <div className="container mx-auto px-5">

        <header className="mb-8 text-center">
          <p className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">
            {title}
          </p>

          <h2 className="mt-2 font-heading text-4xl font-bold uppercase">
            {subtitle}
          </h2>
        </header>

        <div className="mx-auto aspect-video max-w-5xl overflow-hidden border border-border">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full w-full items-center justify-center"
          >
            <Image
              width={1600}
              height={900}
              src={thumbnail}
              alt={subtitle}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition group-hover:scale-110">
              <Play className="ml-1" size={36} fill="currentColor" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}