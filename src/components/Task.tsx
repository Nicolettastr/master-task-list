import { useState } from "react";

const Task = () => {
    const [task, setTask] = useState<string[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSetTask = (event: any) => {
        event.preventDefault();

        const title = event.target.title.value;

        setTask((prevState) => [...prevState, title]);
    };

    const deleteTask = (deleteTask: number) => {
        const updatedTask = task.filter(
            (option) => option !== task[deleteTask]
        );
        setTask(updatedTask);
    };

    const upperCase = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (
        <div className='task__container'>
            <h1>Task</h1>
            <form className='task__form' onSubmit={handleSetTask}>
                <input
                    type='text'
                    name='title'
                    placeholder='Describe your task'
                />
                <input type='submit' value='Save' />
            </form>
            <h3>Task list: </h3>
            {task.map((option, index) => (
                <div className='task_list'>
                    <li key={index}>{upperCase(option)}</li>
                    <button onClick={() => deleteTask(index)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default Task;
