import { CountryHelpers } from "@Helpers/CountryHelpers";
declare namespace DjobsHeaderProps {
  type CountryCode = typeof CountryHelpers.CountryCodes[number];
  interface City {
    id: number;
    name: string;
  }
  type Context = {
    isUserModalOpen: boolean;
    setIsUserModalOpen: Dispatch<SetStateAction<boolean>>;

    jobSearchValue: string;
    setJobSearchValue: Dispatch<SetStateAction<string>>;

    citySearchValue: City;
    setCitySearchValue: Dispatch<SetStateAction<string>>;

    suggestedCity: City[];
    setSuggestedCity: Dispatch<SetStateAction<City[]>>;

    isCountryCityModalOpen: string;
    setIsCountryCityModalOpen: Dispatch<SetStateAction<string>>;

    selectedFlag: string;
    setselectedFlag: Dispatch<SetStateAction<string>>;

    selectedCityIndex: number;
    setSelectedCityIndex: Dispatch<SetStateAction<number>>;

    isJobtitleNotFound: boolean;
    setIsJobTitleNotFound: Dispatch<SetStateAction<boolean>>;

    outsideClickRef: MutableRefObject<HTMLDivElement>;
  };
}

export { DjobsHeaderProps };
