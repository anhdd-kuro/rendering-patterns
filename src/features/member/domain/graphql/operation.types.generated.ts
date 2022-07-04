/* eslint-disable */
import * as Types from '../../../../infra/graphql';

import { z } from 'zod'
import { MemberInput } from '@/infra/graphql'
import gql from 'graphql-tag';
export type GetAllMembersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { __typename?: 'Query', members?: Array<{ __typename?: 'Member', id: string, nickname: string, role: string } | null> | null };

export type CreateMemberMutationVariables = Types.Exact<{
  input: Types.MemberInput;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember?: { __typename?: 'Member', id: string, nickname: string, role: string } | null };

export type MemberFieldsFragment = { __typename?: 'Member', id: string, nickname: string, role: string };

export const MemberFields = gql`
    fragment MemberFields on Member {
  id
  nickname
  role
}
    `;
export const GetAllMembers = gql`
    query GetAllMembers {
  members {
    ...MemberFields
  }
}
    ${MemberFields}`;
export const CreateMember = gql`
    mutation CreateMember($input: MemberInput!) {
  createMember(input: $input) {
    ...MemberFields
  }
}
    ${MemberFields}`;

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function MemberInputSchema(): z.ZodObject<Properties<MemberInput>> {
  return z.object({
    catchCopy: z.string().nullish(),
    firstName: z.string().nullish(),
    imageUrl: z.string().nullish(),
    lastName: z.string().nullish(),
    nickname: z.string(),
    role: z.string()
  })
}
