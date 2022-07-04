/* eslint-disable */
import * as Types from '../../../../../infra/graphql';

import gql from 'graphql-tag';
export type GetAllMembersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { __typename?: 'Query', members?: Array<{ __typename?: 'Member', id: string, nickname: string, role: string, catchCopy?: string | null } | null> | null };


export const GetAllMembers = gql`
    query GetAllMembers {
  members {
    id
    nickname
    role
    catchCopy
  }
}
    `;