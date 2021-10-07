import Task from "./Task"

const Tasks = ({ tasks,onDelete,onToggle }) => {
    
    return (
        <>
            {tasks.map( (task)=>  //looping through them here, output of the component passing task={task} as a props
             (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> //when save that output my task 3 bar
            ))}
        </>
    )
}

export default Tasks
