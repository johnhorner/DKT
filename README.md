## DKT React App

This is a practical app which I created to help someone practice for the [NSW Drivers' Knowledge Test](https://www.service.nsw.gov.au/transaction/driver-knowledge-test).

The content in the database (364 questions and three multiple-choice answers) is scraped from another website, 
which I assume scraped them from the official website.

It was created with `create-react-app`. It doesn't use anything more complex than State and has only three 
components.

The sole user for whom it was created has a Change Request, that a submit button be added, rather than the 
answer being marked true or false straight away. They want to click an answer then possibly reconsider before 
hitting submit and committing themselves to that answer, which is how the official test works.
