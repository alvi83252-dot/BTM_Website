import { delay, http, HttpResponse } from 'msw'; // import MSW v2 HTTP utilities 

    export const handlers = [ // define request handlers
        http.get('/api/hero-content', async () => { // Mock GET request for hero content 
        // simulate network latency 
        await delay(800); // milliseconds


        return HttpResponse.json({ // return mocked JSON response
            title: 'Digital Innovation',
            subtitle: 'Powered by Brunel Talent',
            description: 'Delivering real-world IT and AI projects through academic experts and paid student talent. Affordable innovation that creates shared value.',
            primaryCtaLabel: 'Partner with BTM',
            secondaryCtaLabel: 'Join as a Student',
        });
    }),
];