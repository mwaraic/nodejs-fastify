let tasks = [];

const createTask = (req, reply) => {
    const { name, description } = req.body;
    const task = { id: tasks.length + 1, name };
    if (description) {
        task.description = description;
    }
    tasks.push(task);
    reply.send({ message: 'Task created successfully' });
};

const readTask = (request, reply) => {
    reply.send(tasks);
};

const updateTask = (request, reply) => {
    const { id } = request.params;
    const { name: newName, description } = request.body;
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        if (newName !== undefined) {
            tasks[index].name = newName;
        }
        if (description !== undefined) {
            tasks[index].description = description;
        }
        reply.send({ message: 'Task updated successfully' });
    } else {
        reply.status(404).send({ message: 'Task not found' });
    }
};

const deleteTask = (request, reply) => {
    const { id } = request.params;
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        tasks.splice(index, 1);
        reply.send({ message: 'Task deleted successfully' });
    } else {
        reply.status(404).send({ message: 'Task not found' });
    }
};

const getTaskById = (request, reply) => {
    const { id } = request.params;
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        reply.send(task);
    } else {
        reply.status(404).send({ message: 'Task not found' });
    }
};

export { createTask, readTask, updateTask, deleteTask, getTaskById };
