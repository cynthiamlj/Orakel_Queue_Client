import {objectConditionalByEnvironment} from "../utilities/objectUtilities";

/* ----- Authentication ------ */
export const LOCAL_STORAGE_USER = "user";

/* ----- API ------ */
export const API_BASE_PATH = objectConditionalByEnvironment("http://localhost:8080/api/", "https://orakelqueueservice.herokuapp.com/api/");

//Queue
export const QUEUE_PATH = "queue/";
export const CONFIRM_DONE_PATH = QUEUE_PATH + "confirmdone/";

//Subjects
export const SUBJECTS_PATH = "subjects/";

//Auth
export const AUTH_PATH = "auth/";
export const LOGIN_PATH = AUTH_PATH + "signin";
export const CHECK_TOKEN_PATH = AUTH_PATH + "isTokenValid";

/* ----- Routing ----- */
export const INDEX_ROUTE = "/Orakel_Queue_Client/";

//TODO Add all hardcoded string values to this file
