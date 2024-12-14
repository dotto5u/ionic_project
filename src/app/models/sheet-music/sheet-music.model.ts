export class SheetMusic {
    private _id: string;
    private _name: string;
    private _author: string;
    private _difficulty: string;
    private _type: string;
    private _isLearned: boolean;
    private _imagePath?: string;

    constructor(id?: string, data: Partial<SheetMusic> = {}) {
        this._id = id ?? '-1';
        this._name = data.name || '';
        this._author = data.author || '';
        this._difficulty = data.difficulty || 'Easy';
        this._type = data.type || 'Piano';
        this._isLearned = data.isLearned || false;
        this._imagePath = data.imagePath || '';
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get author(): string {
        return this._author;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    get type(): string {
        return this._type;
    }

    get isLearned(): boolean {
        return this._isLearned;
    }

    get imagePath(): string | undefined {
        return this._imagePath;
    }

    set name(value: string) {
        this._name = value;
    }

    set author(value: string) {
        this._author = value;
    }

    set difficulty(value: string) {
        this._difficulty = value;
    }

    set type(value: string) {
        this._type = value;
    }

    set isLearned(value: boolean) {
        this._isLearned = value;
    }

    set imagePath(value: string | undefined) {
        this._imagePath = value;
    }
}
  