Feature: Feature Login

    Feature This is Testing Login


    Scenario: Successful login
        Given you are on the login page
        When you type in the username
        And you type in the password
        And you click on the login button
        Then you are logged in succesfully
