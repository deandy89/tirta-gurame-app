"use client";

import React from "react";
import { OrderModal } from "./OrderModal";
import { CatalogModal } from "./CatalogModal";
import { AboutModal } from "./AboutModal";

interface ActionModalsProps {
  isOrderModalOpen: boolean;
  isCatalogModalOpen: boolean;
  isAboutModalOpen: boolean;
  onCloseOrder: () => void;
  onCloseCatalog: () => void;
  onCloseAbout: () => void;
  onOpenOrder: () => void;
}

export const ActionModals: React.FC<ActionModalsProps> = ({
  isOrderModalOpen,
  isCatalogModalOpen,
  isAboutModalOpen,
  onCloseOrder,
  onCloseCatalog,
  onCloseAbout,
  onOpenOrder,
}) => {
  return (
    <>
      <OrderModal isOpen={isOrderModalOpen} onClose={onCloseOrder} />
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={onCloseCatalog}
        onOpenOrder={onOpenOrder}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={onCloseAbout}
        onOpenOrder={onOpenOrder}
      />
    </>
  );
};
