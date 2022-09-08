/* eslint-disable */
import * as Types from '../../../../../infra/graphql/schema.types.generated';

export type GetAllMembersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { __typename?: 'Query', members?: Array<{ __typename?: 'Member', id: string, nickname: string, role: string, catchCopy?: string | null } | null> | null };
