import { Database } from "../database.js";

const database = new Database();

export const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title || !description) {
    return res.writeHead(400).end();  
  }

  const taskExists = database.exists('tasks', id)

  if (!taskExists) {
    return res.writeHead(400).end();
  }

  const task = {
    title,
    description,
    update_at: new Date()
  }
  database.update('tasks', id, task)

  return res.writeHead(204).end();
}