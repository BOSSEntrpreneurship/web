import { Event } from '../types/event';

export const events: Event[] = [
  {
    //Categories are Bake Sales, Competitions, and Workshops
    //Status is either past of future
    title: "Ramen Bake Sale",
    date: "November 29, 2023",
    time: "Period 3 - Period 4",
    location: "School Atrium",
    description: "An excellent bake sale that featured the Entrepreneurship Club selling Shin Ramen to the students of Bur Oak. All proceeds from this bake sale went towards future entrepreneurship events.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80",
    category: "Bake Sales",
    status: "past"
  },
  //Add comma for new event
  //No need for new comma if last event
];
