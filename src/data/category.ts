export interface Props {
  title: string;
  slug: string;
  color:
    | "orange"
    | "blue"
    | "green"
    | "purple"
    | "pink"
    | "yellow"
    | "red"
    | "teal";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Javascript",
    slug: "javascript",
    color: "yellow",
    description:
      "Exploring the ever-evolving world of JavaScript, a programming language that enhances website interactivity and functionality, with ongoing tutorials, tips, and tricks.",
  },
  {
    title: "Software Engineering",
    slug: "software-engineering",
    color: "blue",
    description:
      "Delving into the field of software engineering, which includes current best practices, coding techniques, and industry trends for developing robust and efficient software systems.",
  },
  {
    title: "HCI",
    slug: "human-computer-interaction",
    color: "purple",
    description:
      "Discovering the intriguing intersection of technology and human behavior, with a focus on user experience, interface design, and interaction patterns to create intuitive and user-friendly digital products.",
  },
  {
    title: "Game Design",
    slug: "game-design",
    color: "pink",
    description:
      "Unleashing creativity in the captivating world of game design, encompassing storytelling, mechanics, level design, and player engagement to craft immersive gaming experiences.",
  },
  {
    title: "Simulations",
    slug: "simulations",
    color: "teal",
    description:
      "Stepping into virtual worlds and scenarios created through simulations, providing immersive experiences and ongoing opportunities to learn and experiment within controlled environments.",
  },
  {
    title: "Art",
    slug: "art",
    color: "red",
    description:
      "Immersing myself in the realm of art, exploring various forms and mediums, from paintings and sculptures to digital art and installations, celebrating creativity and visual expression.",
  },
  {
    title: "Essays",
    slug: "essays",
    color: "green",
    description:
      "Engaging in thought-provoking and insightful essays covering a wide range of topics, offering ongoing unique perspectives and in-depth analysis.",
  },
  {
    title: "Readings",
    slug: "readings",
    color: "orange",
    description:
      "Embarking on a literary journey with recommended readings and insightful book reviews, covering diverse genres, authors, and captivating narratives.",
  },
];
