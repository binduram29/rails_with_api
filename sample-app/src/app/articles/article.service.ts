import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Article } from './article';
import { ArticleService } from './articles/article.service';

@injectable()
export class ArticleService {
	private articlesUrl = 'http://localhost:3000/api/v1/articles'

	constructor(private http: Http) {}

	getArticles(): Observable < Article [] > {
      return this.http.get(this.articlesUrl).map((response: Response) => <Article[]>response.json())
        
    }
}