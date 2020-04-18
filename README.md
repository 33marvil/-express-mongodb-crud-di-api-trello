# Trello API & MongoDB

## Objective: 

- Learn to develop `NodeJS` APIs with `Express` and `MongoDB Atlas`, using design patters (dependency injection).


## Challenge

Martin, S.A.P.I. DE C.V. has decided to develop new Trello API version with MongoDB Atlas for data storing. Check latest Trello API using Json file and develop new API version.


## Constraints:

- Trello API with MONGODB Atlas.
- Entity Data Model & Relationships.
- API Sprints. 
- Trello & Scrum.
- API APP Versioning (github, gitlab, etc.).
- Dependency Injection.
- CTO has given us the entry json data model:

#### Entry Json Data Model

```
{
  "boards": [{
    "lists": [{
      "id": "1",
      "name": "To Do",
      "created_at": "Jan 14 2019",
      "cards": [{
        "id": "1",
        "name": "Take SCRUM test"
      }, {
        "id": "2",
        "name": "Learn GraphQL Testing Strategies"
      }]
    }, {
      "id": "2",
      "name": "Doing",
      "created_at": "Feb 10 2019",
      "cards": [{
        "id": "1",
        "name": "Jenkins + CI"
      }]
    }, {
      "id": "3",
      "name": "Done",
      "created_at": "Apr 22 2019",
      "cards": [{
        "id": "1",
        "name": "MongoDB Certification"
      }, {
        "id": "2",
        "name": "Payment to AWS Account"
      }]
    }]
  }] 
}
```
