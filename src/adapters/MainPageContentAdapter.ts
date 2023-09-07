import { ContentAdapter } from '@sitebud/bridge-lib';
import { MainPageContent, MainPage_DocumentAreas } from './types';
export class MainPageContentAdapter extends ContentAdapter<MainPageContent> {
    adapt(): MainPageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: MainPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale: locale || '',
            hasRestrictedAreas: !!hasRestrictedAreas,
            documentAreas: {
                metaData: [],
                body: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            metaData: {
                basicSeoDataBlock: {
                    metaDataFields: [
                        { name: 'description', type: 'StringValue' },
                        { name: 'robots', type: 'StringValue' },
                    ],
                },
            },
            body: {
                mainPageHeroBlock: {
                    heroTitle: [{ name: 'text', type: 'HeaderText' }],
                    heroImage: [{ name: 'image', type: 'Image' }],
                },
            },
        }) as MainPage_DocumentAreas;
        return result;
    }
}