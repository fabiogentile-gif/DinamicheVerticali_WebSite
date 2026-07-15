import Image from 'next/image';
import Link from 'next/link';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

type Hotel = {
  name: string;
  image: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
};

type HotelCardProps = {
  hotel: Hotel;
};

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="flex h-[480px] flex-col overflow-hidden rounded-xs border border-[#aaaaaa] bg-[#f7f7f7]">
      <div className="relative h-[220px] shrink-0 overflow-hidden">
        <Image src={hotel.image} alt={hotel.name} fill className="object-cover object-center" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[24px] font-semibold uppercase" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          {hotel.name}
        </h3>

        <div className="mt-5 space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6316]" />
            <span>{hotel.address}</span>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6316]" />
            <span>{hotel.phone}</span>
          </div>

          {hotel.email && (
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6316]" />
              <span className="break-all">{hotel.email}</span>
            </div>
          )}

          {hotel.website && (
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6316]" />

              <Link
                href={hotel.website}
                target="_blank"
                rel="noreferrer"
                className="break-all transition hover:text-[#ff6316]"
              >
                {hotel.website.replace(/^https?:\/\//, '')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
