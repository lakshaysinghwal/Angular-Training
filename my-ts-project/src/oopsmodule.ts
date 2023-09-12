class Emp {
    // Declkare data menbers with access modifiers - public , private, protected
    private eid: number     //Instance data member/variable
    private ename: string   //Instace variable

    //Initilize data members
    constructor(eid:number, ename : string) {
        this.eid = eid
        this.ename = ename
    }
}

//Simplified Class definition
class Employee{
    //Declare and initialize data members
    constructor(private empid:number, private empname:string) {}
    
}

//Interface
export interface Person {
    personName:string
    personAge: number
}