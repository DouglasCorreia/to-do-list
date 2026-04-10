export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskCardProps = {
  finishTask: (index: number) => void;
  removeTask: (index: number) => void;
  editTask: (index: number) => void;
  task: Task;
  index: number;
};

export type TaskModalEditProps = {
  modal: boolean;
  input: string;
  title: string
  modalClose: () => void;
  setInput: (input: string) => void;
  editTask: () => void;
};