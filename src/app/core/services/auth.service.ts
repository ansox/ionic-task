import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  private signInWithEmail({ email, password }): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private async signUpWithEmail({
    email,
    password,
    name,
  }): Promise<auth.UserCredential> {
    const credentials = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await credentials.user.updateProfile({
      displayName: name,
      photoURL: null,
    });

    return credentials;
  }

  private signInWithPopup(provider: string): Promise<auth.UserCredential> {
    let signInProvider = null;

    switch (provider) {
      case 'facebook':
        signInProvider = new auth.FacebookAuthProvider();
        break;
    }

    return this.afAuth.auth.signInWithPopup(signInProvider);
  }
}