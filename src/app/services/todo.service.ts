export class ToDoService{
    todoId:number=0
    todoItem=[
        {
            id:this.getId(),
            title:'Maths Homework next week',
            date:new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}),
            status:'in-progress'
        },
        {
            id:this.getId(),
            title:'Science Homework next week',
            date:new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}),
            status:'in-progress'
        }
    ]
    addTodoItem(todoText:string){
        this.todoItem.push({
            id:Math.random(),
            title:todoText,
            date:new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}),
            status:'in-progress',
        
        })
    }
    getId():number{
        this.todoId=this.todoId+1
        return this.todoId
    }
    deleteToDoItem(id){
        console.log("this was called")
        this.todoItem=this.todoItem.filter(item=>item.id!=id)
        console.log(this.todoItem)
    }
    getToDoList(){
        return this.todoItem
    }
    editToDoList(id){
        const objId=this.todoItem.findIndex(item=>item.id==id)
        this.todoItem[objId].status="completed"
    }    
}