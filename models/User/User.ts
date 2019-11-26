export abstract class User {

    private _fullName: string;
    private _age: string;
    private _type: boolean;

    constructor(_fullName: string = 'Not name set', _age: string = 'Not age set', _type: boolean) {
        this._fullName = _fullName;
        this._age = _age;
        this._type = _type;
    }
    
    public set fullName(fullName : string) {
        this._fullName = fullName;
    }
    
    public set age(age : string) {
        this._age = age;
    }

    public get fullName() : string {
        return this._fullName;
    }
    
    public get age() : string {
        return this._age;
    }

    public set type(type : boolean) {
        this._type = type;
    }
    
    public get type() : boolean {
        return this._type;
    }
    
}
