import { ToDo } from './../Models/to-do';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = 'http://localhost:3000/toDo';

  constructor(private httpClient: HttpClient) { }

  getToDo() : Observable<ToDo[]>
  {
    return this.httpClient.get<ToDo[]>(this.apiUrl)
  }

  createToDo(todo: ToDo): Observable<ToDo>
  {
    return this.httpClient.post<ToDo>(this.apiUrl, todo)
  }

  getToDoById(id: string): Observable<ToDo>{
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`)
  }

  updateToDo(todo: ToDo, id: string): Observable<ToDo>{
    return this.httpClient.put<ToDo>(`${this.apiUrl}/${id}`, todo)
  }

  deleteToDo(id: string): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
  }
  
}
