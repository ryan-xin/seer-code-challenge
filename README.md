# Seer Code Challenge

### Overview ###

Rewrite Seer Blog using React - Blog Index Page and Blog Post Page.

* Index page should list maximum of 10 blog post items in one page;
* Each blog post item should have a thumbnail, title and description;
* The blog page should display date, title, html content;
* Blog page needs to display maximum of 3 related blog posts that have similar titles;
* Design should be responsive;

![Screenshot of the website:](https://github.com/ryan-xin/seer-code-challenge/blob/main/public/seer_challenge_blog_page.png)
![Screenshot of the website:](https://github.com/ryan-xin/seer-code-challenge/blob/main/public/seer_challenge_post_page.png)

### Main Features ###

* Redesign blog index page and blog post page;
* Use bold, simple and clear style to help users access information easily;
* Circle elements to match Seer's branding and show that Seer is easily accessible;
* Click 'Back' button on blog post page goes back to blog index page and previous scroll position;
* Pagination: hide 'Left Arrow' button on page 1 and hide 'Right Arrow' button on the last page;
* Show/Hide burger menu based on screen width;
* Hover effect added for better user experience;
* Responsive for different screen width;
* Show 3 related posts on blog post page: compare 2 posts' titles. If there are equal or more than 2 same words in the titles, the 2 posts are related posts. If one post has more than 3 related posts just show the first 3, if the post has less than 3 add the latest posts to it to make it 3. All related posts are not including itself.

### To Do List ###

* Learn Redux or alternatives to store states instead of using localStorage;
* Improve Pagination component: show '...' when there are too many pages;
* Add more animation transition for better user experience;
* Overwrite all blog post body HTML & CSS to improve layout & readability;
* Don't have much experience in testing, each component should have unit test;

### Tech Used ###

React; JavaScript; HTML; CSS; axios.

### How to Use ###

1. Download project folder

2. In terminal, go to project folder:
``` 
 $ npm install
 ```
```
 $ npm start
```

3. Open 'http://localhost:3000/' in browser