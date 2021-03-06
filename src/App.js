import { useState,useEffect } from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



//function App() {
//   const name='Rimty'
//   const x=true
//   return (
//     <div className="container">
//      <h1>Hello From React</h1>
//      <h2>Hello {name}</h2>
//      <h2>Hello {1+1}</h2>
//      <h2>Hello {x ? 'Yes':'No'}</h2>
//      <Header/>

//     </div>
    
//   );
// }

const App=()=> {
  const [showAddTask ,setShowAddTask ]=useState(false)
 // const [showAddTask ,setShowAddTask ]=useState(true)

  const [tasks,setTasks] = useState([])
  
  useEffect(()=>{
    const getTasks =async()=>
    {
      const getTasks=async()=>{
        const tasksFromServer= await fetchTasks()
        setTasks(tasksFromServer)
      }
    }
 
    getTasks()

  },[])
  
  
    //fetchTask
    const fetchTasks =async()=>{
      const res= await fetch('http//localhost:5000/tasks')
      const data =await res.json()

      return data
    }



    //add task
    const addTask=(task)=>{
      const id=Math.floor(Math.random()*10000)+1
     const newTask={id, ...task}
     setTasks([...tasks, newTask])
    }

//Delete Task
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=> task.id!==id ))
    }

    //Toggle Reminder
    const toggleReminder = (id) => { 
       setTasks( 
         tasks.map(
           (task)=> task.id ===id? { ...task, reminder : !task.reminder  } : task
         )
        )
    }


    return(
      <div className="container">
         <Header
          onAdd={()=> setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
          />
          { showAddTask && <AddTask onAdd={addTask}/>}
         { tasks.length> 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Task To Show'   }
    
      </div>
    )
  }


export default App
