import {BlockConfig} from '@sitebud/sdk-lib';

export const mainPageHeroBlock: BlockConfig = {
    label: 'Hero Block',
    description: 'A sample of the hero block for main page',
    imageName: 'hero_block.webp',
    components: {
        heroTitle: {
            label: 'Hero Title',
            helpText: '',
            indexNumber: 0,
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Welcome...</h1>'
                    }
                }
            }
        },
        heroImage: {
            indexNumber: 2,
            label: 'Hero Image',
            props: {
                image: {
                    indexNumber: 0,
                    type: 'Image',
                    fieldContent: {}
                }
            }
        }
    }
};
