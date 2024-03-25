// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import {
  PORTO_NUMBER,
  PORTO_EMAIL,
  PORTO_LINKEDIN,
  PORTO_GITHUB,
} from "./socials";

export const SITE_TITLE = "Ojisaleem";
export const SITE_DESCRIPTION = "Welcome to my Portfolio Site!";

interface PersonalData {
  firstName: string;
  lastName: string;
  experiences: string[];
  role: string[];
  image: string;
  contact: object;
  address: object;
}

export const Ojisaleem: PersonalData = {
  firstName: "Princesaleem",
  lastName: "Luka",
  experiences: [
    "laravel",
    "javascript",
    "nodejs",
    "react",
    "angular",
    "astro",
    "python",
    "svelte",
  ],
  role: ["front-end dev", "back-end dev", "fullstack-dev"],
  image: "",
  contact: {
    contact: PORTO_NUMBER,
    email: PORTO_EMAIL,
    linkedIn: PORTO_LINKEDIN,
    github: PORTO_GITHUB,
  },
  address: {
    city: "Kaduna",
    state: "Kaduna",
    country: "Nigeria",
  },
};
