---
layout: default
---

## K-Balanced Teams

So here's the problem statement verbatim,

>You are a coach at your local university. There are n students under your supervision, the programming skill of the i-th student is ai.
>
>You have to form k teams for yet another new programming competition. As you know, the more students are involved in competition the more probable the victory of your university is! So you have to form no more than k (and at least one) non-empty teams so that the total number of students in them is maximized. But you also know that each team should be balanced. It means that the programming skill of each pair of students in each team should differ by no more than 5. Teams are independent from one another (it means that the difference between programming skills of two students from two different teams does not matter).
>
>It is possible that some students not be included in any team at all.
>
>Your task is to report the maximum possible total number of students in no more than k (and at least one) non-empty balanced teams.
>
>The first line of the input contains two integers n and k (1≤k≤n≤5000) — the number of students and the maximum number of teams, correspondingly.
>
>The second line of the input contains n integers a1,a2,…,an (1≤ai≤109), where ai is a programming skill of the i-th student.


Now that we're done with the intial problem statement, let's start with some trivial reductions. A mental note, the problem fixed skill difference as 5 but it can easily be changed to anything. 

## Initial reductions

Notice how the wording 'programming skill of each pair of students in each team should differ by no more than 5' is replacable by the difference of maximum and minimum skills in a team should always be less than or equal to 5. This automatically reduces the number of comparisions needed to check if a team is compatible from order of n^2 to 1. 

Starting from the previous observation, it makes sense to sort the array containing the skills of every programmer. Now, the next step is to greedily construct all possible teams from this array. We take two optimisations in mind while doing this, teams should satisfy the problem's condition and they are the longest possible. This can be done using the two pointer method with relative ease. Have an end point and a start pointer, move the end pointer till difference exceeds 5, register (start,end) as a team, now move start pointer forward till difference is again less than 5. Repeat the process. 