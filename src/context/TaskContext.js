const { createContext } = require("react");
const TaskContext = createContext();

export const TaskProviders = ({ children }) => {
  const tasks = [];
  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
