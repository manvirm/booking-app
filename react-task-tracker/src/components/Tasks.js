import Task from './Task'

const Task = ({tasks, onDelete}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} 
                onDelete={onDelete}/>
            ))}
        
        </>
    )
}