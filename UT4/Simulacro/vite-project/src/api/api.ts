export const getApiTasks = async () => {
    const url = "http://localhost:3000/api/tasks";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        return payload;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getTaskById = async (id) => {
  const url = "http://localhost:3000/api/tasks";
  try {
    const response = await fetch(url);
    if (response.ok) {
      let task
      const payload = await response.json();
      payload.forEach(element => {
        if (element.id === id){
          task = element
        }
      });
      return task;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};
export const createTask = async (newTask) => {
  const url = "http://localhost:3000/api/tasks";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });

    if (response.ok) {
      const createdTask = await response.json();
      console.log("Task created:", createdTask);
      return createdTask;
    } else {
      console.error("Failed to create task:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error creating task:", error);
    return null;
  }
}
export const deleteTask = async (taskId) => {
  const url = `http://localhost:3000/api/tasks/${taskId}`;
  
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log(`Task with ID ${taskId} deleted successfully.`);
      return true;
    } else {
      console.error("Failed to delete task.");
      return false;
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};
