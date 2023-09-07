import React from 'react';
import Link from 'next/link';
import {useAdaptedContent, useDocumentsMap, getDocumentContentContextList} from '@/adapters';
import {MainPageHead} from '@/components/MainPage/MainPageHead';
import {MainNavigationArea} from '@/components/Site/MainNavigationArea';
import {IconEntry} from '@/icons/IconEntry';

function ComponentPropSection(props: { label: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start w-full border border-gray-200 rounded p-3 mb-5">
            <h3 className="text-2xl mb-3 rounded bg-gray-100 p-2">{props.label}</h3>
            {props.children}
        </div>
    );
}

export function SamplePage() {
    const documentContentContext = useAdaptedContent();
    const documentsMap = useDocumentsMap();
    if (documentContentContext?.samplePageContent) {
        const {documentAreas} = documentContentContext?.samplePageContent;
        return (
            <>
                <MainPageHead/>
                <div className="w-full container">
                    <MainNavigationArea/>
                </div>
                <main className="w-full container">
                    {documentAreas.body.map((bodyBlockContext, idx) => {
                        const {sampleBlock} = bodyBlockContext;
                        if (sampleBlock) {
                            const {sampleComponent} = sampleBlock;
                            return (
                                <section key={`sampleComponent_${idx}`} className="py-16">
                                    <div className="w-full mb-8 flex flex-col items-center">
                                        <ComponentPropSection label="Header Text">
                                            <div className="custom-prose w-full"
                                                 dangerouslySetInnerHTML={{__html: sampleComponent.heading}}/>
                                        </ComponentPropSection>
                                        <ComponentPropSection label="Paragraph Text">
                                            <div className="custom-prose w-full"
                                                 dangerouslySetInnerHTML={{__html: sampleComponent.paragraph}}/>
                                        </ComponentPropSection>
                                        <ComponentPropSection label="Image">
                                            <img
                                                src={sampleComponent.image.src}
                                                alt={sampleComponent.image.alt}
                                                className="h-52"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: `${sampleComponent.image.focusX || 50}% ${sampleComponent.image.focusY || 50}%`
                                                }}
                                            />
                                        </ComponentPropSection>
                                        <ComponentPropSection label="Documents List">
                                            <div className="flex flex-col items-start">
                                                {getDocumentContentContextList(documentsMap, sampleComponent.documentsList).map((documentContext, idx) => {
                                                    const {mainPageContent, samplePageContent} = documentContext;
                                                    if (mainPageContent) {
                                                        return (
                                                            <div key={`mainPageContent_${idx}`}
                                                                 className="rounded-[6px] bg-blue-400 text-white p-2 mb-3">
                                                                <Link className="hover:underline"
                                                                      href={mainPageContent?.path}>{mainPageContent?.title}</Link>
                                                            </div>
                                                        );
                                                    } else if (samplePageContent) {
                                                        return (
                                                            <div key={`samplePageContent_${idx}`}
                                                                 className="rounded-[6px] bg-blue-400 text-white p-2 mb-3">
                                                                <Link className="hover:underline"
                                                                      href={samplePageContent?.path}>{samplePageContent?.title}</Link>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </ComponentPropSection>
                                        <ComponentPropSection label="Icon">
                                            <IconEntry iconKey={sampleComponent.icon} className="h-12"/>
                                        </ComponentPropSection>
                                        <ComponentPropSection label="String Value">
                                            <code className="p-3">
                                                <pre>
                                                    {sampleComponent.stringValue}
                                                </pre>
                                            </code>
                                        </ComponentPropSection>
                                    </div>
                                </section>
                            );
                        }
                    })}
                </main>
            </>
        );
    }
    return null;
}
