import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
//setting the boiler point for the redux toolkit to be able to fetch the data from shazam core rapid api
    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key',);
            return headers;
            },
        }),
/*'e7699eadb9mshb1bdfd876042b2bp113b43jsncabaa1eb0ddf' */
        //setting the endpoints for the songs i will be fetching
        endpoints:(builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
            getSongByGenre: builder.query({ query: (genre ) => '/charts/genre-world' }), 
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        }), 
});

//exporting each enpoints so they can be accessible in other files
export const {
    useGetTopChartsQuery,
    useGetSongByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    
    } = shazamCoreApi