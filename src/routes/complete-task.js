import { Database } from "../database.js";

const database = new Database();

export const completeTask = (req, res) => {
  const { id } = req.params;

  const taskExists = database.exists('tasks', id)

  if (!taskExists) {
    return res.writeHead(400).end();
  }

  database.patch('tasks', id, { completed_at: new Date() })

  return res.writeHead(204).end();
}