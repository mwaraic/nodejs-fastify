import { createTask, readTask, updateTask, deleteTask, getTaskById } from "../controllers/task.js";
import oasFastify from 'oas-fastify'
import spec from '../openapi/Task.json' assert {type: "json"}

export default async function (fastify, opts) {
  spec.$id = '$'

const handler = {
  createTask: createTask,
  getAllTasks: readTask,
  updateTask: updateTask,
  deleteTask: deleteTask,
  getTaskById: getTaskById
};
  fastify.register(oasFastify, { spec, handler }) 
}
