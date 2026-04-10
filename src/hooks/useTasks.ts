import { useState } from "react";
import type { Task } from "../types/Task";

const createTaskId = () => crypto.randomUUID();

export function useTasks() {
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksStorage = localStorage.getItem("tasks");
  
    if (!tasksStorage) return [];
  
    try {
      const parsedTasks = JSON.parse(tasksStorage);
  
      return parsedTasks.map((task: Partial<Task>) => ({
        id: task.id || createTaskId(),
        title: task.title || "",
        completed: !!task.completed,
      }));
      
    } catch {
      return [];
    }
  });

  const addTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: createTaskId(),
      title: input,
      completed: false,
    };

    setTasks((previousTasks) => {
      const updatedTasks = [...previousTasks, newTask];
      
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });

    setInput("");
  };

  const finishTask = (index: number) => {
    setTasks((previousTasks) => {
      const updatedTasks = previousTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
      
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });
  };

  const removeTask = (index: number) => {
    setTasks((previousTasks) => {
      const updatedTasks = previousTasks.filter((_, i) => i !== index);
      
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });
  };

  const openModalTask = (index: number) => {
    const selectedTask = tasks[index];
    
    if (!selectedTask) return;

    setModalIndex(index);
    setInput(selectedTask.title);
    setModal(true);
  };

  const closeModalTask = () => {
    setModal(false);
    setModalIndex(null);
    setInput("");
  };

  const saveEditTask = () => {
    if (modalIndex === null) return;
    if (!input.trim()) return;

    setTasks((previousTasks) => {
      const updatedTasks = previousTasks.map((task, i) =>
        i === modalIndex ? { ...task, title: input } : task
      )

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });

    closeModalTask();
  };

  return {
    tasks,
    input,
    modal,
    modalIndex,
    setInput,
    addTask,
    finishTask,
    removeTask,
    openModalTask,
    closeModalTask,
    saveEditTask,
  };
}
