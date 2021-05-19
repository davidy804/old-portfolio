import { ProjectModel } from './project-model';

export const ProjectItems: ProjectModel[] = [
    {
        id: '1',
        name: 'Portfolio',
        description: 'This website that you are browsing right now. Built with Angular and Git.',
        imgSrc: './assets/images/portfolio.png',
        details: [
            {
                imgSrc: 'img 1',
                caption: '//123',
            },
            {
                imgSrc: 'img 2',
                caption: '//321',
            }
        ],
    },
    {
        id: '2',
        name: 'Yuans Robos',
        description: 'E-commerce website with user authentication, form validation, and commission built with HTML, SQL, PHP, JS.',
        imgSrc: './assets/images/robos.png',
        details: [
            {
                imgSrc: './assets/images/robos1.png',
                caption: 'log in authentication',
            },
            {
                imgSrc: './assets/images/robos2.png',
                caption: 'different tabs',
            }
        ],
    },
    {
        id: '3',
        name: 'Simple Banking',
        description: 'A simple banking program in terminal built with C++.',
        imgSrc: './assets/images/bank.png',
        details: [
            {
                imgSrc: 'img 1',
                caption: '//abc',
            },
            {
                imgSrc: 'img 2',
                caption: '//cba',
            }
        ],
    },
];