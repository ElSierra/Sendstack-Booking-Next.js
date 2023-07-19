import Button from "@/app/components/global/Button";

import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import TextArea from "../TextArea";
import Input from "../Input";
import { useAppDispatch } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";
import { Transition } from "@headlessui/react";
import validate from "validator";
import { Location } from "@/types";
import "react-phone-number-input/style.css";
import PhoneInput from "../phoneInput";
import LocationDropDown from "../DropDownMenu";
import { UserDetails, emptyUserDetails } from "@/types";

export default function AddUserDetails() {
  const dispatch = useAppDispatch();
  const [transition, setTransition] = useState(false);
  const [kg, setKg] = useState({ value: "0", valid: false });
  const [userDetails, setUserDetails] = useState<UserDetails>(emptyUserDetails);
  const handleClick = () => {
    dispatch(setStep("1"));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: true },
      });
    } else {
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: false },
      });
    }
  };
  const handleLocation = (e: Location) => {
    setUserDetails({
      ...userDetails,
      locationCode: { value: e.locationCode, valid: true },
    });
  };

  const phoneNumberVerification = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validate.isMobilePhone(value, ["en-NG"])) {
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: true },
      });
    } else {
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: false },
      });
    }
  };
  const kgValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      return;
    }
    if (Number(e.target.value) > 10) {
      setKg({ value: e.target.value, valid: false });
      return;
    }
    if (Number(e.target.value) <= 0) {
      setKg({ value: e.target.value, valid: false });
      return;
    }
    setKg({ value: e.target.value, valid: true });
  };

  const handleDate = (e: any) => {
    setUserDetails({
      ...userDetails,
      pickupDate: { value: e, valid: true },
    });
  };
  useEffect(() => {
    setTransition(true);
  }, []);

  const formIsValid =
    !!(userDetails.address.value.length > 3) &&
    validate.isMobilePhone(userDetails.altPickupNumber.value, ["en-NG"]) &&
    validate.isMobilePhone(userDetails.pickupNumber.value, ["en-NG"]) &&
    !!(userDetails.pickupName.value.length > 3) &&
    !!(Number(kg.value) > 0 && Number(kg.value) <= 10) &&
    userDetails.locationCode.value.length > 0;

  return (
    <Transition
      show={transition}
      enter="transition-opacity ease-linear duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <form>
        <div className="w-full h-full flex flex-col">
          <h1 className=" font-bold">Send Item</h1>
          <p className="text-xs">Input your details </p>
          <hr className="my-2" />
          <Input
            errorMsg="Please fill out this field"
            label="Name"
            valid={userDetails.pickupName.valid}
            props={{
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
              },
              type: "text",
              placeholder: "Your Name",
              name: "pickupName",
              value: userDetails.pickupName.value,
            }}
          />

          <Input
            errorMsg="10kg is the maximum allowed"
            label="Weight(Kg)"
            valid={kg.valid}
            props={{
              min: 1,
              max: 10,
              maxLength: 2,
              type: "number",
              onChange: kgValidator,
              value: kg.value.toString(),
              placeholder: "1",
            }}
          />
          <PhoneInput
            label="Phone Number"
            errorMsg="Phone number is invalid"
            valid={userDetails.pickupNumber.valid}
            props={{
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                phoneNumberVerification(e);
              },
              name: "pickupNumber",
              type: "tel",
              value: userDetails.pickupNumber.value,
              placeholder: "09012345678",
            }}
          />
          <PhoneInput
            label="Alternative Number"
            errorMsg="Phone number is invalid"
            valid={userDetails.altPickupNumber.valid}
            props={{
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                phoneNumberVerification(e);
              },
              name: "altPickupNumber",
              type: "tel",
              value: userDetails.altPickupNumber.value,
              placeholder: "09012345678",
            }}
          />
          <Input
            label="Address"
            errorMsg="Please fill out this field"
            valid={userDetails.address.valid}
            props={{
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
              },
              type: "text",
              name: "address",
              label: "Address",
              value: userDetails.address.value,
              placeholder: "10, John Street",
            }}
          />
          <TextArea
            props={{
              onChange: (e: any) => {
                handleChange(e);
              },
              name: "note",
              value: userDetails.note.value,
              placeholder: "Please be prompt",
            }}
          />
          <LocationDropDown handleLocation={handleLocation} />
          <DatePicker
            label="Pickup Date"
            handleDate={handleDate}
            date={userDetails.pickupDate.value}
          />
          <Button
            props={{ disabled: !formIsValid }}
            onClick={handleClick}
            className="mt-6"
          >
            Continue
          </Button>
        </div>
      </form>
    </Transition>
  );
}
