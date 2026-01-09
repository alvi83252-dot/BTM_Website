import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // import RTK Query helpers

// Define hero content data shape
interface HeroContent {
    title: string;
    subtitle: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
}

// create RTK Query API slice
export const contentApi = createApi({
    reducerPath: 'contentApi', // unique key for reducer 
    baseQuery: fetchBaseQuery({ // Base API configuration
        baseUrl: '/api', // will be intercepted by MSW later
    }),
    endpoints: (builder) => ({ // define API endpoints
        getHeroContent: builder.query<HeroContent, void>({ // fetch hero section content
            query: () => 'hero-content',
        }),
    }),
});

export const { useGetHeroContentQuery } = contentApi; // export auto-generated hook for the hero content query