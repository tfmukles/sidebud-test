import { DocumentsListField, ImageField, LinkField } from './types';
/**
 * From Site_MainNavigation
 */
export type Site_MainNavigation_SiteLogoBlock = {
    __accessLevel?: number;
    logoImage: { image: ImageField };
    logoTitle: { text: string };
};
/**
 * From Site_MainNavigation
 */
export type Site_MainNavigation_NavigationMenuBlock = {
    __accessLevel?: number;
    navigationMenu: { documentsList: DocumentsListField };
};
/**
 * From Document Areas
 */
export type Site_MainNavigation = Array<{
    siteLogoBlock?: Site_MainNavigation_SiteLogoBlock;
    navigationMenuBlock?: Site_MainNavigation_NavigationMenuBlock;
}>;
/**
 * Document Areas
 */
export type Site_DocumentAreas = {
    mainNavigation: Site_MainNavigation;
};
/**
 * Document Content
 */
export type SiteContent = {
    hasRestrictedAreas?: boolean;
    documentAreas: Site_DocumentAreas;
};