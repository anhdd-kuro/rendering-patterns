/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blog = {
  __typename?: 'Blog';
  category: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['ID'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Thumbnail>;
  title: Scalars['String'];
  url: Scalars['String'];
  writer: Member;
};

export type Member = {
  __typename?: 'Member';
  catchCopy?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  role: Scalars['String'];
};

export type MemberInput = {
  catchCopy?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  role: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMember?: Maybe<Member>;
};


export type MutationCreateMemberArgs = {
  input: MemberInput;
};

export type Query = {
  __typename?: 'Query';
  blogs?: Maybe<Array<Maybe<Blog>>>;
  members?: Maybe<Array<Maybe<Member>>>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  alt: Scalars['String'];
  id: Scalars['ID'];
  src: Scalars['String'];
};
