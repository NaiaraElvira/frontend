import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alert, AlertType } from './alert.model';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
})
export class AlertsComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubsCription: Subscription;

  constructor(private route: Router, private alertService: AlertsService) { }
  
  ngOnInit() {
    this.alertSubscription = this.alertService.onAlert(this.id)
        .subscribe(alert => {
          if(!alert.message){
            this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
            this.alerts.forEach(x => delete x.keepAfterRouteChange);
            return;
          }
          this.alerts.push(alert);
          if(alert.autoClose) {
            setTimeout(() => this.removeAlert(alert), 3000);
          }
        });

        this.routeSubsCription = this.route.events.subscribe(event => {
          if(event instanceof NavigationStart) {
            this.alertService.clear(this.id);
          }
        });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubsCription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if(!this.alerts.includes(alert)) return;
    if(this.fade) {
      this.alerts.find(x => x === alert).fade = true;
      // remove com fade 
      setInterval(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250)
    }else{
      // remove do array de alerts
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if(!alert) return;
    const classes = ['alert', 'alert-dismissable'];
    const alertTypeClass = {
      [AlertType.SUCESS]: 'alert alert-success',
      [AlertType.ERROR]: 'alert alert-danger',
      [AlertType.INFO]: 'alert alert-info',
      [AlertType.WARNING]: 'alert alert-warning'
    }

    classes.push(alertTypeClass[alert.type]);

    if(alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

}
