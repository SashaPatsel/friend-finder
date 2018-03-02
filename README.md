# Friend-Finder



## Getting Started

Visit the deployed app at https://friend-find-88845.herokuapp.com/, or run it locally through node by navigating to the directory in your terminal and entering the command "node server.js"

### Installing

to install dependencies
```
npm i
```

## Running the tests



To run customer view Use
`node sever.js` and navigate to localhost:1993 in your browser, or view the deployed site at https://friend-find-88845.herokuapp.com/


### Functionality
Friend finder analyzes data entered by a user and compares it to all potential matches.

After the analysis, friend-finder pairs the user with their ideal match.

#### Code:


Matchmaking logic:
```
 var totalDifference = 40;
    var matchScores = newMatch.scores;

    for (var i = 0; i < friends.length; i++) {

        var diff = 0;

        for (var j = 0; j < matchScores.length; j++) {
            diff += Math.abs(friends[i].scores[j] - matchScores[j]);
        }

        //this condition will change x amount of times thru the loop
        console.log(diff)
        console.log(totalDifference)
        if (diff < totalDifference) {
            // console.log("chicken")
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
            theFinalMatch = friends[i].name;
            theFinalPhoto = friends[i].photo;
            sendMatch()

        }
    }
```

## Built With


* [node.js](https://nodejs.org/en/) - The backend JavaScript Framework
* [express](https://www.npmjs.com/package/express) - Allows data transfers
* [jquery](https://jquery.com/) - Front-end Javascript framework


## Authors

* **Sasha Patsel** - *Initial work* - [Bamazon](https://github.com/SashaPatsel/friend-finder)


