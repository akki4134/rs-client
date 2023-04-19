import React from "react";
import Footer from "../../components/Footer";
import CustomerRoutes from "./CustomerRoutes";

function Index() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="center">
          <div className="content">
            <CustomerRoutes />
          </div>
        </div>
        <div className="center">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
