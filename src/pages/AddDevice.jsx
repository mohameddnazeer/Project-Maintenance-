import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Navbar } from "../components/utils/Navbar";
import SelectInput from "../components/utils/SelectInput";
import TextInput from "../components/utils/TextInput";

const AddDevice = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          dir="rtl"
          className="flex flex-col lg:flex-row items-start justify-around w-full px-4 lg:px-0"
        >
          {/* Details Section */}
          <div className="w-full lg:w-6/12 mt-8 lg:mt-0 lg:mr-10">
            <h3 className="text-white text-right my-8 text-xl sm:text-2xl">
              تفاصيل
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-10 gap-y-8">
              <Controller
                name="sector"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="القطاع"
                    options={["الضابعة", "اللاهون"]}
                    selectName="أختر القطاع"
                    {...field}
                  />
                )}
              />
              <Controller
                name="department"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="الادارة"
                    options={["النظم", "الهندسية"]}
                    selectName="أختر الادارة"
                    {...field}
                  />
                )}
              />
              <Controller
                name="office"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="المكتب"
                    type="text"
                    placeholder="أدخل المكتب"
                    {...field}
                  />
                )}
              />
              <Controller
                name="deviceNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="رقم الجهاز"
                    type="number"
                    placeholder="أدخل الرقم"
                    {...field}
                  />
                )}
              />
              <Controller
                name="deviceType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="نوع الجهاز"
                    type="text"
                    placeholder="أدخل النوع"
                    {...field}
                  />
                )}
              />
              <Controller
                name="macAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="عنوان MAC"
                    type="text"
                    placeholder="أدخل MAC"
                    {...field}
                  />
                )}
              />
              <Controller
                name="ownerName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="اسم المالك"
                    type="text"
                    placeholder="أدخل الاسم"
                    {...field}
                  />
                )}
              />
              <Controller
                name="ownerNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="رقم المالك"
                    type="number"
                    placeholder="أدخل الرقم"
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          {/* Hardware Section */}
          <div className="w-full lg:w-6/12 mt-8 lg:mt-0 lg:mr-10">
            <h3 className="text-white text-right my-8 text-xl sm:text-2xl">
              الهاردوير
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 sm:gap-x-10 gap-y-8">
              <Controller
                name="cpuType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="نوع CPU"
                    options={["Intel", "AMD"]}
                    selectName="أختر النوع "
                    {...field}
                  />
                )}
              />
              <Controller
                name="cpuModel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="موديل CPU"
                    type="text"
                    placeholder="ادخل النوع"
                    {...field}
                  />
                )}
              />
              <Controller
                name="cpuGeneration"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="جيل CPU"
                    options={["9th Gen", "10th Gen", "11th Gen"]}
                    selectName="أختر الجيل"
                    {...field}
                  />
                )}
              />
              <Controller
                name="gpuType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="نوع GPU"
                    type="text"
                    placeholder="ادخل النوع"
                    {...field}
                  />
                )}
              />
              <Controller
                name="gpuModel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="موديل GPU"
                    type="text"
                    placeholder="ادخل النوع"
                    {...field}
                  />
                )}
              />
              <Controller
                name="gpuSize"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    labelName="حجم GPU"
                    type="text"
                    placeholder="ادخل الحجم"
                    {...field}
                  />
                )}
              />
              <Controller
                name="ramSize"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="حجم RAM"
                    options={["8GB", "16GB", "32GB"]}
                    selectName="أختر الحجم "
                    {...field}
                  />
                )}
              />
              <Controller
                name="ramType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="نوع RAM"
                    options={["DDR3", "DDR4"]}
                    selectName="أختر النوع "
                    {...field}
                  />
                )}
              />
              <Controller
                name="romSize"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="حجم ROM"
                    options={["256GB", "512GB", "1TB"]}
                    selectName="أختر الحجم "
                    {...field}
                  />
                )}
              />
              <Controller
                name="romType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    labelName="نوع ROM"
                    options={["SSD", "HDD"]}
                    selectName="أختر النوع "
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-10/12 text-center mx-auto mt-5">
          <h3 className="text-white text-right my-5 text-xl sm:text-2xl ">
            ملاحظات
          </h3>
          <Controller
            name="notes"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                className="textarea w-full h-28 p-4 bg-custom-gray block rounded-md text-right outline-none text-white border border-[#3D4752]"
                placeholder="أدخل ملاحظاتك"
              />
            )}
          />
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="ml-0 sm:ml-10 w-full sm:w-60 h-12 bg-[#007560] text-white rounded-md hover:bg-green-700 transition duration-200 text-xl sm:text-2xl "
          >
            حفظ
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDevice;
