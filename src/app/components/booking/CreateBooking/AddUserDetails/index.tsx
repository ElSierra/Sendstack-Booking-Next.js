import Button from "@/app/components/global/Button";
import React, { useEffect, useState } from "react";
import DatePicker from "../components/DatePicker";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";
import { Transition } from "@headlessui/react";
import validate from "validator";
import { Location } from "@/types";
import "react-phone-number-input/style.css";

import { UserDetails, emptyUserDetails } from "@/types";
import {
  addUserDetails,
  removeUserDetails,
} from "@/store/local/deliveryDetails";
import { UserDetailsClass } from "@/model/userDetails";
import { RefreshRightSquare } from "iconsax-react";
import Input from "../components/Input";
import PhoneInput from "../components/phoneInput";
import TextArea from "../components/TextArea";
import LocationDropDown from "../components/LocationPicker";
import TransitionWrapper from "@/app/components/global/Transition";

export default function AddUserDetails() {
  const dispatch = useAppDispatch();
  const userDetailState = useAppSelector(
    (state) => state.deliveryDetails.pickup
  );
  const locationList = useAppSelector((state) => state.locationList);

  const locationListFromData = locationList?.data.filter(
    (location) => location.locationCode === userDetailState?.locationCode
  );

  const [selected, setSelected] = useState<Location>(() => {
    return { name: "Pick a location", isAvailable: false, locationCode: "0" };
  });

  const userDetailsData = (): UserDetails => {
    if (
      userDetailState?.address &&
      userDetailState?.pickupDate &&
      userDetailState?.address &&
      userDetailState?.locationCode &&
      userDetailState?.pickupName &&
      userDetailState?.pickupNumber &&
      userDetailState?.altPickupNumber
    ) {
      return new UserDetailsClass(
        userDetailState.address,
        userDetailState?.locationCode,
        userDetailState?.pickupName,
        userDetailState?.pickupNumber,
        userDetailState?.altPickupNumber,
        new Date(userDetailState?.pickupDate || ""),
        userDetailState?.note,
        userDetailState?.kg
      );
    }
    return emptyUserDetails;
  };
  const [transition, setTransition] = useState(false);

  const [userDetails, setUserDetails] = useState<UserDetails>(userDetailsData);
  const handleClick = () => {
    dispatch(setStep("1"));
    dispatch(
      addUserDetails({
        address: userDetails.address.value,
        locationCode: userDetails.locationCode.value,
        pickupName: userDetails.pickupName.value,
        pickupNumber: userDetails.pickupNumber.value,
        altPickupNumber: userDetails.altPickupNumber.value,
        pickupDate: userDetails.pickupDate.value
          ?.toISOString()
          ?.split("T")[0] as string,
        note: userDetails.note.value,
        kg: userDetails.kg.value,
      })
    );
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
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: false },
      });
      return;
    }
    if (Number(e.target.value) <= 0) {
      setUserDetails({
        ...userDetails,
        [e.target.name]: { value: e.target.value, valid: false },
      });
      return;
    }
    setUserDetails({
      ...userDetails,
      [e.target.name]: { value: e.target.value, valid: true },
    });
  };

  const handleDate = (e: any) => {
    setUserDetails({
      ...userDetails,
      pickupDate: { value: e, valid: true },
    });
  };
  useEffect(() => {
    setTransition(true);
    if (locationListFromData.length > 0) {
      setSelected(locationListFromData[0]);
    }
  }, [locationListFromData]);

  const formIsValid =
    !!(userDetails?.address?.value?.length > 3) &&
    validate.isMobilePhone(userDetails?.altPickupNumber?.value, ["en-NG"]) &&
    validate.isMobilePhone(userDetails?.pickupNumber?.value, ["en-NG"]) &&
    !!(userDetails.pickupName.value.length > 3) &&
    !!(
      Number(userDetails?.kg?.value) > 0 && Number(userDetails?.kg?.value) <= 10
    ) &&
    userDetails?.locationCode?.value.length > 0 &&
    userDetails?.note?.value.length > 0;

  const [refreshColor, setColor] = useState("red");
  return (
    <TransitionWrapper show={transition}>
      <form>
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className=" font-bold">Send Item</h1>{" "}
            <RefreshRightSquare
              size="32"
              onMouseOver={() => {
                setColor("black");
              }}
              onMouseLeave={() => {
                setColor("red");
              }}
              className="cursor-pointer"
              onClick={() => {
                dispatch(removeUserDetails());
                setUserDetails(emptyUserDetails);
              }}
              color={refreshColor}
              variant="Bulk"
            />
          </div>
          <p className="text-xs">
            Complete all [<span className="text-red-800">*</span>]{" "}
          </p>
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
            valid={userDetails.kg.valid}
            props={{
              min: 1,
              name: "kg",
              max: 10,
              maxLength: 2,
              type: "number",
              onChange: kgValidator,
              value: userDetails.kg.value,
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
            errorMsg="Please Add a note"
            valid={userDetails.note.valid}
            props={{
              onChange: (e: any) => {
                handleChange(e);
              },
              name: "note",
              value: userDetails.note.value,
              placeholder: "Please be prompt",
            }}
          />
          <LocationDropDown
            handleLocation={handleLocation}
            selected={selected}
            setSelected={setSelected}
          />
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
    </TransitionWrapper>
  );
}
