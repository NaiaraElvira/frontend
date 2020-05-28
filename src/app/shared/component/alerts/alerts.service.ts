import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert, AlertType } from './alert.model';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  onAlert(id = this.defaultId): Observable<Alert>{
    return this.subject.asObservable().pipe(filter(x => x && x.id === id ));
  }

  success(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.SUCESS, message}));
  }

  error(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.ERROR, message}));
  }

  info(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.INFO, message}));
  }

  warn(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.WARNING, message}));
  }

  alert(alert: Alert){
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Alert({ id }))
  }

}
