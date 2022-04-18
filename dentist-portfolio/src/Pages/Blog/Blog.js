import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <div>
          <h1> Difference between authorization and authentication</h1>
          <p>
            Authentication is the process of identifying someone's identity.It
            is the first step of the security system.Through the process
            authentication determines the person is user or not.Usally
            authentication processed through login and password.On the other
            hand hand authorization determines which files or resource a user
            can have access.Once after the successful authentication someone
            authorised to access the resource.
          </p>
        </div>
        <div>
          <h1>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p>
            I prefer firebase because its a serverless application and it's
            secured and work quickly.Basically its a cloud hosted database and
            data is stored as json.There are some alternatives of firebase like
            Parse,Back4App,AWS amplify etc.But I prefer firebase most.
          </p>
        </div>
        <div>
          <h1>
            What other services does firebase provide other than authentication
          </h1>
          <p>
            Firebase has planty of services other than authentication.Some of
            them are Cloud Firestore. Cloud Functions. Hosting. Cloud Storage.
            Google Analytics. Predictions. Cloud Messaging
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
