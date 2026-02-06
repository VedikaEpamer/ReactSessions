export type Priority = "low" | "medium" | "high";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
};
