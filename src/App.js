import { useState } from 'react'
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

  const [tasks,setTasks] = useState([
  
    {
    
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder : true,
        },
        {
        id:2,
        text: 'Meeting at School',
        day:'Feb 6th at 1:30pm',
        reminder: true,
        },
        
        {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder:false,
    
       },
    ])

    //add task
    const addTask=()=>{
      console.log(task);
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
         <Header/>
         <AddTask onAdd={addTask}/>
         { tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Task To Show'   }
    

      </div>
    )
  }


export default App
