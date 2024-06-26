export interface IProject {
    id: number;
    title: string;
    description: string;
    industry: string;
    timeperiod: string;
    teamsize: string;
    role: string;
    tasks: string;
    environment: string;
    framework: string;
    buildtools: string;
    language: string;
    os: string;
    [key: string]: any;
}

