// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["Faiz Ali", "Muhammad Haneef", "Sarang"];
let message = ("We need to find some users!")
for(let name of usernames){
    console.log(`${name}`)
}
usernames.pop();
usernames.pop();
usernames.pop();
console.log(`${message}`)


// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_user = ["Waleed", "Abdullah", "Shafique", "Nomi", "Rehman"];
let new_users = ["Rehman", "Ahmed", "Nomi", "Mujtaba", "Sadiq"];
let current_user_lower = current_user.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_user_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, the name is is taken.`);
    }
    else {
        console.log(`yes ${new_user}, is available`);
    }
}


// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let num of numbers){
    if(num === 1){
        console.log(`${num}st`)
    }else if(num === 2){
        console.log(`${num}nd`)
    }else if(num === 3){
    console.log(`${num}rd`)
}else if(num >= 4){
    console.log(`${num}th`)
}
}