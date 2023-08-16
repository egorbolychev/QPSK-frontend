let API_SERVER_VAL = ''
let WS_URL_VAL = ''
// export const WS_SERVER = 'ws' + API_SERVER_VAL.replace("http", "");
API_SERVER_VAL = window.location.origin === "http://localhost:3000"? "http://127.0.0.1:8000" : window.location.origin;
WS_URL_VAL = window.location.origin === "http://localhost:3000"? "ws://127.0.0.1:8000": 'wss' + window.location.origin.replaceAll('https', '');
export const API_SERVER = API_SERVER_VAL;
export const WS_URL = WS_URL_VAL;