import { DISPLAY_ALERT , CLEAR_ALERT,
SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR,
TOGGLE_SIDEBAR,LOGOUT_USER,UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,GET_DATA_BEGIN,GET_DATA_SUCCESS,POST_VOUCHER_BEGIN ,
  POST_VOUCHER_SUCCESS,POST_VOUCHER_ERROR,GET_USERS_BEGIN,GET_USERS_SUCCESS,GET_USERS_ERROR,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {

  if (action.type === DISPLAY_ALERT) {
  return {
    ...state,
    showAlert: true,
    alertType: "danger",
    alertText: "Please provide all values!",
  };
}
if (action.type === CLEAR_ALERT) {
  return {
    ...state,
    showAlert: false,
    alertType: "",
    alertText: "",
  };
}

if (action.type === SETUP_USER_BEGIN) {
  return { ...state, isLoading: true };
}
if (action.type === SETUP_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token: action.payload.token,
    user: action.payload.user,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: "success",
    alertText: action.payload.alertText,
  };
}
if (action.type === SETUP_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: "danger",
    alertText: action.payload.msg,
  };
}

if (action.type === TOGGLE_SIDEBAR) {
  return { ...state, showSidebar: !state.showSidebar };
}

  if(action.type===LOGOUT_USER ) {
     return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: ' ',
      userLocation: ' ',
     }
  }

  if (action.type === UPDATE_USER_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPDATE_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token:action.payload.token,
    user: action.payload.user,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Profile Updated!',
  }
}
if (action.type === UPDATE_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
if(action.type === GET_DATA_BEGIN){
  return{...state,isLoading:true,showAlert:false}
}
if(action.type === GET_DATA_SUCCESS){

  return {
     ...state,
  isLoading:false,
  Balance_in_Rands: action.payload.Balance_in_Rands,
  electricity_Consumption_in_kwh: action.payload.electricity_Consumption_in_kwh,
  createdAt: action.payload.createdAt,
  Time: action.payload.Time,
  sec_Time: action.payload.sec_Time,
  sec_createdAt: action.payload.sec_createdAt,
  water_Flow_Rate_in_litres_per_min: action.payload.water_Flow_Rate_in_litres_per_min,
  water_Consumption_in_litres: action.payload.water_Consumption_in_litres,
  outstanding_Balance_in_Rands: action.payload.outstanding_Balance_in_Rands,
  voucher: action.payload.voucher,
  Value: action.payload.Value,

  }   
} 


if (action.type === POST_VOUCHER_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === POST_VOUCHER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    waterVoucher:action.payload.waterVoucher,
    electricityVoucher:action.payload.electricityVoucher,
    
  }
}
if (action.type === POST_VOUCHER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}


if (action.type === GET_USERS_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === GET_USERS_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    Allnames:action.payload.Allnames,
    AlllastNames:action.payload.AlllastNames,
    Allemails:action.payload.Allemails,
    Alllocations:action.payload.Alllocations,

  }
}
if (action.type === GET_USERS_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}

  throw new Error(`no such action :${action.type}`);
};
export default reducer;


