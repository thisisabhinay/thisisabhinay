export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Abhinay",
    slug: "abhinay",
    image: "./src/assets/authors/abhinay.svg",
    bio: "Abhinay is a frontend developer by profession, but also enjoys indulging in his artistic and storytelling hobbies outside of work. He is also an avid gamer.",
  },
];
