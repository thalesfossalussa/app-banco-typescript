export abstract class Transacao {
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data?: Date){
        this._valor = valor;
        if (data) {
            this._data = data;
        } else {
            this._data = new Date();
        }
    }

    public get valor(): number {
        return this._valor;
    }
}