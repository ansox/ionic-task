import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryFn,
} from '@angular/fire/firestore';

export abstract class Firestore<T> {
  protected collection: AngularFirestoreCollection<T>;

  constructor(protected db: AngularFirestore) {}

  getAll(): Observable<T[]> {
    return this.collection.valueChanges();
  }

  protected setCollection(path: string, queryFn?: QueryFn): void {
    this.collection = path ? this.db.collection(path, queryFn) : null;
  }
}
