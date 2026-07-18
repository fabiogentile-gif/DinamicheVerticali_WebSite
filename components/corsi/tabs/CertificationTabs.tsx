type InfoItem = {
  icon?: string;
  title: string;
  content: React.ReactNode;
};

type CertificationInfoProps = {
  title?: string;
  items: InfoItem[];
};

export default function CertificationInfo({ title = 'Certificazione', items }: CertificationInfoProps) {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="font-semibold text-2xl uppercase  text-[#ff6316]">{title}</h3>
        <div className="mt-2 h-[2px] w-12 bg-[#ff6316]" />
      </div>

      <div className="space-y-5 text-[#1e1e1c]">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            {item.icon && (
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[#1e1e1c] text-[#ff6316]">
                {item.icon}
              </div>
            )}

            <div>
              <h4 className="font-semibold text-xl">{item.title}</h4>
              <div className="mt-1 text-sm leading-relaxed text-neutral-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}