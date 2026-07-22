import LinkButton from '@/components/ui/Linkbutton';

interface bannerProps {
  subtitle: string;
  title: string;
  buttonText: string;
  buttonHref: string;
}

export default function Banner({ subtitle, title, buttonText, buttonHref }: bannerProps) {
  return (
    <section className="bg-primary px-6 py-12 text-center text-white">
      <div className="container mx-auto flex flex-col items-center gap-5 px-5 text-center">
        <header>
          <h3 className="text-xl font-normal uppercase sm:text-[28px]">{subtitle}</h3>

          <h2 className="font-heading text-2xl font-bold uppercase text-white sm:text-4xl">{title}</h2>
        </header>

        <LinkButton title={buttonText} href={buttonHref} arrow />
      </div>
    </section>
  );
}
