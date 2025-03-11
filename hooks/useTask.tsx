import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Definição do tipo para uma tarefa
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Definição do tipo para o contexto de tarefas
interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  clearCompleted: () => void;
}

// Criando o contexto com um valor inicial
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Criando o provedor do contexto
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas", error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar tarefas", error);
    }
  };

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now().toString(), title, completed: false }]);
  };

  const toggleTask = (id:string ) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, clearCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
