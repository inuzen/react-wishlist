import React from "react";
import PropTypes from "prop-types";
import WishItem from "./WishItem";
import EditItemModal from "./EditItemModal";

const Items = () => {
  return (
    <main className="main-content">
      <div className="frow justify-center ">
        <div className="main-items-wrapper">
          <div className="frow justify-start gutters-big">
            <EditItemModal/>
            {/* <div className="col-md-1-3">
              <WishItem />
            </div>
            <div className="col-md-1-3">
              <WishItem />
            </div>
            <div className="col-md-1-3">
              <div className="frow centered">
                <div className="add-item-wrapper">
                  <span className="icon icon-add"></span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

Items.propTypes = {};

export default Items;
