import React from 'react';
import {ContentAdapterProvider} from '@/adapters';
import {MainPage} from '@/components/MainPage/MainPage';
import {SamplePage} from '@/components/SamplePage/SamplePage';

export function PageFacade() {
    return (
        <ContentAdapterProvider>
            <MainPage />
            <SamplePage />
        </ContentAdapterProvider>
    );
}
