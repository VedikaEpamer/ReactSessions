export type Blog = {
  id: number;
  title: string;
  content: string;
  isPublished: boolean;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "React Basics",
    content: "Learn components, props, and JSX.",
    isPublished: true,
  },
  {
    id: 2,
    title: "TypeScript with React",
    content: "Type safety for better apps.",
    isPublished: false,
  },
  {
    id: 3,
    title: "Vite Setup",
    content: "Fast development with Vite.",
    isPublished: true,
  },
];
