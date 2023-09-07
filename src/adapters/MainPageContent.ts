import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From MainPage_MetaData
 */
export type MainPage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type MainPage_MetaData = Array<{
    basicSeoDataBlock?: MainPage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From MainPage_Body
 */
export type MainPage_Body_MainPageHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
    heroImage: { image: ImageField };
};
/**
 * From Document Areas
 */
export type MainPage_Body = Array<{
    mainPageHeroBlock?: MainPage_Body_MainPageHeroBlock;
}>;
/**
 * Document Areas
 */
export type MainPage_DocumentAreas = {
    metaData: MainPage_MetaData;
    body: MainPage_Body;
};
/**
 * Document Content
 */
export type MainPageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    documentAreas: MainPage_DocumentAreas;
};