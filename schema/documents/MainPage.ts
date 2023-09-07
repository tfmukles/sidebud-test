import {DocumentConfig} from '@sitebud/sdk-lib';
import {mainPageHeroBlock, basicSeoDataBlock} from '../blocks';

export const MainPage: DocumentConfig = {
    type: 'main_page',
    label: 'Main Page',
    defaultTitle: 'Home',
    defaultSlug: 'home',
    description: 'The main page, often called the "homepage," is the entry point and central hub of a website. It provides an overview of the site\'s purpose, features key content and sections, and offers intuitive navigation.',
    imageName: '',
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
                mainPageHeroBlock,
            }
        }
    }
};
