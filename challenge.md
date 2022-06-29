# Challenge, you

- should only consider happy paths (you don't have to handle errors and things like that)
- can use any framework you want as long as you build an API and a web interface
  - need to create a custom API endpoint that returns the total number of stars and the avatar url
  - need to create an interface that asks for an input
- should only call the GitHub API if you haven't already called it for that user
  - a request for the same user should return data stored by your API rather than generating a new request to GitHub
  - the data has to persist if you change browsers
  - the data has to persist if server restarts
- should show the user avatar and number of stars on screen

![](./docs/api-call.png)
