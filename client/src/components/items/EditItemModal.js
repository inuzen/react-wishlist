import React from "react";

const EditItemModal = () => {
  return (
    <div className="edit-modal__container">
      <div className="edit-modal__wrapper">
        <div className="frow column-center">
          <div className="edit-modal__input-row frow row">
            <input type="text" className="edit-modal link-input" />
            <div className="icon-wrapper">
              <span className="icon icon-edit"></span>
            </div>
          </div>
          <div className="edit_modal__edit">
            <span className="edit-modal__header">Edit</span>
            <div className="frow row">
              <div className="item-presentation">
                <div className="frow column-center">
                  <p className="item-title">
                    <span className="item-header">Xiaomi Mi 9 SE</span>
                  </p>
                  <div className="item-image-wrapper">
                    <img
                      src="https://avatars.mds.yandex.net/get-mpic/1808939/img_id6461173972117630017.jpeg/9hq"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="edit-modal__button-field frow column-center">
                <button className="btn btn-transparent">Download</button>
                <button className="btn btn-done">Save</button>
                <button className="btn btn-delete">Delete</button>
                <button className="edit-modal__special-button btn btn-special ">
                  Make Special
                </button>
              </div>
            </div>
          </div>

          <div className="edit-modal__comment-block">
            <span className="edit-modal__header">Add a comment</span>
            <textarea className="edit-modal__comment-field" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
