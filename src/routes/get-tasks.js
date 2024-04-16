import { Database } from "../database.js";

const database = new Database();

export const getTasks = (req, res) => {
  const { search } = req.query
  const tasks = database.select('tasks', search ? { title: search, description: search } : null)
  // const tasks = database.select('tasks')
  return res.end(JSON.stringify(tasks))
}