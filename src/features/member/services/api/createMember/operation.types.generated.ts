/* eslint-disable */
import * as Types from '../../../../../infra/graphql';

import gql from 'graphql-tag';
export type CreateMemberMutationVariables = Types.Exact<{
  input: Types.MemberInput;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember?: { __typename?: 'Member', id: string, nickname: string, role: string } | null };


export const CreateMember = gql`
    mutation CreateMember($input: MemberInput!) {
  createMember(input: $input) {
    id
    nickname
    role
  }
}
    `;