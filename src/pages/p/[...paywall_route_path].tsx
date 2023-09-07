import path from 'path';
import fs from 'fs-extra';
import React from 'react';
import type {NextPage, InferGetServerSidePropsType, GetServerSidePropsContext} from 'next';
import {useRouter} from 'next/router';
import Script from 'next/script';
import {
    PreviewDataProvider,
    RawDataProvider,
    fetchRawData,
    initExternalModules,
    RequestOptions, Data
} from '@sitebud/bridge-lib';
import {PageFacade} from '@/PageFacade';
import NotFound from '../404';

export async function getServerSideProps({locale, params, preview}: GetServerSidePropsContext) {
    const route_path = (params?.paywall_route_path as string[]) || [];
    if (route_path.length > 0) {
        let slug: string = route_path[route_path.length - 1];
        try {
            const requestOptions: RequestOptions = {
                accessLevel: 1
            };
            initExternalModules({fsExtra: fs, path});
            if (!preview) {
                const data: Data = await fetchRawData(requestOptions, locale, slug);
                return {
                    props: {
                        data,
                        slug,
                        isPreview: false
                    },
                    // Next.js will attempt to re-generate the page:
                    // - When a request comes in
                    // - At most once every 30 minutes
                    // revalidate: 60 * 30
                }
            }
            return {
                props: {
                    slug,
                    isPreview: true,
                    accessLevel: requestOptions.accessLevel,
                }
            }
        } catch (e: unknown) {
            // any failed scenario will lead to the not found result
            return {
                props: {},
                notFound: true,
            }
        }
    }
    return {
        props: {},
        notFound: true,
    }
}

const PaywallRoutePage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps> & { children?: React.ReactNode }) => {
    const {data, slug, isPreview, accessLevel} = props;
    const {locale, defaultLocale} = useRouter();
    if (isPreview) {
        return (
            <PreviewDataProvider
                Script={Script}
                custom404={<NotFound/>}
                slug={slug}
                requestOptions={{accessLevel: accessLevel || 1}}
                locale={locale || defaultLocale || ''}
            >
                <PageFacade />
            </PreviewDataProvider>
        );
    }
    return (
        <RawDataProvider
            data={data}
            custom404={<NotFound/>}
        >
            <PageFacade />
        </RawDataProvider>
    );
}

export default PaywallRoutePage;
