---
layout: page
permalink: /
---

![Oculus Grandma](/img/OculusGrandma.jpg){:class="img-responsive" style="display:block; margin:auto"}

## Course Objectives ##
Virtual reality (VR) technology transports us to real or synthetic places that may be inaccessible, breathtaking, complex beyond our wildest imagination, or just simple and relaxing. Inaccessible in prior decades due to expensive equipment and computing needs, VR systems are now cheap, easy to program, and applicable across almost all fields due to advances in display, sensing, and computational technology. Almost anyone can pick up a VR headset and start developing experiences!

The purpose of this course is to provide students with both a deep understanding of the fundamentals of VR and to gain practical experience developing VR content. Because VR tricks our brains by presenting synthetic stimuli to our senses, it is extremely challenging to develop and analyze VR systems that are both effective and comfortable. To get a handle on these issues, this course will fuse together knowledge from a variety of relevant topics, including computer graphics, tracking systems, and perceptual psychology. 

Topics covered include:

- Overview and perspective on virtual reality
- Human sensation and perception
- Engineering VR systems
- Perceptual training
- Building good experiences

---

## Page Contents ##
{% assign content = page.content | markdownify %}
{% include toc.html html=content %}

---

## Prerequisites ##
We recommend the following courses and skills:

- [CS 225](https://courses.engr.illinois.edu/cs225/){:target="_blank" rel="noopener"} - prior general programming experience
- [Math 225](https://math.illinois.edu/resources/department-resources/syllabus-math-225){:target="_blank" rel="noopener"} or [Math 415](https://math.illinois.edu/resources/department-resources/syllabus-math-415){:target="_blank" rel="noopener"} - basic linear algebra, especially 3D transforms

Nevertheless, this is a large, experimental course, so we do not expect specific background courses or experience. If you are unsure, use the textbooks and Unity manual as a reference for the level of rigor we expect, or ask course staff.

## Office Hours ##
See the [schedule for office hours](/officehours).

- Professor Eric Shaffer, Siebel 2209
- Professor Dan Cermak

## Lectures ##
Lecture is held in {{site.semester.location}} on {{site.semester.time}}

## Textbooks ##
Main text, required: [Steven M. LaValle, Virtual Reality, 2016](http://vr.cs.uiuc.edu).

See the [Extra Material](/extra-material) page for other, recommended readings.

## [Piazza]({{site.semester.piazza}}) ##
We will use Piazza for answering questions and administering the course.

Click the header to join the forum. You do not need a passcode. If you want to use a non-`illinois.edu` email address on Piazza, then send an email from your `illinois.edu` mail account to the course instructor with the email address you want to use, and we will add you manually.

## Grades ##
We will post grades on [Compass 2g](https://compass.illinois.edu){:target="_blank" rel="noopener"}.

We weight grades as follows:

| | 3 credits | 4 credits |  
| ----- | ------ | ----- |  
| Assignments | 20% | 20% |  
| Midterm Exam 1 | 12% | 12% |  
| Midterm Exam 2 | 12% | 12% |
| Midterm Exam 3 | 16% | 16% |
| Final Project | 40% | 25% |  
| 4th Credit Project | | 15% |  

## Assignments ##
We expect to have 4 assignments over the course of the semester. In each of these, students will work in pairs to solve a specific implementation problem in the virtual reality lab in {{ site.lab.room }}.

- Read the submission instructions in each handout carefully!
- You must work in pairs on all assignments. If you don't, you are not eligible for extra credit. We recommend using Piazza to find a group.
- We will accept assignments only up to two days late, with a 20% penalty.

See the [Assignments page](/assignments) for more details.

## Exams ##
This class will have three midterms and no final exam. Each exam is 50 minutes long. You will need to make a reservation in the [CBTF](https://cbtf.engr.illinois.edu) to take the exam.

- Midterm 1: {{site.semester.midterm1}}
- Optional second chance exam for Midterm 1: {{site.semester.secondChance1}}
- Midterm 2: {{site.semester.midterm2}}
- Optional second chance exam for Midterm 2: {{site.semester.secondChance2}}
- Midterm 3:  {{site.semester.midterm1}}

No resources are allowed on exams, though the CBTF will provide calculators. See the [CBTF policies](https://cbtf.engr.illinois.edu/for-students/policies.html) for more details. You are responsible for all material covered in lectures and assignments.For DRES accommodations see [CBTF DRES Students](https://cbtf.engr.illinois.edu/for-students/dres-students.html)

## Second-chance Exams ##
For the first two midterms, you have the option to take a second chance exam if you wish. This score is scaled with a maximum score of 88%: if your second chance score is N% your final percentage score will be calculated as 0.88 x 0.N x 100.0. Your second chance score will replace your first score, even if it is lower. The questions on the second chance exam will cover the same topics as the first exam but may not be identical to the questions on the first exam. To take the second chance exam, just make a reservation with CBTF. You do not need to inform course staff that you are doing so.

## Regrade Requests ##
To submit a regrade request:

- Create a private Piazza post with the `regrade` tag with your NetID **and your partner's**. 
- Include a brief explanation of why you think your grade is incorrect.
- You must submit regrade requests within one week after we release grades.

For MPs:
- Major issues (e.g. a submission issue resulted in a zero) have priority over minor issues (e.g. lost points on one small feature of the MP).
- We may not regrade your work until after all MPs have finished.

For exams:
- The course instructor will regrade exams.
- Include a brief description of the question.

## Final Project ##
The final project is a semester-long implementation of a VR system. Students choose the topic and theme of the project under TA supervision.

This satisfies the [team project requirement](https://cs.illinois.edu/academics/degree-program-options/bs-computer-science-engineering) for CS majors.

See the [project gallery](/projects) for past student projects.

## Academic Integrity ##
You should be familiar with the Student Code [definitions on academic integrity](http://studentcode.illinois.edu/article1_part4_1-401.html). We expect you to abide by them.
