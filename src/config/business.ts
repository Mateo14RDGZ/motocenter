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

// Coordenadas y ficha reales de Motocenter en Google Maps (provistas por el cliente)
export const MAPS_LAT = -33.522601;
export const MAPS_LNG = -56.9040499;

export const MAPS_LINK =
  'https://www.google.com/maps/place/Motocenter/@-33.522601,-56.9040499,17z/data=!3m1!4b1!4m6!3m5!1s0x95a6a1fa02f7ad3d:0xbcc82647f6d39b7c!8m2!3d-33.522601!4d-56.9040499!16s%2Fg%2F11jyfzgrmt';

export const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_LAT},${MAPS_LNG}&z=16&output=embed`;

// Calificación real de Motocenter en su ficha de Google (confirmada por el cliente)
export const GOOGLE_RATING = 5.0;

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
