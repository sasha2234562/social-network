import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./state/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./state/state";
import {render} from "./render";

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );

render()