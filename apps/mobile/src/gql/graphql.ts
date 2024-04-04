import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Assignment = {
  __typename?: 'Assignment';
  allowsubmissionsfromdate?: Maybe<Scalars['Int']['output']>;
  cmid?: Maybe<Scalars['Int']['output']>;
  course?: Maybe<Scalars['Int']['output']>;
  duedate?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  introattachments?: Maybe<Array<IntroFile>>;
  introfiles?: Maybe<Array<IntroFile>>;
  name?: Maybe<Scalars['String']['output']>;
  timemodified?: Maybe<Scalars['Int']['output']>;
};

export type AuthEntity = {
  __typename?: 'AuthEntity';
  accessTokenExpiredDate?: Maybe<Scalars['Date']['output']>;
  access_token: Scalars['String']['output'];
  auth?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstaccess?: Maybe<Scalars['Int']['output']>;
  fullname: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  lastaccess?: Maybe<Scalars['Int']['output']>;
  mailformat?: Maybe<Scalars['String']['output']>;
  preferences: Array<UserPreference>;
  profileimageurl?: Maybe<Scalars['String']['output']>;
  profileimageurlsmall?: Maybe<Scalars['String']['output']>;
  refreshTokenExpiredDate?: Maybe<Scalars['Date']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  suspended?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Calendar = {
  __typename?: 'Calendar';
  id: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type Course = {
  __typename?: 'Course';
  assignment: Assignment;
  assignments: Array<Assignment>;
  categoryid?: Maybe<Scalars['Int']['output']>;
  categoryname?: Maybe<Scalars['String']['output']>;
  contacts: Array<Lecturer>;
  contentSections: Array<CourseSectionEntity>;
  coursecategory?: Maybe<Scalars['String']['output']>;
  courseimage?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  enddate?: Maybe<Scalars['Int']['output']>;
  events: Array<EventEntity>;
  fullname?: Maybe<Scalars['String']['output']>;
  hiddenbynumsections?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  idnumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdfexportfont?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  shortname?: Maybe<Scalars['String']['output']>;
  showactivitydates?: Maybe<Scalars['Boolean']['output']>;
  showcompletionconditions?: Maybe<Scalars['String']['output']>;
  sortorder?: Maybe<Scalars['Int']['output']>;
  startdate?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryformat?: Maybe<Scalars['Int']['output']>;
  uservisible?: Maybe<Scalars['Boolean']['output']>;
  viewurl?: Maybe<Scalars['String']['output']>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};


export type CourseAssignmentArgs = {
  cmid: Scalars['Int']['input'];
};


export type CourseEventsArgs = {
  isComing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseContentEntity = {
  __typename?: 'CourseContentEntity';
  author?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filepath?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['String']['output']>;
  fileurl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  sortorder?: Maybe<Scalars['String']['output']>;
  timecreated?: Maybe<Scalars['String']['output']>;
  timemodified?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userid?: Maybe<Scalars['String']['output']>;
};

export type CourseModuleEntity = {
  __typename?: 'CourseModuleEntity';
  afterlink?: Maybe<Scalars['String']['output']>;
  assignDueDate?: Maybe<Scalars['Int']['output']>;
  assignOpenedDate?: Maybe<Scalars['Int']['output']>;
  completion?: Maybe<Scalars['Int']['output']>;
  completionnotify?: Maybe<Scalars['Int']['output']>;
  contextid?: Maybe<Scalars['Int']['output']>;
  course?: Maybe<Scalars['Int']['output']>;
  courseContents?: Maybe<Array<CourseContentEntity>>;
  customdata?: Maybe<Scalars['String']['output']>;
  defaultgroupingid?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  downloadcontent?: Maybe<Scalars['Int']['output']>;
  enablecompletion?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  groupingid?: Maybe<Scalars['Int']['output']>;
  groupmode?: Maybe<Scalars['Int']['output']>;
  groupmodeforce?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  indent?: Maybe<Scalars['Int']['output']>;
  instance?: Maybe<Scalars['Int']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  maxbytes?: Maybe<Scalars['Int']['output']>;
  modicon?: Maybe<Scalars['String']['output']>;
  modname: Scalars['String']['output'];
  modplural?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  newsitems?: Maybe<Scalars['Int']['output']>;
  noviewlink?: Maybe<Scalars['Boolean']['output']>;
  onclick?: Maybe<Scalars['String']['output']>;
  sectionnum?: Maybe<Scalars['Int']['output']>;
  showgrades?: Maybe<Scalars['Int']['output']>;
  showreports?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uservisible?: Maybe<Scalars['Boolean']['output']>;
  visible?: Maybe<Scalars['Int']['output']>;
  visibleoncoursepage?: Maybe<Scalars['Int']['output']>;
};

export type CourseSectionEntity = {
  __typename?: 'CourseSectionEntity';
  courseModules: Array<CourseModuleEntity>;
  hiddenbynumsections?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  section?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryformat?: Maybe<Scalars['Int']['output']>;
  uservisible?: Maybe<Scalars['Boolean']['output']>;
  visible?: Maybe<Scalars['Int']['output']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  activityname?: Maybe<Scalars['String']['output']>;
  activitystr?: Maybe<Scalars['String']['output']>;
  candelete?: Maybe<Scalars['Boolean']['output']>;
  canedit?: Maybe<Scalars['Boolean']['output']>;
  categoryid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  course: Course;
  deleteurl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editurl?: Maybe<Scalars['String']['output']>;
  eventcount?: Maybe<Scalars['String']['output']>;
  eventtype?: Maybe<Scalars['String']['output']>;
  formattedlocation?: Maybe<Scalars['String']['output']>;
  formattedtime?: Maybe<Scalars['String']['output']>;
  groupid?: Maybe<Scalars['String']['output']>;
  groupname?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  instance?: Maybe<Scalars['Int']['output']>;
  isactionevent?: Maybe<Scalars['Boolean']['output']>;
  iscategoryevent?: Maybe<Scalars['Boolean']['output']>;
  iscourseevent?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modulename?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  normalisedeventtype?: Maybe<Scalars['String']['output']>;
  normalisedeventtypetext?: Maybe<Scalars['String']['output']>;
  overdue?: Maybe<Scalars['Boolean']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  repeatid?: Maybe<Scalars['String']['output']>;
  timeduration?: Maybe<Scalars['Int']['output']>;
  timemodified?: Maybe<Scalars['Int']['output']>;
  timesort?: Maybe<Scalars['Int']['output']>;
  timestart?: Maybe<Scalars['Int']['output']>;
  timeusermidnight?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userid?: Maybe<Scalars['Int']['output']>;
  viewurl?: Maybe<Scalars['String']['output']>;
  visible?: Maybe<Scalars['Int']['output']>;
};

export type IntroFile = {
  __typename?: 'IntroFile';
  filename?: Maybe<Scalars['String']['output']>;
  filepath?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Int']['output']>;
  fileurl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  timemodified?: Maybe<Scalars['Int']['output']>;
};

export type Lecturer = {
  __typename?: 'Lecturer';
  email?: Maybe<Scalars['String']['output']>;
  firstaccess?: Maybe<Scalars['Float']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  lastaccess?: Maybe<Scalars['Float']['output']>;
  profileimageurl?: Maybe<Scalars['String']['output']>;
  profileimageurlsmall?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  findAllEventByCourseIds: Array<Calendar>;
  login: AuthEntity;
  refreshToken: AuthEntity;
};


export type MutationFindAllEventByCourseIdsArgs = {
  courseids: Array<Scalars['Int']['input']>;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  course: Course;
  findAll: Array<Subject>;
  findOne: Array<Subject>;
  profile: User;
  userCourses: Array<Course>;
  userEvents: Array<EventEntity>;
};


export type QueryCourseArgs = {
  course_id: Scalars['Int']['input'];
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isRecent?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindAllArgs = {
  nameVN: Scalars['String']['input'];
};


export type QueryFindOneArgs = {
  code: Scalars['String']['input'];
};


export type QueryUserCoursesArgs = {
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isRecent?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserEventsArgs = {
  isComing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Subject = {
  __typename?: 'Subject';
  code: Scalars['String']['output'];
  department: Scalars['String']['output'];
  equivalentCode?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  nameEN: Scalars['String']['output'];
  nameVN: Scalars['String']['output'];
  oldCode?: Maybe<Scalars['String']['output']>;
  practicalCredit: Scalars['Int']['output'];
  previousCode?: Maybe<Scalars['String']['output']>;
  requiredCode?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  theoreticalCredit: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  auth?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstaccess?: Maybe<Scalars['Int']['output']>;
  fullname: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  lastaccess?: Maybe<Scalars['Int']['output']>;
  mailformat?: Maybe<Scalars['String']['output']>;
  preferences: Array<UserPreference>;
  profileimageurl?: Maybe<Scalars['String']['output']>;
  profileimageurlsmall?: Maybe<Scalars['String']['output']>;
  suspended?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserPreference = {
  __typename?: 'UserPreference';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LoginApiMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type LoginApiMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthEntity', access_token: string, refresh_token?: string | null, auth?: string | null, city?: string | null, confirmed?: string | null, country?: string | null, department?: string | null, email: string, firstaccess?: number | null, fullname: string, id?: number | null, lang?: string | null, lastaccess?: number | null, mailformat?: string | null, profileimageurl?: string | null, profileimageurlsmall?: string | null, suspended?: string | null, theme?: string | null, timezone?: string | null, token: string, username: string } };

export type DetailAssignmentCourseQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  assignment_id: Scalars['Int']['input'];
}>;


export type DetailAssignmentCourseQuery = { __typename?: 'Query', assignmentCourse: { __typename?: 'Course', display_name?: string | null, fullname?: string | null, id?: number | null, shortname?: string | null, assignment: { __typename?: 'Assignment', allowsubmissionsfromdate?: number | null, cmid?: number | null, course?: number | null, duedate?: number | null, id?: number | null, intro?: string | null, name?: string | null, timemodified?: number | null, introattachments?: Array<{ __typename?: 'IntroFile', filename?: string | null, filepath?: string | null, filesize?: number | null, fileurl?: string | null, id?: string | null, mimetype?: string | null, timemodified?: number | null }> | null, introfiles?: Array<{ __typename?: 'IntroFile', filename?: string | null, filepath?: string | null, filesize?: number | null, fileurl?: string | null, id?: string | null, mimetype?: string | null, timemodified?: number | null }> | null } } };

export type GeneralDetailCourseQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GeneralDetailCourseQuery = { __typename?: 'Query', course: { __typename?: 'Course', coursecategory?: string | null, courseimage?: string | null, display_name?: string | null, enddate?: number | null, fullname?: string | null, id?: number | null, idnumber?: string | null, name?: string | null, section?: number | null, shortname?: string | null, startdate?: number | null, contacts: Array<{ __typename?: 'Lecturer', fullname?: string | null, id: number }>, assignments: Array<{ __typename?: 'Assignment', allowsubmissionsfromdate?: number | null, cmid?: number | null, course?: number | null, duedate?: number | null, id?: number | null, intro?: string | null, name?: string | null, timemodified?: number | null }>, events: Array<{ __typename?: 'EventEntity', activityname?: string | null, description?: string | null, id: number, modulename?: string | null, name: string, overdue?: boolean | null, purpose?: string | null, timestart?: number | null }>, contentSections: Array<{ __typename?: 'CourseSectionEntity', name: string, section?: number | null, summary?: string | null, id: number, courseModules: Array<{ __typename?: 'CourseModuleEntity', downloadcontent?: number | null, id: number, modicon?: string | null, modname: string, modplural?: string | null, name: string, url?: string | null, assignOpenedDate?: number | null, assignDueDate?: number | null, courseContents?: Array<{ __typename?: 'CourseContentEntity', author?: string | null, filename?: string | null, filepath?: string | null, filesize?: string | null, fileurl?: string | null, id: number, sortorder?: string | null, timecreated?: string | null, timemodified?: string | null, type?: string | null, userid?: string | null }> | null }> }> } };

export type SearchCoursesQueryVariables = Exact<{
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchCoursesQuery = { __typename?: 'Query', userCourses: Array<{ __typename?: 'Course', coursecategory?: string | null, display_name?: string | null, enddate?: number | null, id?: number | null, shortname?: string | null, startdate?: number | null }> };

export type UserCoursesQueryVariables = Exact<{
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isRecent?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserCoursesQuery = { __typename?: 'Query', userCourses: Array<{ __typename?: 'Course', categoryid?: number | null, categoryname?: string | null, display_name?: string | null, coursecategory?: string | null, courseimage?: string | null, enddate?: number | null, fullname?: string | null, id?: number | null, idnumber?: string | null, name?: string | null, shortname?: string | null, startdate?: number | null }> };

export type UserEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserEventsQuery = { __typename?: 'Query', userEvents: Array<{ __typename?: 'EventEntity', activityname?: string | null, purpose?: string | null, overdue?: boolean | null, timeduration?: number | null, timeusermidnight?: number | null, timestart?: number | null, timesort?: number | null, timemodified?: number | null, name: string, id: number, instance?: number | null, course: { __typename?: 'Course', categoryid?: number | null, categoryname?: string | null, coursecategory?: string | null, courseimage?: string | null, display_name?: string | null, enddate?: number | null, fullname?: string | null, hiddenbynumsections?: number | null, id?: number | null, idnumber?: string | null, name?: string | null, pdfexportfont?: string | null, section?: number | null, shortname?: string | null, showactivitydates?: boolean | null, showcompletionconditions?: string | null, sortorder?: number | null, startdate?: number | null, uservisible?: boolean | null, viewurl?: string | null, visible?: boolean | null } }> };


export const LoginApiDocument = gql`
    mutation LoginAPI($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    access_token
    refresh_token
    auth
    city
    confirmed
    country
    department
    email
    firstaccess
    fullname
    id
    lang
    lastaccess
    mailformat
    profileimageurl
    profileimageurlsmall
    suspended
    theme
    timezone
    token
    username
  }
}
    `;
export type LoginApiMutationFn = Apollo.MutationFunction<LoginApiMutation, LoginApiMutationVariables>;

/**
 * __useLoginApiMutation__
 *
 * To run a mutation, you first call `useLoginApiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginApiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginApiMutation, { data, loading, error }] = useLoginApiMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginApiMutation(baseOptions?: Apollo.MutationHookOptions<LoginApiMutation, LoginApiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginApiMutation, LoginApiMutationVariables>(LoginApiDocument, options);
      }
export type LoginApiMutationHookResult = ReturnType<typeof useLoginApiMutation>;
export type LoginApiMutationResult = Apollo.MutationResult<LoginApiMutation>;
export type LoginApiMutationOptions = Apollo.BaseMutationOptions<LoginApiMutation, LoginApiMutationVariables>;
export const DetailAssignmentCourseDocument = gql`
    query DetailAssignmentCourse($id: Int!, $assignment_id: Int!) {
  assignmentCourse: course(course_id: $id) {
    display_name
    fullname
    id
    shortname
    assignment(cmid: $assignment_id) {
      allowsubmissionsfromdate
      cmid
      course
      duedate
      id
      intro
      name
      timemodified
      introattachments {
        filename
        filepath
        filesize
        fileurl
        id
        mimetype
        timemodified
      }
      introfiles {
        filename
        filepath
        filesize
        fileurl
        id
        mimetype
        timemodified
      }
    }
  }
}
    `;

/**
 * __useDetailAssignmentCourseQuery__
 *
 * To run a query within a React component, call `useDetailAssignmentCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailAssignmentCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailAssignmentCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *      assignment_id: // value for 'assignment_id'
 *   },
 * });
 */
export function useDetailAssignmentCourseQuery(baseOptions: Apollo.QueryHookOptions<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables> & ({ variables: DetailAssignmentCourseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>(DetailAssignmentCourseDocument, options);
      }
export function useDetailAssignmentCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>(DetailAssignmentCourseDocument, options);
        }
export function useDetailAssignmentCourseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>(DetailAssignmentCourseDocument, options);
        }
export type DetailAssignmentCourseQueryHookResult = ReturnType<typeof useDetailAssignmentCourseQuery>;
export type DetailAssignmentCourseLazyQueryHookResult = ReturnType<typeof useDetailAssignmentCourseLazyQuery>;
export type DetailAssignmentCourseSuspenseQueryHookResult = ReturnType<typeof useDetailAssignmentCourseSuspenseQuery>;
export type DetailAssignmentCourseQueryResult = Apollo.QueryResult<DetailAssignmentCourseQuery, DetailAssignmentCourseQueryVariables>;
export function refetchDetailAssignmentCourseQuery(variables: DetailAssignmentCourseQueryVariables) {
      return { query: DetailAssignmentCourseDocument, variables: variables }
    }
export const GeneralDetailCourseDocument = gql`
    query GeneralDetailCourse($id: Int!) {
  course(course_id: $id) {
    coursecategory
    courseimage
    display_name
    enddate
    fullname
    id
    idnumber
    name
    section
    shortname
    startdate
    contacts {
      fullname
      id
    }
    assignments {
      allowsubmissionsfromdate
      cmid
      course
      duedate
      id
      intro
      name
      timemodified
    }
    events {
      activityname
      description
      id
      modulename
      name
      overdue
      purpose
      timestart
    }
    contentSections {
      name
      section
      summary
      id
      courseModules {
        downloadcontent
        id
        modicon
        modname
        modplural
        name
        url
        assignOpenedDate
        assignDueDate
        courseContents {
          author
          filename
          filepath
          filesize
          fileurl
          id
          sortorder
          timecreated
          timemodified
          type
          userid
        }
      }
    }
  }
}
    `;

/**
 * __useGeneralDetailCourseQuery__
 *
 * To run a query within a React component, call `useGeneralDetailCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneralDetailCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneralDetailCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGeneralDetailCourseQuery(baseOptions: Apollo.QueryHookOptions<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables> & ({ variables: GeneralDetailCourseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>(GeneralDetailCourseDocument, options);
      }
export function useGeneralDetailCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>(GeneralDetailCourseDocument, options);
        }
export function useGeneralDetailCourseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>(GeneralDetailCourseDocument, options);
        }
export type GeneralDetailCourseQueryHookResult = ReturnType<typeof useGeneralDetailCourseQuery>;
export type GeneralDetailCourseLazyQueryHookResult = ReturnType<typeof useGeneralDetailCourseLazyQuery>;
export type GeneralDetailCourseSuspenseQueryHookResult = ReturnType<typeof useGeneralDetailCourseSuspenseQuery>;
export type GeneralDetailCourseQueryResult = Apollo.QueryResult<GeneralDetailCourseQuery, GeneralDetailCourseQueryVariables>;
export function refetchGeneralDetailCourseQuery(variables: GeneralDetailCourseQueryVariables) {
      return { query: GeneralDetailCourseDocument, variables: variables }
    }
export const SearchCoursesDocument = gql`
    query SearchCourses($isNew: Boolean, $keyword: String) {
  userCourses(isNew: $isNew, isRecent: false, keyword: $keyword) {
    coursecategory
    display_name
    enddate
    id
    shortname
    startdate
  }
}
    `;

/**
 * __useSearchCoursesQuery__
 *
 * To run a query within a React component, call `useSearchCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoursesQuery({
 *   variables: {
 *      isNew: // value for 'isNew'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchCoursesQuery(baseOptions?: Apollo.QueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(SearchCoursesDocument, options);
      }
export function useSearchCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(SearchCoursesDocument, options);
        }
export function useSearchCoursesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchCoursesQuery, SearchCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchCoursesQuery, SearchCoursesQueryVariables>(SearchCoursesDocument, options);
        }
export type SearchCoursesQueryHookResult = ReturnType<typeof useSearchCoursesQuery>;
export type SearchCoursesLazyQueryHookResult = ReturnType<typeof useSearchCoursesLazyQuery>;
export type SearchCoursesSuspenseQueryHookResult = ReturnType<typeof useSearchCoursesSuspenseQuery>;
export type SearchCoursesQueryResult = Apollo.QueryResult<SearchCoursesQuery, SearchCoursesQueryVariables>;
export function refetchSearchCoursesQuery(variables?: SearchCoursesQueryVariables) {
      return { query: SearchCoursesDocument, variables: variables }
    }
export const UserCoursesDocument = gql`
    query UserCourses($isNew: Boolean, $isRecent: Boolean, $keyword: String) {
  userCourses(isNew: $isNew, isRecent: $isRecent, keyword: $keyword) {
    categoryid
    categoryname
    display_name
    coursecategory
    courseimage
    enddate
    fullname
    id
    idnumber
    name
    shortname
    startdate
  }
}
    `;

/**
 * __useUserCoursesQuery__
 *
 * To run a query within a React component, call `useUserCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCoursesQuery({
 *   variables: {
 *      isNew: // value for 'isNew'
 *      isRecent: // value for 'isRecent'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useUserCoursesQuery(baseOptions?: Apollo.QueryHookOptions<UserCoursesQuery, UserCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCoursesQuery, UserCoursesQueryVariables>(UserCoursesDocument, options);
      }
export function useUserCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCoursesQuery, UserCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCoursesQuery, UserCoursesQueryVariables>(UserCoursesDocument, options);
        }
export function useUserCoursesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserCoursesQuery, UserCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserCoursesQuery, UserCoursesQueryVariables>(UserCoursesDocument, options);
        }
export type UserCoursesQueryHookResult = ReturnType<typeof useUserCoursesQuery>;
export type UserCoursesLazyQueryHookResult = ReturnType<typeof useUserCoursesLazyQuery>;
export type UserCoursesSuspenseQueryHookResult = ReturnType<typeof useUserCoursesSuspenseQuery>;
export type UserCoursesQueryResult = Apollo.QueryResult<UserCoursesQuery, UserCoursesQueryVariables>;
export function refetchUserCoursesQuery(variables?: UserCoursesQueryVariables) {
      return { query: UserCoursesDocument, variables: variables }
    }
export const UserEventsDocument = gql`
    query UserEvents {
  userEvents {
    activityname
    purpose
    overdue
    timeduration
    timeusermidnight
    timestart
    timesort
    timemodified
    name
    id
    instance
    course {
      categoryid
      categoryname
      coursecategory
      courseimage
      display_name
      enddate
      fullname
      hiddenbynumsections
      id
      idnumber
      name
      pdfexportfont
      section
      shortname
      showactivitydates
      showcompletionconditions
      sortorder
      startdate
      uservisible
      viewurl
      visible
    }
  }
}
    `;

/**
 * __useUserEventsQuery__
 *
 * To run a query within a React component, call `useUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserEventsQuery(baseOptions?: Apollo.QueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
      }
export function useUserEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
        }
export function useUserEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
        }
export type UserEventsQueryHookResult = ReturnType<typeof useUserEventsQuery>;
export type UserEventsLazyQueryHookResult = ReturnType<typeof useUserEventsLazyQuery>;
export type UserEventsSuspenseQueryHookResult = ReturnType<typeof useUserEventsSuspenseQuery>;
export type UserEventsQueryResult = Apollo.QueryResult<UserEventsQuery, UserEventsQueryVariables>;
export function refetchUserEventsQuery(variables?: UserEventsQueryVariables) {
      return { query: UserEventsDocument, variables: variables }
    }