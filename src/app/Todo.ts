export class Todo{
    public sno : number;
    title!: string
    desc!: string
    active!: boolean

    constructor(){
        this.sno = 123;
        this.title= "default";
        this.desc = "default";
        this.active= false;
    }
}