export type EventStatus = 'past' | 'future';
export type EventCategory = 'Bake Sales' | 'Workshops' | 'Competitions';

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: EventCategory;
  status: EventStatus;
}