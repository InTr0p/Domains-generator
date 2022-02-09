let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".cl"]

for (b = 0; b < pronoun.length; b++) {
    for (i = 0; i < adj.length; i++) {
        for (e = 0; e < noun.length; e++) {
            for (n = 0; n < domain.length; n++) {
                console.log(pronoun[b] + adj[i] + noun[e] + domain[n]);
            }
        }
    }
}


