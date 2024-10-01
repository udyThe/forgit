// import React from "react";
// import loginImg from "../../music-notes.png";

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Login</div>
//         <div className="content">
//           <div className="image">
//             <img src={loginImg} id="loginim" />
//             {/* <img src={loginImg} alt="Music Notes" /> */}
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }



import React, { useState } from 'react';
import loginImg from "../../music-notes.png";  // Ensure the path is correct
// import '../index.css';  // Ensure this CSS path is correct

export const Login = ({ containerRef }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));  // Display user data in an alert
  };

  return (
    <div className="base-container" ref={containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} id="loginim" alt="Music Notes" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
