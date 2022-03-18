 # Event Scheduler App;
 
 ## About

 - Event scheduler is an event based app build on pure vanilla JavaScript & Nodejs.It is used to schedule event after taking user text-based data in the command line  interface and then event is schedule and it will fire event according to the valid textual data.

 ## Approach

 - At first I enable a feature where user can take a input from CLI after that user will be validated while checking through the list of array of object (where we have event schedule data) so from this data user Input will be validated that is it right  event data or not. If data is matched with user Input  then an  function will be used to  find a difference between current time and scheduling time so that it will give a difference time. then we will use this difference data to  pass on to another function as a parameter and when it will used this data event it will schedule an event by calling a "setTimeout" function by counting of text length to schedule time on the basis of its string length. and then user will able to see the event at console.

 - If user Input  is not matched with our event data lists then the user will see an  invalid text message at CLI.
 
 - If current date of the local system is  greater than scheduling date then he user will see the same  invalid text message at CLI.

 
 ## Problem faced

 - How to take input through the user.
 
 - How to check script to loop;

 ## Solved

 - first of all I let you know that i was  trying to build a scheduler with the help of node scheduler.
  
 -  after that i was searching on  google how should i  take input at the  terminal itself in plain js.
    and after a lots of appraoch and trial i come up with this solution that by using of a recurion algorithm
    for every single event by taking an user input as a string for validation to our event data to make an event schedule.
