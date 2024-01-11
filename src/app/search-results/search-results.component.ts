import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  users: any[] = []; // replace 'any' with your User model
  posts: any[] = []; // replace 'any' with your Post model

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['query'];
      this.search();
    });
  }

  search() {
    // Call your user and post services to fetch search results
    // For example:
    // this.userService.searchUsers(this.searchTerm).subscribe(data => this.users = data);
    // this.postService.searchPosts(this.searchTerm).subscribe(data => this.posts = data);
  }
}
