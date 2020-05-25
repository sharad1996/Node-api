# Technical test

## Instructions

If you have any questions during the process, feel free to ask and send an email.

Tell us how much time it took you to complete the exercise (in the code as a comment).

When you are done with the task, send us an email.

## Specifications

Write a simple Express API that enables a user to browse Star Trek episodes.
The Star Trek API is described at the following address: [http://stapi.co/](http://stapi.co/).

- [ ]  Setup an *Express* server
- [ ]  Implement the given specifications
- [ ]  Build it like you would if you were asked to provide *production ready* code

### Get all episodes grouped by seasons

---

Expose the following endpoint:

`GET` `/seasons/episodes` 

The endpoint should return the list of all the Star Trek episodes grouped by season.

The list of all the Star Trek episodes can be retrieved from:
[http://stapi.co/api/v1/rest/episode/search](http://stapi.co/api/v1/rest/episode/search)

Going through all the pages is not required, only the first one is enough.

The response should have the following format:

```jsx
[
	{
		seasonNumber: 'integer',
		episodes: [
			{
				episodeUid: 'string',
				episodeTitle: 'string',
				episodeNumber: 'int',
				episodeSerialNumber: 'string'
			}
		]	
	}
]
```

### Post a comment about a specific episode

---

Expose the following endpoint:

`POST` `/episodes/comment`

A single Star Trek episode can be retrieved from:
[http://stapi.co/api/v1/rest/episode?uid=](http://stapi.co/api/v1/rest/episode?uid=EPMA0000001362):uid

The endpoint should log the comment provided by the user in the request body.

The request body should have the following form:

```jsx
{
	episodeUid: 'string',
	comment: 'string'
}
```

The following output should be **logged** on the server:

```jsx
{
	episodeUid: 'string',
	episodeTitle: 'string',
	episodeNumber: 'integer',
	episodeSerialNumber: 'string',
	comment: 'string'
}
```

The server should respond to the request with a `200` status code, an empty response is ok.