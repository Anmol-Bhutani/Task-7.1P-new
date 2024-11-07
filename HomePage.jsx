import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <Link to="/sign-in">
        <Button animated>
          <Button.Content visible>Sign Out</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-out" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
