/**
 * Datos reales del negocio. TODO: confirmar con Motocenter antes de publicar.
 * Los valores actuales son los que venían cargados en el proyecto original;
 * no están verificados contra una fuente oficial del negocio.
 */

// TODO: confirmar número real de WhatsApp del negocio
export const WA_NUMBER = '59899597332';
export const DISPLAY_PHONE = '099 597 332';

export const WA_DEFAULT_MESSAGE = 'Hola Motocenter, quería consultar por...';

export function buildWhatsAppLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINK = buildWhatsAppLink();

// TODO: confirmar dirección exacta con Motocenter
export const ADDRESS = {
  street: 'Uruguay 923',
  locality: 'Trinidad',
  region: 'Flores',
  postalCode: '85000',
  country: 'Uruguay',
  full: 'Uruguay 923, Trinidad, Flores',
};

export const MAPS_LINK = `https://maps.google.com/?q=${encodeURIComponent(`${ADDRESS.street} ${ADDRESS.locality} ${ADDRESS.region} Uruguay`)}`;

// TODO: reemplazar por el embed real de Google Maps una vez confirmada la dirección exacta
export const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9!2d-56.8999!3d-33.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzI5LjgiUyA1NsKwNTMnNTkuNiJX!5e0!3m2!1ses!2suy!4v1234567890';

// TODO: confirmar horarios reales de atención
export interface DaySchedule {
  day: string;
  hours: string;
  open: boolean;
}

export const SCHEDULE: DaySchedule[] = [
  { day: 'Lunes', hours: '09:00 – 19:00', open: true },
  { day: 'Martes', hours: '09:00 – 19:00', open: true },
  { day: 'Miércoles', hours: '09:00 – 19:00', open: true },
  { day: 'Jueves', hours: '09:00 – 19:00', open: true },
  { day: 'Viernes', hours: '09:00 – 19:00', open: true },
  { day: 'Sábado', hours: '09:00 – 13:00', open: true },
  { day: 'Domingo', hours: 'Cerrado', open: false },
];

export const WEEKDAY_OPEN_MIN = 9 * 60;
export const WEEKDAY_CLOSE_MIN = 19 * 60;
export const SATURDAY_OPEN_MIN = 9 * 60;
export const SATURDAY_CLOSE_MIN = 13 * 60;
