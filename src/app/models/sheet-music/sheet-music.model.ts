import { Picture } from "src/app/services/picture/picture.service";

export interface SheetMusicData {
    name: string;
    author: string;
    difficulty: string;
    type: string;
    isLearned: boolean;
    imagePath: string;
}

export class SheetMusic {
    private _id: string;
    private _name: string;
    private _author: string;
    private _difficulty: string;
    private _type: string;
    private _isLearned: boolean;
    private _imagePath: string;
    private _picture: Picture | null;

    constructor(id?: string, data: Partial<SheetMusicData> = {}) {
        this._id = id ?? '';

        this._name = data.name || '';
        this._author = data.author || '';
        this._difficulty = data.difficulty || 'easy';
        this._type = data.type || 'piano';
        this._isLearned = data.isLearned || false;
        this._imagePath = data.imagePath || '';

        this._picture = null;
    }

    toJson(): SheetMusicData {
        return {
            name: this._name,
            author: this._author,
            difficulty: this._difficulty,
            type: this._type,
            isLearned: this._isLearned,
            imagePath: this._imagePath
        };
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

    get imagePath(): string {
        return this._imagePath;
    }

    get picture(): Picture | null {
        return this._picture;
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

    set imagePath(value: string) {
        this._imagePath = value;
    }

    setPicture(picture: Picture) {
        this._picture = picture;
    }
}
