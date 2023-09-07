import React from 'react';
import Head from 'next/head';
import {useAdaptedContent} from '@/adapters';

export function MainPageHead() {
    const {mainPageContent, siteContent} = useAdaptedContent();
    if (mainPageContent && siteContent) {
        const {title, locale, baseUrl} = mainPageContent;

        let metaDescription = '';
        let metaRobots = 'noindex, nofollow';
        for (const metaDataBlockContext of mainPageContent.documentAreas.metaData) {
            const {basicSeoDataBlock} = metaDataBlockContext;
            if (basicSeoDataBlock) {
                metaDescription = basicSeoDataBlock.metaDataFields.description || metaDescription;
                metaRobots = basicSeoDataBlock.metaDataFields.robots || metaRobots;
            }
        }

        let pageTitle: string = title;
        let twitterImageUrl = '';
        for (const metaDataBlockContext of siteContent.documentAreas.mainNavigation) {
            if (metaDataBlockContext.siteLogoBlock) {
                const {logoImage, logoTitle} = metaDataBlockContext.siteLogoBlock;
                pageTitle = `${pageTitle} | ${logoTitle.text}`;
                if (logoImage.image.src) {
                    twitterImageUrl = `${baseUrl}/${logoImage.image.src}`;
                }
            }
        }
        return (
            <>
                <Head>
                    <meta name="description" content={metaDescription}/>
                    <meta name="robots" content={metaRobots}/>
                    <meta property="og:description" content={metaDescription}/>
                    <meta property="og:locale" content={locale}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={metaDescription}/>
                    <meta name="twitter:image" content={twitterImageUrl}/>
                    <title>{pageTitle}</title>
                </Head>
            </>
        );
    }
    return null;
}
