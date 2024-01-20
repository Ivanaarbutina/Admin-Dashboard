import React from "react";
import "./productModal.scss";

import { ProductType } from "./productData";

type ShopModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductType | null;
};

const ProductModal: React.FC<ShopModalProps> = ({
  isOpen,
  closeModal,
  product,
}) => {
  if (!isOpen || !product) {
    console.log("Modal not rendered");
    return null;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <img src={product.img} alt={product.title} className="modal__img" />
          <button className="modal__close" onClick={closeModal}>
            &times;
          </button>
        </div>

        <div className="">
          <h2 className="modal__title">{product.title}</h2>
          <p className="modal__type">{product.title}</p>
          <div className="modal__stars"></div>
          <p className="modal__description">{product.status}</p>
          <p className="modal__price">{product.price} €</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
