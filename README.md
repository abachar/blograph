# blograph

Simple blog back-end with GraphQL

## Installation

* `git clone https://github.com/abachar/blograph.git`
* `cd blograph`
* `npm install`

## Exécution

* `npm start`
* Aller à l'url [http://localhost:3000/graphql](http://localhost:3000/graphql).

### Exemples de requêtes GraphQL


```
{
  tags(label: "Lorem") {
    posts {
      title
      content
      author {
        firstName
        lastName
      }
      comments {
        content
        author {
          firstName
          lastName
        }
      }
    }
  }
}
```