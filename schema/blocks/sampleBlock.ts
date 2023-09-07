import {BlockConfig} from '@sitebud/sdk-lib';

export const sampleBlock: BlockConfig = {
    label: 'Sample Block With Single Component',
    description: 'This block consists of a single component, encompassing all available properties in the CMS.',
    imageName: 'sample_block.webp',
    components: {
        sampleComponent: {
            indexNumber: 0,
            helpText: 'This block consists of a single component, encompassing all available properties in the CMS. While this block includes a single component, it\'s not limited to one. Blocks can house multiple components. The interplay of numerous components and their respective properties allows for the creation of diverse web page content.',
            label: 'Component With All Props',
            props: {
                heading: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    label: 'Header Text Property',
                    fieldContent: {
                        htmlText: '<h1>Type some heading...</h1>',
                    }
                },
                paragraph: {
                    indexNumber: 1,
                    type: 'ParagraphText',
                    label: 'Paragraph Text Property',
                    fieldContent: {
                        htmlText: '<p>Type some text...</p>',
                    }
                },
                image: {
                    indexNumber: 2,
                    type: 'Image',
                    label: 'Image Property',
                    isRequired: true,
                    fieldContent: {}
                },
                documentsList: {
                    indexNumber: 3,
                    type: 'DocumentsList',
                    label: 'Documents List Property',
                    isRequired: true,
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents By One',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                            }
                        },
                        {
                            label: 'Select Documents By Parent',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments',
                            }
                        }
                    ]
                },
                icon: {
                    indexNumber: 4,
                    label: 'Icon Property',
                    type: 'Icon',
                    isRequired: true,
                    fieldContent: {
                        iconName: 'key'
                    },
                    fieldContentVariants: [
                        {
                            label: 'Key Icon',
                            fieldContent: {
                                iconName: 'key'
                            }
                        },
                        {
                            label: 'Trash Icon',
                            fieldContent: {
                                iconName: 'trash'
                            }
                        }
                    ]
                },
                stringValue: {
                    indexNumber: 5,
                    type: 'StringValue',
                    label: 'String Value Property',
                    isRequired: true,
                    fieldContent: {
                        value: 'Arbitrary string value'
                    }
                }
            }
        }
    }
};
