import { Injectable } from '@angular/core'

@Injectable()
export class AppConfig {
    //Ovo je dictionary
    private _config: { [key:string]: string};

    constructor(){
        this._config = {
            PathAPI: 'https://localhost:44304/api/'
        }
    }

    get setting(){
        return this._config;
    }

    get(key: any){
        return this._config[key];
    }
}