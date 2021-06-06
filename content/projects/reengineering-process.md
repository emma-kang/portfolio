---
author:
  name: "Emma Kang"
date: 2021-01-18
linktitle: Re-engineering process
title: "[Work] Re-engineering process"
type:
- post
- posts
weight: 10
series:
- work project
aliases:
- /projects/reengineering-process
---

As the 3rd data provider changed, related processes in the system were needed to update as new requirements. The processes are an important part in the system since it is associated with toll transactions. Previous processes were designed as SQL procedures but it had a drawback that was hard to track exception. Therefore, new processes were decided to implement as Java processes. 

### Plan 

- Investigate the system database table and design new database structure for the transactions 
- Based on the new data table design, planed Java processes 

### Issues 

- After implemented and released to production, it has issues on performance since the process had bad logic to handle huge transaction data. At first, there was no choice but to use the code according to the business logic. 
- To solve the above issue, refactored all processes in loop code. After refactored the code, the processing time was decreased 3 times than the previous.

### Tech Stack

- T-SQL (Table design, procedures)
- Java 8 
- shell scripts

I was able to learn how to handle big transaction data in Java source code and also it was a good chance to enhance my knowledge about exception handling.





