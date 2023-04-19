import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { WebSocket } from '@apollo/client/'

const client = new ApolloClient({
    uri: 'https://up-egret-17.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'oiQom47I7iRy2ID2p7tM7MOGcPBMTDqaor8Nzmnv987YERf2KKU1srFcq2VpKWnu'
    }
})
export default client

// const wsLink = new WebSocket({
//     uri: 'https://up-egret-17.hasura.app/v1/graphql',
//     options: {
//         reconnect: true,
//         connectParams: {
//             headers: {
//                 'x-hasura-admin-secret': 'oiQom47I7iRy2ID2p7tM7MOGcPBMTDqaor8Nzmnv987YERf2KKU1srFcq2VpKWnu'
//             }
//         }
//     }
// })

// const split = split()