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
    bio: "Passionate Frontend Engineer · Senior Developer @gohighlevel · Unveiling insights on Design, Web Development, mastering JS, and shaping Software Architecture.",
  },
];
