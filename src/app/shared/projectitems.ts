import { ProjectModel } from './project-model';

export const ProjectItems: ProjectModel[] = [
    {
        id: '1',
        name: 'Portfolio',
        description: 'This website that you are browsing right now. Built with Angular and Git.',
        link: 'https://davidy804.github.io',
        imgSrc: './assets/images/portfolio.png',
        details: [
            {
                imgSrc: './assets/images/portfolio1.png',
                caption: 'This website is being hosted by Github Pages. The website was built using the Angular framework. In order to build the site using Angular, the files need to be outputted to a /docs folder. This was the command that was ran to create the folder with the necessary files.',
            },
            {
                imgSrc: './asssets/images/portfolio2.png',
                caption: 'This is the html for the projects component. It pulls information from other files to decrease clutter and increase scalability.',
            },
            {
                imgSrc: './assets/images/portfolio3.png',
                caption: 'This is the typescript for the projects component. This shows that the information that is being pulled comes from different files. Those files being the ProjectService, ProjectModel, and ProjectItems.',
            },
            {
                imgSrc: './assets/images/portfolio4.png',
                caption: 'This is the typescript for the details component. This shows how the "details" button on the Projects tab gets the information. The html file uses "*ngIf" to pull the information for the specific project that was clicked on.',
            },
            {
                imgSrc: './assets/images/portfolio5.png',
                caption: 'The resume component displays a pdf file using PdfViewerModule from the ng2-pdf-viewer module',
            },
            {
                imgSrc: './assets/images/portfolio6.png',
                caption: 'Check out the src files in the repository to look at the html and typescript files for all the components.',
            },
        ],
    },
    {
        id: '2',
        name: 'Yuans Robos',
        description: 'E-commerce website with user authentication, form validation, and commission built with HTML, SQL, PHP, JS.',
        link: 'https://info465.us/dyuan',
        imgSrc: './assets/images/robos.png',
        details: [
            {
                imgSrc: './assets/images/robos1.png',
                caption: 'This site is user authenticated with a PHP script.',
            },
            {
                imgSrc: './assets/images/robos2.png',
                caption: 'After logging in, there are a few pages that are available for members.',
            },
            {
                imgSrc: './assets/images/robos3.png',
                caption: 'This is the Membership Application page. It is JS validated. If submitted incorrectly or without the required fields, then this popup will occur, preventing submittion. Once submitted, the form will be entered into a SQL database and on the Applicants page shown below.',
            },
            {
                imgSrc: './assets/images/robos4.png',
                caption: 'The Applicant page shows a list of the members that have signed up to the site. This page pulls information from the database to display the members.',
            },
            {
                imgSrc: './assets/images/robos5.png',
                caption: 'Before we get to the commissions page, we need to look at the purchase page. On the homepage, there are 3 products. Clicking on one of these products redirects you to the 2017Winter website (page shown above), which is the main site where you would purchase the products.',
            },
            {
                imgSrc: './assets/images/robos6.png',
                caption: 'This is the final page of the site. It shows the commissions for David Yuan that is pulled from the database. All the pages use PHP scripts and SQL to update in real time. The entire website was built using "vi" in the terminal.',
            },
        ],
    },
    {
        id: '3',
        name: 'Simple Banking',
        description: 'A simple banking program in terminal built with C++.',
        link: 'https://github.com/davidy804/dy_info_450_spring_2020/tree/master/exam',
        imgSrc: './assets/images/bank.png',
        details: [
            {
                imgSrc: './assets/images/bank1.png',
                caption: 'The savings account is a very simple add, subtract, and display, so I did not see the need to show or explain it. Instead, I will skipping to the checking account. The "Write A Check" function asks for the amount and the check number. The amount typed will subtract from the account total. The check number will save into an array that can be displayed in the "Display Checking" function.',
            },
            {
                imgSrc: './assets/images/bank2.png',
                caption: 'This is what is shown when the "Display Checking" function is used. It displays the last 10 check numbers that were written.',
            },
            {
                imgSrc: './assets/images/bank3.png',
                caption: 'The "Make a Charge" function is used here. It asks for the amount and the name for the charge. The amount will subtract from the account total. The name will be added into an array with the last 10 charges.',
            },
            {
                imgSrc: './assets/images/bank4.png',
                caption: 'This is what is shown when the "Display Credit Card" function is used. It displays the last 10 charges on the card. Notice the credit card account is now in the negatives. It can be paid for using the "Credit Card Payment" function.',
            },
            {
                imgSrc: './assets/images/bank5.png',
                caption: 'This is the creditcard.cpp file opened in Visual Studio Code. This shows how the credit card functions were built. The checking account functions were built in a similar way.',
            },
            {
                imgSrc: './assets/images/bank6.png',
                caption: 'This is the Makefile. The .exe program can be created using the Makefile. To look at the code in more detail, please visit the github repository using the link at the top of the page.',
            },
        ],
    },
];