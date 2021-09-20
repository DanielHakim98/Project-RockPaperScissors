This is my first project with Javascript. After years left programming in C and C++, finally I'm actively doing programming project with Javascript. Well at least it's less strict compare to C/C++.
Here is the code for Rock, Paper and Scissors.
So here's my update on the project.

19 Sep 21:
-Bascially, the code run really well, no bugs as for now but surely there are room for improvement.

-One of them are the prompt is not case sensitive. The inputs are restricted to "rock", "paper and "scissors". Other than those, even with small Upper case typo, the program will loop ask request the user to insert the correct value.

-The second is using 'var' for global variable which some people say is a big no no. Because it has been replaced by 'let' and 'const'.  I use it to count how many wins both player and conm have. I'm going to do slight tweaak on this issue so I won't need to use 'var'.


20 Sep 21:
-Input now is case insensitive. All input will be converted to lower case if the inputs are either "rock", "paper" and "scissors",