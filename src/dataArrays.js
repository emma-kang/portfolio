export const dataArr = [
    {
        "id": 0,
        "part": "front",
        "name": "JavaScript(2yrs)",
        "icon": "fab fa-js",
        "level": 70
    },
    {
        "id": 1,
        "part": "front",
        "name": "HTML",
        "icon": "fab fa-html5",
        "level": 80
    },
    {
        "id": 2,
        "part": "front",
        "name": "CSS",
        "icon": "fab fa-css3",
        "level": 60
    },
    {
        "id": 3,
        "part": "front",
        "name": "Sass",
        "icon": "fab fa-sass",
        "level": 20
    },
    {
        "id": 4,
        "part": "front",
        "name": "Bootstrap4",
        "icon": "fas fa-laptop-code",
        "level": 50
    },
    {
        "id": 5,
        "part": "front",
        "name": "D3.js",
        "icon": "fas fa-laptop-code",
        "level": 20
    },
    {
        "id": 6,
        "part": "front",
        "name": "Angular",
        "icon": "fab fa-angular",
        "level": 20 
    },
    {
        "id": 7,
        "part": "front",
        "name": "React",
        "icon": "fab fa-react",
        "level": 50
    },
    {
        "id": 8,
        "part": "front",
        "name": "Redux",
        "icon": "fas fa-laptop-code",
        "level": 20
    },
    {
        "id": 9,
        "part": "front",
        "name": "Webpack",
        "icon": "fas fa-laptop-code",
        "level": 20
    },
    {
        "id": 10,
        "part": "back",
        "name": "Node.js",
        "icon": "fab fa-node-js",
        "level": 70
    },
    {
        "id": 11,
        "part": "back",
        "name": "Express",
        "icon": "fas fa-code",
        "level": 70
    },
    {
        "id": 12,
        "part": "back",
        "name": "Python",
        "icon": "fab fa-python",
        "level": 20
    },
    {
        "id": 13,
        "part": "back",
        "name": "Django",
        "icon": "fas fa-code",
        "level": 20
    },
    {
        "id": 14,
        "part": "back",
        "name": "REST API",
        "icon": "fas fa-code",
        "level": 50
    },
    {
        "id": 15,
        "part": "back",
        "name": "GraphQL",
        "icon": "fas fa-code",
        "level": 20
    },
    {
        "id": 16,
        "part": "back",
        "name": "OracleSQL",
        "icon": "fas fa-database",
        "level": 30
    },
    {
        "id": 17,
        "part": "back",
        "name": "PostgreSQL",
        "icon": "fas fa-database",
        "level": 50
    },
    {
        "id": 18,
        "part": "back",
        "name": "MySQL",
        "icon": "fas fa-database",
        "level": 65
    },
    {
        "id": 19,
        "part": "back",
        "name": "MongoDB",
        "icon": "fas fa-database",
        "level": 70
    },
    {
        "id": 20,
        "part": "other",
        "name": "Java",
        "icon": "fab fa-java",
        "level": 40
    },
    {
        "id": 21,
        "part": "other",
        "name": "C/C++",
        "icon": "fas fa-code",
        "level": 60
    },
    {
        "id": 22,
        "part": "other",
        "name": "Git",
        "icon": "fab fa-git",
        "level": 60
    },
    {
        "id": 23,
        "part": "other",
        "name": "Linux",
        "icon": "fab fa-linux",
        "level": 60
    }
];

export const pDataArr = [
    {
        "id": "0",
        "title": "Real time chat Application",
        "date": "May, 2018",
        "skills": ["JavaScript", "Socket.io", "Jade(TemplateEngine)", "Node.js(Express)", "HTML/CSS", "MySQL"],
        "desc": [
            "First personal project",
            "model Create/Read/Update/Delete | Instant messaging with Socket.io",
            "The aim here was to create an real time chat application. I use Reational database(MySQL) to store user information as well as follw C(reate)R(ead)U(pdate)D(delete) basics. ",
            "Jade(template engine) used for using variable between client and server side.",
            "Basically, I wanted to use a stored data as nickname of chat room but it doesn't work. Temporarily I used new data input as nickname instead of a stored data."
        ],
        "github": 'https://github.com/emma-kang/realChatApp'
    },
    {
        "id": "1",
        "title": "Course Search Web Application",
        "date": "September, 2018",
        "skills": ["JavaScript", "HTML/CSS", "Node.js(Express)", "MongoDB", "PostgreSQL"],
        "desc": [
            "Build database using both relational and non-relational database | Google Authentification | Create Read Update Delete model structure",
            "It was a team project for fun. We made this app in three days. Through discussion, our team made a conclusion to build a web application to help students.",
                "I took a part in building both sides of front and backend for login function. I used the passport.js to add Federation Authentication as well as used plain HTML/CSS to make web pages.",
                "The difficulty was filter function. At first, the code was not orgarnized and too much long. To solve this difficulty, I made logic again and reflect that."
                ],
        "github": 'https://github.com/emma-kang/SearchCourse'
    },
    {
        "id": "2",
        "title": "Web application(School Project)",
        "date": "November, 2018",
        "skills": ["JavaScript", "Bootstrap", "Handlebar.js", "Node.js(Express)", "React", "Angular", 
        "MongoDB", "PostgreSQL"
        ],
        "desc": [
            "Using API | React and Angular framework study | TypeScript",
            "There are two version for same web application. One of them is using React as framework and another is using Angular. ",
            "The main point for this project was building a web application to handle a bunch of data using API. I could develop framework skills such as React.js and Angular.js for front-end as well as I learned clearly what MVC notion. "
        ],
        "github": 'https://github.com/emma-kang/WEB422'
    }
    ,
    {
        "id": "3",
        "title": "Personal Portfolio Webpage",
        "date": "January, 2019",
        "skills": ["JSX(React)", "HTML/CSS", "Bootstrap"],
        "desc": [
            "Portfolio webpage with React (use 'create react-app')",
            "The aim was to make a personal web page. I have another portfolio page but it was partly templated source. Through this project, I tried to apply to it what I learned so far.",
            "It was the first time to use bundler(webpack) so I tried to understand it.",
            "The difficulty is transition effect. I tried to use react-transition-group but it didn't work. Now I am trying to find the reason why it didn't work and solve it.",
            "I will keep modifying this web page furthermore."
        ],
        "github": 'https://github.com/emma-kang/portfolio'
    }
]