import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { EMPTY, forkJoin } from 'rxjs';

@Component({
  selector: 'app-linkedin-callback',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './linkedin-callback.component.html',
  styleUrl: './linkedin-callback.component.scss'
})
export class LinkedinCallbackComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);

  private clientId = '783sd9od1azet2';
  private clientSecret = 'WPL_AP0.6EQ2kDPT1n5nU4mU.MjczOTE2ODA3MA==';
  private redirectUri = 'http://localhost:4200/callback';

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap(params => {
        const code = params['code'];
        if (code) {
          return this.exchangeCodeForToken(code);
        } else {
          this.router.navigate(['/']);
          return EMPTY;
        }
      }),
      catchError(error => {
        console.error('Error in LinkedIn callback:', error);
        this.router.navigate(['/']);
        return EMPTY;
      })
    ).subscribe();
  }

  private exchangeCodeForToken(code: string) {
    const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    return this.http.post<{access_token: string}>(tokenUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      tap(response => console.log('Token response:', response)),
      switchMap(response => this.fetchUserData(response.access_token)),
      catchError(error => {
        console.error('Error exchanging code for token:', error);
        return EMPTY;
      })
    );
  }

  private fetchUserData(accessToken: string) {
    const profileUrl = 'https://api.linkedin.com/v2/me';
    const emailUrl = 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    return forkJoin({
      profile: this.http.get(profileUrl, { headers }),
      email: this.http.get(emailUrl, { headers })
    }).pipe(
      tap(({ profile, email }) => {
        console.log('Profile:', profile);
        console.log('Email:', email);

      }),
      catchError(error => {
        console.error('Error fetching user data:', error);
        return EMPTY;
      })
    );
  }
}