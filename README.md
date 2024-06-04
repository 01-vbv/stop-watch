# stop-watch

This project includes creation of a StopWatch application by leveraging the functionalities provided by HTML, CSS and Vanilla Javascript. We have used asynchronous setTimeout() method for updating the timer based on the events generated by clicking the buttons. 
We have start, stop and reset buttons:
Start Button: Starts the timer either while running the timer for first time or after stoping the time. If the timer is stopped, it will start the timer from current state

StopButton: Stops the timer and add the current stopped time to the array for recording the time when timer got stopped. The array will stores latest 5 stopped event times and will display the latest one with orange color.

Reset Button: Reset the timer to inital state which includes setting timer to 00:00 and removing all elements from array which stores the time when timer was stopped.
