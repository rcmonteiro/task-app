import { randomUUID } from "crypto";
import { Database } from "../database.js";

const database = new Database();

export const createTask = (req, res) => {
  
  const { title, description  } = req.body;

  if (!title || !description) {
    return res.writeHead(400).end();  
  }
  
  const task = {
    id: randomUUID(),
    title,
    description,
    created_at: new Date(),
  };
  database.insert('tasks', task)

  return res.writeHead(201).end();
}