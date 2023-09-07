import {BlockConfig} from '@sitebud/sdk-lib';

export const siteLogoBlock: BlockConfig = {
    label: 'Site Logo Block',
    description: 'The logo elements in the main menu of a website serve as key branding components that represent the website\'s identity.',
    imageName: 'logo.webp',
    components: {
        logoImage: {
            indexNumber: 0,
            label: 'Logo Image',
            helpText: 'The logo is a distinctive graphic symbol or design, while the logo title is the accompanying text, usually the website or company name.',
            imageName: '',
            props: {
                image: {
                    indexNumber: 0,
                    type: 'Image',
                    isRequired: true,
                    fieldContent: {}
                },
            }
        },
        logoTitle: {
            indexNumber: 1,
            label: 'Logo Title',
            helpText: 'A logo title element in the main menu of a website is the textual representation of the website or company name, positioned alongside or near the logo.',
            imageName: 'menu-logo-block.webp',
            props: {
                text: {
                    indexNumber: 0,
                    type: 'StringValue',
                    isRequired: true,
                    fieldContent: {}
                },
            }
        }
    }
};
