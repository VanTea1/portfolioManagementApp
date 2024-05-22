import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linkedin-callback',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './linkedin-callback.component.html',
  styleUrl: './linkedin-callback.component.scss'
})
export class LinkedinCallbackComponent implements OnInit {
  private clientId = '783sd9od1azet2';
  private clientSecret = 'WPL_AP0.6EQ2kDPT1n5nU4mU.MjczOTE2ODA3MA==';
  private redirectUri = 'http://localhost:4200/auth/linkedin/callback';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.exchangeCodeForToken(code);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  private exchangeCodeForToken(code: string) {
    const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
    const params = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    this.http.post(tokenUrl, null, { params })
      .subscribe((response: any) => {
        const accessToken = response.access_token;
        this.fetchUserData(accessToken);
      }, error => {
        console.error('Error exchanging code for token:', error);
      });
  }

  private fetchUserData(accessToken: string) {
    const profileUrl = 'https://api.linkedin.com/v2/me';
    const emailUrl = 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';

    this.http.get(profileUrl, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).subscribe(profile => {
      console.log('Profile:', profile);
      console.log('Profile:', profile);
      console.log('Profile:', profile);
      
    }, error => {
      console.error('Error fetching profile:', error);
    });

    this.http.get(emailUrl, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).subscribe(email => {
      console.log('Email:', email);
      console.log('Email:', email);
      console.log('Email:', email);

    }, error => {
      console.error('Error fetching email:', error);
    });
  }

}
