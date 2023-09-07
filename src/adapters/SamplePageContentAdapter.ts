import { ContentAdapter } from '@sitebud/bridge-lib';
import { SamplePageContent, SamplePage_DocumentAreas } from './types';
export class SamplePageContentAdapter extends ContentAdapter<SamplePageContent> {
    adapt(): SamplePageContent {
        const { hasRestrictedAreas, content, path, locale } =
            this._documentData;
        const result: SamplePageContent = {
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
                sampleBlock: {
                    sampleComponent: [
                        { name: 'heading', type: 'HeaderText' },
                        { name: 'paragraph', type: 'ParagraphText' },
                        { name: 'image', type: 'Image' },
                        { name: 'documentsList', type: 'DocumentsList' },
                        { name: 'icon', type: 'Icon' },
                        { name: 'stringValue', type: 'StringValue' },
                    ],
                },
            },
        }) as SamplePage_DocumentAreas;
        return result;
    }
}