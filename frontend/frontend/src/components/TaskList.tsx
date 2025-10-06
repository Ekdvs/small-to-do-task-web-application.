import React, { useEffect, useState } from "react";
import { getRecentTasks, createTask, markTaskDone, Task } from "../api";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getRecentTasks();
      setTasks(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    const t = await createTask(title, description);
    setTitle("");
    setDescription("");
    setTasks((prev) => [t, ...prev].slice(0, 5));
  };

  const handleDone = async (id: number) => {
    await markTaskDone(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2">
      {/* Left - Form */}
      <div className="p-6 border-r">
        <h2 className="text-xl font-bold mb-4">Add a Task</h2>
        <form onSubmit={handleCreate} className="flex flex-col gap-3">
          <input
            className="border p-2 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border p-2 rounded"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-300 to-blue-900 text-white font-semibold shadow-md hover:from-blue-900 hover:to-blue-300 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

      {/* Right - Task List */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Recent Tasks</h2>
        {loading && <p>Loading...</p>}
        {!loading && tasks.length === 0 && (
          <p className="text-gray-500">No tasks yet</p>
        )}
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              onDone={handleDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
