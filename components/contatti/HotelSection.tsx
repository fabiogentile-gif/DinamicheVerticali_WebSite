import HotelCard from './HotelCard';

type Hotel = {
  name: string;
  image: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
};

type HotelSectionProps = {
  hotels: Hotel[];
  columns?: string;
  imageHeight?: string;
  titleSize?: string;
  minHeight?: string;
};

export default function HotelSection({
  hotels,
  columns = 'lg:grid-cols-2',
}: HotelSectionProps) {
  return (
    <div className={`grid items-stretch gap-6 ${columns}`}>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.name}
          hotel={hotel}
        />
      ))}
    </div>
  );
}