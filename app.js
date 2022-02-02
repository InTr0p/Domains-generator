let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".us", ".io", ".ad", ".cl", ".ve", ".tk", ".ro", ".ws"]

for (i = 0; i < pronoun.length; i++) { }
for (i = 0; i < adj.length; i++) { }
for (i = 0; i < noun.length; i++) { }
for (i = 0; i < domain.length; i++) { }

console.log(pronoun[0] + adj[0] + noun[0] + domain[0]);
console.log(pronoun[0] + adj[0] + noun[1] + domain[0]);
console.log(pronoun[1] + adj[0] + noun[0] + domain[0]);
console.log(pronoun[1] + adj[0] + noun[1] + domain[0]);
console.log(pronoun[0] + adj[1] + noun[0] + domain[0]);
console.log(pronoun[0] + adj[1] + noun[1] + domain[0]);
console.log(pronoun[1] + adj[1] + noun[0] + domain[0]);
console.log(pronoun[1] + adj[1] + noun[1] + domain[0]);

/* Other Domains = .us,.io,.ad,.cl,.ve,.tk,.ro,.ws */

console.log(pronoun[0] + adj[0] + noun[0] + domain[2]);
console.log(pronoun[0] + adj[0] + noun[1] + domain[5]);
console.log(pronoun[1] + adj[0] + noun[0] + domain[4]);
console.log(pronoun[1] + adj[0] + noun[1] + domain[7]);
console.log(pronoun[0] + adj[1] + noun[0] + domain[3]);
console.log(pronoun[0] + adj[1] + noun[1] + domain[6]);
console.log(pronoun[1] + adj[1] + noun[0] + domain[8]);
console.log(pronoun[1] + adj[1] + noun[1] + domain[1]);




