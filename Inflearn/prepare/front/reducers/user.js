import produce from 'immer';

export const initialState = {
    isLoggingIn: false, //trying logging in
    isLoggedIn: false,
    logInError: null,
    isLoggingOut: false, //trying logging out
    isLoggedOut: false,
    logOutError: null,
    isSigningIn: false,
    isSignedUp: false,
    signUpError: null, 
    changeNicknameLoading: false, //trying nickname change
    changeNicknameDone: false,
    changeNicknameError: null,
    
    me: null,
    signUpData: {},
    loginData: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST'
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS'
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    nickname: 'BP',
    id: 1,
    Posts: [{id: 1}],
    Followings: [{nickname: 'ZP'}, {nickname: 'AM'}, {nickname: 'qqe'}],
    Followers: [{nickname: 'ZP'}, {nickname: 'AM'}, {nickname: 'qqe'}],
});

// THUNK쓸 때
// DISPATCH를 여러 번 해줄 수 있는 기능

// export const loginAction = (data) =>{
//     return (dispatch, getState) => {
//         const state = getState();
//         dispatch(loginRequestAction());
//         axios.post('/api/login')
//             .them((res) => {
//                 dispatch(loginSuccessAction(res.data));
//             })
//             .catch((err) => {
//                 dispatch(loginFailureAction(err));
//             })
//     }
// }

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: LOG_IN_FAILURE,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}

export const logoutSuccessAction = () => {
    return {
        type: LOG_OUT_SUCCESS,
    }
}

export const logoutFailureAction = (data) => {
    return {
        type: LOG_OUT_FAILURE,
        data,
    }
}

const reducer = (state = initialState, action)=>{
    return produce(state, (draft) => {
        switch (action.type){
            case REMOVE_FOLLOWER_REQUEST:
                draft.removeFollowerLoading = true;
                draft.removeFollowerError = null;
                draft.removeFollowerDone = false;
                break;
            case REMOVE_FOLLOWER_SUCCESS:
                draft.removeFollowerLoading = false;
                draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId);
                draft.removeFollowerDone = true;
                break;
            case REMOVE_FOLLOWER_FAILURE:
                draft.removeFollowerLoading = false;
                draft.removeFollowerError = action.error;
                break;
            case LOAD_FOLLOWINGS_REQUEST:
                draft.loadFollowingsLoading = true;
                draft.loadFollowingsError = null;
                draft.loadFollowingsDone = false;
                break;
            case LOAD_FOLLOWINGS_SUCCESS:
                draft.loadFollowingsLoading = false;
                draft.me.Followings = action.data;
                draft.loadFollowingsDone = true;
                break;
            case LOAD_FOLLOWINGS_FAILURE:
                draft.loadFollowingsLoading = false;
                draft.loadFollowingsError = action.error;
                break;
            case LOAD_FOLLOWERS_REQUEST:
                draft.loadFollowersLoading = true;
                draft.loadFollowersError = null;
                draft.loadFollowersDone = false;
                break;
            case LOAD_FOLLOWERS_SUCCESS:
                draft.loadFollowersLoading = false;
                draft.me.Followers = action.data;
                draft.loadFollowersDone = true;
                break;
            case LOAD_FOLLOWERS_FAILURE:
                draft.loadFollowersLoading = false;
                draft.loadFollowersError = action.error;
                break;
            case LOAD_MY_INFO_REQUEST:
                draft.loadMyInfoLoading = true;
                draft.loadMyInfoError = null;
                draft.loadMyInfoDone = false;
                break;
            case LOAD_MY_INFO_SUCCESS:
                draft.loadMyInfoLoading = false;
                draft.me = action.data;
                draft.loadMyInfoDone = true;
                break;
            case LOAD_MY_INFO_FAILURE:
                draft.loadMyInfoLoading = false;
                draft.loadMyInfoError = action.error;
                break;
            case LOAD_USER_REQUEST:
                draft.loadUserLoading = true;
                draft.loadUserError = null;
                draft.loadUserDone = false;
                break;
            case LOAD_USER_SUCCESS:
                draft.loadUserLoading = false;
                draft.userInfo = action.data;
                draft.loadUserDone = true;
                break;
            case LOAD_USER_FAILURE:
                draft.loadUserLoading = false;
                draft.loadUserError = action.error;
                break;
            case FOLLOW_REQUEST:
                draft.followLoading = true;
                draft.followError = null;
                draft.followDone = false;
                break;
            case FOLLOW_SUCCESS:
                draft.followLoading = false;
                draft.me.Followings.push({ id: action.data.UserId });
                draft.followDone = true;
                break;
            case FOLLOW_FAILURE:
                draft.followLoading = false;
                draft.followError = action.error;
                break;
            case UNFOLLOW_REQUEST:
                draft.unfollowLoading = true;
                draft.unfollowError = null;
                draft.unfollowDone = false;
                break;
            case UNFOLLOW_SUCCESS:
                draft.unfollowLoading = false;
                draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId);
                draft.unfollowDone = true;
                break;
            case UNFOLLOW_FAILURE:
                draft.unfollowLoading = false;
                draft.unfollowError = action.error;
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInError = null;
                draft.logInDone = false;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.me = action.data;
                draft.logInDone = true;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutError = null;
                draft.logOutDone = false;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpError = null;
                draft.signUpDone = false;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameError = null;
                draft.changeNicknameDone = false;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.me.nickname = action.data.nickname;
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data });
                break;
                // return {
                //   ...state,
                //   me: {
                //     ...state.me,
                //     Posts: [{ id: action.data }, ...state.me.Posts],
                //   },
                // };
            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
                break;
                // return {
                //   ...state,
                //   me: {
                //     ...state.me,
                //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
                //   },
                // };
            default:
                break;
            }

        });
    };
    
    export default reducer;