import { Injectable } from '@angular/core';
import { EnumerationModel } from '../models/enumeration-model';
import { NotFoundError } from '../errorHandling/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class EnumerationsService {
  private readonly _enumerations: Map<string, EnumerationModel[]> = new Map();

  constructor() { }

  public setModelValues<T extends EnumerationModel>(TCtor: new (...args: any[]) => T, data: T[]): void {
    const key = TCtor.name;
    this._enumerations.set(key, data);
  }

  public getModelValues<T extends EnumerationModel>(TCtor: new (...args: any[]) => T): T[] {
    const key = TCtor.name;
    const data: EnumerationModel[] = this._enumerations.get(key);

    if (!data) {
      throw new NotFoundError('Enumeration model', key);
    }

    return data as T[];
  }

  public getByCode<T extends EnumerationModel>(values: T[], code: string): T {
    const index: number = values.findIndex(v => v.code === code);
    return (index === -1) ? null : values[index];
  }
}

