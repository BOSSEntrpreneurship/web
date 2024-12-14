import { Event } from '../types/event';

export const events: Event[] = [
  //Categories are Bake Sales, Competitions, and Workshops
  //Status is either past of future
  //Register now button only for workshops and Competitions
   {
    title: "Candy Cups",
    date: "December 18, 2024",
    time: "Period 3 - Period 4",
    location: "School Atrium",
    description: "Purchase a sweet variety of treats this holiday season to eat or give to your friends! Profit made will be going to charity.",
    image: "https://karameller.com/cdn/shop/files/FullSizeRender_38845071-1e12-4fc9-a78b-0a6d7020b666.jpg?v=1698354701",
    category: "Bake Sales",
    status: "future"
  },
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
