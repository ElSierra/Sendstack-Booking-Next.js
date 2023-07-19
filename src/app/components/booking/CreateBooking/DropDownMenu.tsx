import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useGetDeliveryLocationQuery } from "@/store/api/sendStackApi";
import { Location } from "@/types";
import { useAppSelector } from "@/store/hooks";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function LocationDropDown({
  handleLocation,
}: {
  handleLocation: (e: Location) => void;
}) {
  const locationList = useAppSelector((state) => state.locationList);
  console.log(
    "🚀 ~ file: DropDownMenu.tsx:76 ~ LocationDropDown ~ locationList:",
    locationList
  );

  const [locations, setLocations] = useState<Location[]>([]);
  const [selected, setSelected] = useState<Location>(() => {
    return { name: "Pick a location", isAvailable: false, locationCode: "0" };
  });
  useEffect(() => {
    if (locationList.data.length > 0) {
      console.log(
        "🚀 ~ file: DropDownMenu.tsx:81 ~ useEffect ~ locationLists:",
        locationList
      );
      setLocations(locationList.data);
    }
  }, [locationList]);
  const handleChange = (e: Location) => {
    console.log("🚀 ~ file: DropDownMenu.tsx:28 ~ handleChange ~ e:", e);
    handleLocation(e);
    setSelected(e);
  };
  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Location
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"></span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {locations.map((location) => (
                  <Listbox.Option
                    key={location.locationCode}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={location}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {location.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
