import { Database } from "../database.js";

const database = new Database();

export const deleteTask = (req, res) => {
  const { id } = req.params;
  
  const taskExists = database.exists('tasks', id)

  if (!taskExists) {
    return res.writeHead(400).end();
  }
  
  database.delete('tasks', id)

  return res.writeHead(204).end();
}