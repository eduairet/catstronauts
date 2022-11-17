import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql`
    query CompleteTracks {
        tracksForHome {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
        }
    }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export default function Tracks() {
    const { loading, error, data } = useQuery(TRACKS);
    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {data?.tracksForHome.map((track, i) => (
                    <TrackCard
                        key={`${track.title}${i.toFixed(0, 2)}`}
                        track={track}
                    />
                ))}
            </QueryResult>
        </Layout>
    );
}
