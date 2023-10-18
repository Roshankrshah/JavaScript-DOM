export default class kanban {
    constructor(root){
        this.root = root;

        Kanban.columns().forEach(column =>{
            
        })
    }

    static columns(){
        return [
            {
                id: 1,
                title: 'Not Started'
            },
            {
                id: 2,
                title: 'In Progress'
            },
            {
                id: 3,
                title: 'Completed'
            }
        ]
    }
}