import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { Keys } from '../environments/keys.environments';

@Injectable({
  providedIn: 'root',
})
export class BuilderService {
  private talentNames$ = new BehaviorSubject<string[]>([]);
  private selectedTalent$ = new BehaviorSubject<string | null>(null);
  private talentBuilds: { [talent: string]: any } = {};

  constructor(private http: HttpClient) {}

  getHeroBuild(hero: string): void {
    const heroKey = hero.toLowerCase().replace(/ /g, '_');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'dedicated-key': Keys['dedicated-key'],
      Accept: 'text/html, */*;q=0.9',
    });

    const body = {
      matchId: '0',
      matchKey: Keys['matchKey'],
      heroName: `${heroKey}`,
    };

    this.http
      .post<any>('/api/game/get_item_builds', body, { headers })
      .pipe(
        tap((data) => {
          this.selectedTalent$.next(null);
          this.talentNames$.next(data.talentNames);
          this.talentBuilds = data.talentBuilds;
        })
      )
      .subscribe();
  }

  getTalents(): Observable<string[]> {
    return this.talentNames$.asObservable();
  }

  setSelectedTalent(talent: string): void {
    this.selectedTalent$.next(talent);
  }

  getSelectedTalent(): Observable<string | null> {
    return this.selectedTalent$.asObservable();
  }

  getStageBuild(stage: string): Observable<any | null> {
    return this.selectedTalent$.pipe(
      map((talent) => {
        if (!talent || !this.talentBuilds[talent]) {
          return null;
        }
        return this.talentBuilds[talent][stage] || null;
      })
    );
  }
}
