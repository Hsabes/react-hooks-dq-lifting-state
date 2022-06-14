import React from "react";

function Menu({ darkMode, setDarkMode }) {
  
  function handleChange(){
    setDarkMode((currentState) => !currentState);
  }
  
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={handleChange}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
