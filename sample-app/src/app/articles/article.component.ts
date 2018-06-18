import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getArticles());
  }

  getArticles() {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles)
  }

}
