import { Event } from '../types/event';

export const events: Event[] = [
  //Categories are Bake Sales, Competitions, and Workshops
  //Status is either past of future
  {
    title: "Ramen Bake Sale",
    date: "November 29, 2024",
    time: "Period 3 - Period 4",
    location: "School Atrium",
    description: "An excellent bake sale that featured the Entrepreneurship Club selling Shin Ramen to the students of Bur Oak. All proceeds from this bake sale went towards future entrepreneurship events.",
    image: "https://m.media-amazon.com/images/I/81kFdSChhKL._AC_UF1000,1000_QL80_.jpg",
    category: "Bake Sales",
    status: "past"
  },
  {
    title: "Cupcakes",
    date: "October 31, 2024",
    time: "Period 3 - Period 4",
    location: "School Atrium",
    description: "2024's Halloween day got a little sweeter when the Entrepreneurship Club sold festive cupcakes to the students of Bur Oak. All proceeds from this bake sale went towards future entrepreneurship events.",
    image: "https://cdn-fastly.foodtalkdaily.com/media/2020/12/21/6375957/christmas-cupcakes.jpg?size=720x845&nocrop=1",
    category: "Bake Sales",
    status: "past"
  },
  {
    title: "Timbits",
    date: "September 26, 2024",
    time: "Period 3 - Bossilicious",
    location: "Beside Portables Outside School",
    description: "After eating from the food trucks, stop by for a sweet treat. Grab a Timbit or 2 for a light snack to remind you of this eventful day. All proceeds from this bake sale went towards future entrepreneurship events.",
    image: "https://api.vip.foodnetwork.ca/wp-content/uploads/2024/06/timbit-flavours.png?w=848",
    category: "Bake Sales",
    status: "past"
  }
  //Add comma for new event
  //No need for new comma if last event
];
