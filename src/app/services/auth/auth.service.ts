import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private errorService: ErrorService,
    public alertController: AlertController,
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['items']);
          }
        });
      })
      .catch((error) => {
        this.errorService.show(error.message)
      }).finally(() => {
        // removes spinner from button
        this.loading$.next(false);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  async signOut(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'Sign out confirmation',
      message: 'Are you sure?! 🥺 ',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler: async () => {
            await this.afAuth.signOut()
            localStorage.removeItem('user');
            this.router.navigate(['login']);
          }
        },
      ],
    });
    await alert.present();
  }
}
