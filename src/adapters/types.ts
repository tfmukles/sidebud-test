import { MainPageContent } from './MainPageContent';
import { SamplePageContent } from './SamplePageContent';
import { SiteContent } from './SiteContent';
export * from './MainPageContent';
export * from './SamplePageContent';
export * from './SiteContent';

export type DocumentClass = 'MainPage' | 'SamplePage' | 'Site';

export type DocumentContentContext = {
    mainPageContent?: MainPageContent;
    samplePageContent?: SamplePageContent;
    siteContent?: SiteContent;
};

export type DocumentNode = {
    id: string;
    path: string;
    name: string;
    documentClass: DocumentClass;
    documentContentContext: DocumentContentContext;
    children: Array<DocumentNode>;
};

export type DocumentsListField = {
    parentDocumentIds?: Array<string>;
    documentIds?: Array<string>;
};

export type ImageField = {
    src: string;
    alt: string;
    focusX?: number;
    focusY?: number;
};

export type LinkField = { href: string; target: string };
