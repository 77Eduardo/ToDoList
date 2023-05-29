import { Header } from '../components/Header' 
import { Content } from '../components/Content'
import { ToDoContextProvider } from '../contexts/ToDo'
import { ToastProvider } from '../contexts/Toast'

function ToDoList() {

  return (
    <>
    <Header />
    <ToastProvider>
      <ToDoContextProvider>
        <Content />
      </ToDoContextProvider>
    </ToastProvider> 
  </>
  )
}

export default ToDoList
