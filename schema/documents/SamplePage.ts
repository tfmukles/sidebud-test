import {DocumentConfig} from '@sitebud/sdk-lib';
import {basicSeoDataBlock, sampleBlock} from '../blocks';

export const SamplePage: DocumentConfig = {
    type: 'page',
    label: 'Sample Page',
    defaultTitle: 'Sample',
    defaultSlug: 'sample',
    description: 'A sample page',
    imageName: 'sample_page.webp',
    documentAreas: {
        metaData: {
            indexNumber: 0,
            label: 'Meta Data',
            blocks: {
                basicSeoDataBlock
            }
        },
        body: {
            indexNumber: 1,
            label: 'Body',
            blocks: {
                sampleBlock
            }
        }
    }
};
