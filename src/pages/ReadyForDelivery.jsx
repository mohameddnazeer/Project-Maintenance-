import React from "react";
import { Navbar } from "../components/utils/Navbar";
import { SearchInput } from "../components/utils/SearchInput";
import TextInput from "../components/utils/TextInput";
import { Controller, useForm } from "react-hook-form";
import MaintenancCard from "../components/utils/MaintenancCard";
import ReadyForDeliveryCard from "../components/utils/ReadyForDeliveryCard";

export const ReadyForDelivery = () => {
  return (
    <>
      <Navbar />
      <SearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 w-11/12 m-auto mb-5">
        <ReadyForDeliveryCard />
        <ReadyForDeliveryCard />
        <ReadyForDeliveryCard />
      </div>
    </>
  );
};
