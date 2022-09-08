/* eslint-disable */
import * as Types from '../../../../../infra/graphql/schema.types.generated';

export type CreateMemberMutationVariables = Types.Exact<{
  input: Types.MemberInput;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember?: { __typename?: 'Member', id: string, nickname: string, role: string } | null };
