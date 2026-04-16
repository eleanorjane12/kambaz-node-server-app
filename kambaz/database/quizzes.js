export default [
    {
        "_id" : "123",
        "name" : "Q1 - HTML",
        "type" : "Graded Quiz",
        "points" : 100,
        "group" : "Quizzes",
        "shuffle" : true,
        "time" : "20 Minutes",
        "multi_attempts" : true,
        "attempts" : 1,
        "show_answers" : __,
        "access_code" : 123,
        "one_q_at_once" : true,
        "webcam" : true,
        "lock qs" : false,
        "due" : "1/10/2025",
        "available_from" : "1/05/2025",
        "available_until" : "1/15/2025",
    },
]

/*
Quiz Type - Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded Survey
Points - the sum of the points of all questions in the quiz
Assignment Group - Quizzes (default), Exams, Assignments, Project
Shuffle Answers - Yes (default) / No
Time Limit - 20 Minutes (default)
Multiple Attempts - No (default) / Yes
How Many Attempts - 1 (default). If Multiple Attempts is Yes, then can configure how many times the student can retake the quiz
Show Correct Answers - If and when correct answers are shown to students
Access Code - Passcode students need to type to access the quiz. Default is blank
One Question at a Time - Yes (default) / No
Webcam Required - No (default) / Yes
Lock Questions After Answering - No (default) / Yes
Due date - date the assignment is due
Available date - date assignment is available
Until date - date assignment is available until
*/