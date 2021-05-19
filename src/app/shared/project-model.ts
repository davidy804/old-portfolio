export class ProjectModel {
    id: any;
    name: string;
    description: string;
    imgSrc?: string;
    details: [
        {
            imgSrc?: string;
            caption?: string;
        },
        {
            imgSrc?: string;
            caption?: string;
        },
    ];
}
