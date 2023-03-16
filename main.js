document.title = 'Lab7';

let body = document.querySelector('body');
let toDelete = document.querySelector('h1');
toDelete.remove();

let hr = document.createElement('hr');

let h1 = document.createElement('h1');
h1.style.color = 'blue';
h1.innerText = 'Lab7 Assignment';
body.append(h1);

body.append(hr);

let h2 = document.createElement('h2');
h2.style.color = 'red';
h2.innerText = 'Task';
body.append(h2);

let p = document.createElement('p');
p.innerText = 'In this task you have to reproduce this HTML page as is using ';
let b = document.createElement('b');
b.innerText = 'only';
p.append(b);
p.append(' JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:');
body.append(p);

let ul = document.createElement('ul');
for (let i = 0; i < 6; i++) {
    let li = document.createElement('li');
    if (i%2 == 0) {
        li.className = 'even';
        li.style.color = 'green';
    } else {
        li.className = 'odd';
        li.style.color = 'purple';
    }
    ul.append(li);
}
ul.children[0].innerText = 'find elements in the DOM (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[0].append(b);
ul.children[0].append(');');


ul.children[1].innerText = 'create/add/remove elements (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[1].append(b);
ul.children[1].append(');');


ul.children[2].innerText = 'change content of the elements (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[2].append(b);
ul.children[2].append(');');


ul.children[3].innerText = 'change styles of the elements (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[3].append(b);
ul.children[3].append(');');


ul.children[4].innerText = 'change attributes of the elements (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[4].append(b);
ul.children[4].append(');');


ul.children[5].innerText = 'change classes of the elements (';
b = document.createElement('b');
b.innerText = '5 points';
ul.children[5].append(b);
ul.children[5].append(').');

body.append(ul);

hr = document.createElement('hr');

body.append(hr);

h2 = document.createElement('h2');
h2.style.color = 'red';
h2.innerText = 'Submission';
body.append(h2);

p = document.createElement('p');
p.innerText = 'To submit your work, follow these instructions:';
body.append(p);

ul = document.createElement('ul');
for (let i = 0; i < 7; i++) {
    let li = document.createElement('li');
    if (i%2 == 0) {
        li.className = 'even';
        li.style.color = 'green';
    } else {
        li.className = 'odd';
        li.style.color = 'purple';
    }
    ul.append(li);
}

ul.children[0].innerText = 'Create a new repository on Github, named ';
b = document.createElement('b');
b.innerText = 'lab7';
ul.children[0].append(b);
ul.children[0].append(' (');
b = document.createElement('b');
b.innerText = '1 point';
ul.children[0].append(b);
ul.children[0].append(').');


ul.children[1].innerText = 'Clone this repository to your local machine and work inside it.';


ul.children[2].innerText = 'Create a new HTML file, called ';
b = document.createElement('b');
b.innerText = 'index.html';
ul.children[2].append(b);
ul.children[2].append(', which has only one <h1> tag with "Hello, World!" message (');
b = document.createElement('b');
b.innerText = '1 point';
ul.children[2].append(b);
ul.children[2].append(').');


ul.children[3].innerText = 'Create a new JavaScript file, called ';
b = document.createElement('b');
b.innerText = 'main.js';
ul.children[3].append(b);
ul.children[3].append(', which must contain your program (assignment) described above (');
b = document.createElement('b');
b.innerText = '1 point';
ul.children[3].append(b);
ul.children[3].append(').');


ul.children[4].innerText = 'Link this ';
b = document.createElement('b');
b.innerText = 'main.js';
ul.children[4].append(b);
ul.children[4].append(' file to your ');
b = document.createElement('b');
b.innerText = 'index.html';
ul.children[4].append(b);
ul.children[4].append(' file (Note: place your script at the end of the ');
b = document.createElement('b');
b.innerText = 'body';
ul.children[4].append(b);
ul.children[4].append(' section).');


ul.children[5].innerText = 'Write a JavaScript program in ';
b = document.createElement('b');
b.innerText = 'main.js';
ul.children[5].append(b);
ul.children[5].append(' to make your ');
b = document.createElement('b');
b.innerText = 'index.html';
ul.children[5].append(b);
ul.children[5].append(' look identical to this HTML file (');
b = document.createElement('b');
b.innerText = '5 points';
ul.children[5].append(b);
ul.children[5].append(').');


ul.children[6].innerText = 'After you finish your work, submit it to the Github (';
b = document.createElement('b');
b.innerText = '2 points';
ul.children[6].append(b);
ul.children[6].append(').');

body.append(ul);

hr = document.createElement('hr');

body.append(hr);