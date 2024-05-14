export interface IProject {
    id: number;
    title: string;
    description: string;
    teamsize: string;
    role: string;
    tasks: string;
    environment: string;
    framework: string;
    buildtools: string;
    language: string;
    technical: string;
    [key: string]: any;
}

