import { Mail, MapPin, Phone } from 'lucide-react';

export const profileImage = '/dipendenti/Valentina.png';
export const hotelOneImage = 'https://www.figma.com/api/mcp/asset/323961fd-1817-459c-8212-7ec90be896d6';
export const hotelTwoImage = 'https://www.figma.com/api/mcp/asset/00833d4c-3967-4082-8157-69bacde26dfc';

export const recentHotelOneImage = '/hotels/vadala-bed-&-breakfast.png';
export const recentHotelTwoImage = '/hotels/residenza-delle-alpi.png';
export const recentHotelThreeImage = '/hotels/cascina-marchesa.png';

export const contactItems = [
  {
    title: 'indirizzo',
    content: ['Via G. Battista Feroggio, 54', 'Torino'],
    href: 'https://maps.app.goo.gl/mvX8fzTo2s7VgBh6A',
    icon: MapPin,
  },
  {
    title: 'mail',
    content: ['formazione@petzl.it'],
    href: 'mailto:formazione@petzl.it',
    icon: Mail,
  },
  {
    title: 'telefono',
    content: ['+39 011 27 32 500'],
    href: 'tel:+390112732500',
    icon: Phone,
  },
];

export const partnerHotels = [
  {
    name: 'Agriturismo La Sforzata',
    address: 'Via Pianezza, 69',
    phone: '0114559880',
    email: 'info@lasforzata.com',
    website: 'https://www.lasforzata.com',
    image: hotelOneImage,
  },
  {
    name: 'Holiday Inn Hotel',
    address: 'Piazza Massaua 21',
    phone: '011740187',
    email: 'reservations@hiturin.it',
    website: 'https://www.hiturin.it',
    image: hotelTwoImage,
  },
];

export const recentPlaces = [
  {
    name: 'CASINA MARCHESA',
    address: 'Corso Regina Margherita 371/10',
    phone: '0114553515',
    email: 'info@cascinamarchesaresort.com',
    website: 'www.cascinamarchesaresort.com',
    image: recentHotelThreeImage,
  },
  {
    name: 'RESIDENZA DELLE ALPI',
    address: 'Via Privata Caselette 17',
    phone: '0114553515',
    email: 'info@residenzadellealpi.it',
    website: 'www.residenzadellealpi.it',
    image: recentHotelTwoImage,
  },
  {
    name: 'Vadalà Bed & Breakfast',
    address: 'Via Pianezza 178B',
    phone: '01173911686',
    image: recentHotelOneImage,
  },
];
