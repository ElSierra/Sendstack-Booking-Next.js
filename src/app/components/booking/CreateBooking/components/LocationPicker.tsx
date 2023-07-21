import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useGetDeliveryLocationQuery } from "@/store/api/sendStackApi";
import { Location } from "@/types";
import { useAppSelector } from "@/store/hooks";
import { Location as LocationIcon} from "iconsax-react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function LocationDropDown({
  handleLocation,
  setSelected,
  selected,
}: {
  handleLocation: (e: Location) => void;
  setSelected: (e: any) => void;
  selected: Location;
}) {
  const locationList = useAppSelector((state) => state.locationList);

  const [locations, setLocations] = useState<Location[]>([]);

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
          <Listbox.Label className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]">
            Location <span className="text-red-800">*</span>
          </Listbox.Label>
          <div className="relative mt-0.5">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5  pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className=" block truncate text-sm">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0  flex items-center pr-4"><LocationIcon variant="Bulk" /></span>
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
                        "  relative cursor-default select-none py-2 pl-3 pr-9 "
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
                              "ml-3 block truncate text-sm"
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
