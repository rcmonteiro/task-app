import { completeTask } from "./routes/complete-task.js";
import { createTask } from "./routes/create-task.js";
import { deleteTask } from "./routes/delete-task.js";
import { getTasks } from "./routes/get-tasks.js";
import { updateTask } from "./routes/update-task.js";
import { buildRoutePath } from './utils/build-route-path.js';

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: createTask
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: getTasks
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: updateTask
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: deleteTask
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: completeTask
  }
]
