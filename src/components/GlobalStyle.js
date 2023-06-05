import { createGlobalStyle } from 'styled-components';
/* bring in normalize.css styles */
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7ecf2;
  line-height: 1.5;
  margin-top: 20px;
}

span {
  text-shadow: #FC0 1px 0 10px;
  margin-left: auto;
}

ul {
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
  padding: 30px;
  margin-top: 10px;
}

label {
  display: flex;
  flex-direction: column;
}

form button {
  margin-top: 15px;
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  display:block;
  width:120px;
  margin: 20px auto;
  font-size: 14px;
  text-align:center;
  margin-bottom: 10px;
  padding: 4px 6px;
  text-decoration:none;
}

form button:hover {
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
  outline: 0 none;
}

li {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  max-width: 350px;
  width: 100%;
}

li button {
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  font-size: 14px;
  padding: 4px 6px;
  text-decoration:none;
}

li button:hover {
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
  outline: 0 none;
}
`;
