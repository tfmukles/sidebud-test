import {BlockConfig} from '@sitebud/sdk-lib';

export const navigationMenuBlock: BlockConfig = {
    label: 'Navigation Menu Block',
    description: 'A structured menu of hyperlinks connecting key pages of this website.',
    components: {
        navigationMenu: {
            indexNumber: 0,
            label: 'Navigation Menu Links',
            helpText: 'A structured menu of hyperlinks connecting key pages of this website.',
            props: {
                documentsList: {
                    indexNumber: 0,
                    type: 'DocumentsList',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                    }
                },
            }
        }
    }
};
