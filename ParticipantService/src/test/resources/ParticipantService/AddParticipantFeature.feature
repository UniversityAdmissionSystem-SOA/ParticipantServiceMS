Feature: Add a participant to the participant list.

Scenario: Add Participant with correct input.
Given user is on the add paticipant page.
When user inputs valid credentials.
Then Participant get added And Participant List will be displayed.

Scenario: Add Participant leaving the Roll number field blank.
Given user is on the add paticipant page.
When user input email-id and scheduled program id But leave the roll number blank.
Then a please fill out this field message pops up.

Scenario:Add Participant leaving the email Id field blank.
Given user is on the add paticipant page.
When user input roll number and scheduled program id But leave the email id blank.
Then a please fill out this field message pops up.

Scenario:Add Participant leaving the schedule program id field blank.
Given user is on the add paticipant page.
When user input roll number and email id But leave the schedule program id blank.
Then a please fill out this field message pops up.
