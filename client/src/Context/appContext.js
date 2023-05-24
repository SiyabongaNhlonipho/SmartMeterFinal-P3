import React, { useReducer, useContext} from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT , CLEAR_ALERT,
  SETUP_USER_BEGIN,SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,TOGGLE_SIDEBAR,LOGOUT_USER,UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,GET_DATA_BEGIN,GET_DATA_SUCCESS,POST_VOUCHER_BEGIN ,POST_VOUCHER_SUCCESS,
  POST_VOUCHER_ERROR,GET_USERS_BEGIN,GET_USERS_SUCCESS,GET_USERS_ERROR

    } from './actions';
import axios from "axios"

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  showSidebar: false,
  //getData arrays (To Front-End)
  Balance_in_Rands: [],
  electricity_Consumption_in_kwh:[],
  createdAt:[],
  Time:[],
  sec_Time:[],
  sec_createdAt:[],
  water_Flow_Rate_in_litres_per_min:[],
  water_Consumption_in_litres:[],
  outstanding_Balance_in_Rands:[],
  //tokens
  voucher: [],
  Value : [],
  //users
  Allnames: [],
  AlllastNames: [],
  Allemails: [],
  Alllocations: [],

};

const AppContext = React.createContext();

 const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios
const authFetch = axios.create({
  baseURL: "/api/v1",
});
// request
authFetch.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${state.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      console.log("AUTH ERROR");
    }
    return Promise.reject(error);
  }
);

  const displayAlert = () => {
  dispatch({
    type: DISPLAY_ALERT,
  });
  clearAlert();
};

const clearAlert = () => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
    });
  }, 3000);
};

const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("location", location);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("location");
};

    
const setupUser = async ({ currentUser, endPoint, alertText }) => {
  dispatch({ type: SETUP_USER_BEGIN });
  try {
    const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);

    const { user, token, location } = data;
    dispatch({
      type: SETUP_USER_SUCCESS,
      payload: { user, token, location, alertText },
    });
    addUserToLocalStorage({ user, token, location });
  } catch (error) {
    dispatch({
      type: SETUP_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};

  const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR });
};

  const logoutUser = () => {
    dispatch ({type: LOGOUT_USER})
    removeUserFromLocalStorage()
  }

const updateUser = async (currentUser) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    // no token
    const { user, location, token } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });

    addUserToLocalStorage({ user, location, token });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
}
//(To Front-End)
const getData = async () => {
  let url = `/my/GetData`

  dispatch({type: GET_DATA_BEGIN})
  try {
    const {data} = await authFetch(url)
    const {Balance_in_Rands ,
           electricity_Consumption_in_kwh ,
           createdAt,
           Time,
           sec_Time,
           sec_createdAt,
           water_Flow_Rate_in_litres_per_min,
           water_Consumption_in_litres,
           outstanding_Balance_in_Rands,
           voucher,
           Value,
          
          } = data
           
    dispatch({
      type:GET_DATA_SUCCESS,
      payload: {
        Balance_in_Rands ,
        electricity_Consumption_in_kwh ,
        createdAt,
        Time,
        sec_Time,
        sec_createdAt,
        water_Flow_Rate_in_litres_per_min,
        water_Consumption_in_litres,
        outstanding_Balance_in_Rands,
        voucher,
        Value,
      },
    })

  } catch (error) {
    
  logoutUser()
  }
  clearAlert()
}

//(To Front-End)
const   getAllUsers = async () => {
  let url = `/my/GetAllUsers`

  dispatch({type: GET_USERS_BEGIN})
  try {
    const {data} = await authFetch(url)
    const { Allnames,
            AlllastNames,
            Allemails,
            Alllocations,
          
          } = data
           
    dispatch({
      type:GET_USERS_SUCCESS,
      payload: {
            Allnames,
            AlllastNames,
            Allemails,
            Alllocations,
          
      },
    })

  } catch (error) {
     dispatch({
      type: GET_USERS_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }

  clearAlert()
}

//(To Front-End)
const PostVoucher = async (voucherr) => {
  let url = "/my/post/value"

  dispatch({type: POST_VOUCHER_BEGIN})
  try {
    const { data } = await authFetch.post(url,voucherr);
    const {waterVoucher,electricityVoucher} = data
           
    
    dispatch({
      type:POST_VOUCHER_SUCCESS,
      payload: {
        waterVoucher,
        electricityVoucher,
      },
    })

  } catch (error) {
     dispatch({
      type: POST_VOUCHER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert()
}

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        getData,
        PostVoucher,
        getAllUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
 const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext};
