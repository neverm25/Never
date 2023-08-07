import React, { useState, createContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import { HeaderAPI } from "@API/CityAPI";
import { SearchIcon, UserIcon, UserBlueIcon } from "@DJobs/Components/Icons";
import {
  CompanyLogo,
  HeaderMainContainer,
  SearchIconContainer,
  UserIconContainer,
  SearchContainer,
  IConsContainer,
  HeaderContainer,
  SearchMainContainer,
  SearchDropDownContainer,
  CityDropDownContainer,
  CityListMainContainer,
  SearchElementContainer,
  Item,
  JobTitleDropDown,
  SearchModalWrapper,
  CityNotFoundConatiner,
} from "./Styles/HeaderStyles";
import { DjobsButton } from "@DJobs/Components/Basic/";
import FlagHeader from "./FlagHeader";
import HeaderPopup from "./HeaderPopup";
import UserPopup from "./UserPopup";
import HeaderInput from "./HeaderInput";
import { djobsTheme } from "@DJobs/Theme";
import { DjobsHeaderProps } from "./Header";
import { LoginRegisterButtons } from "./LoginRegisterButtons";
import { DJOBS_ROUTES } from "@DJobs/DjobsUtils/Routes";
import { getCookie } from "cookies-next";
import { useAppSelector } from "@Redux";
import { DittoJobsLogo } from "@DJobs/Components/Common/DittoJobsLogo";

let timer;
export const DjobsHeaderContext = createContext({} as DjobsHeaderProps.Context);

const DjobsHeader = () => {
  const router = useRouter();
  //Redux
  const { login, candidateDetails } = useAppSelector(store => store);

  const [isSearchModalOpen, setSearchIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [jobSearchValue, setJobSearchValue] = useState(
    (router.query.job_title as string) || ""
  );
  const [citySearchValue, setCitySearchValue] = useState<{
    id: number;
    name: string;
  }>({ id: null, name: "" });
  const [suggestedCity, setSuggestedCity] = useState(
    [] as DjobsHeaderProps.City[]
  );
  const [isJobtitleNotFound, setIsJobTitleNotFound] = useState(false);
  const [isCityNotFound, setIsCityNotFound] = useState(false);
  const [isCountryCityModalOpen, setIsCountryCityModalOpen] = useState("");
  let flag = getCookie("userCountry");
  const [selectedFlag, setselectedFlag] = useState(
    "" as DjobsHeaderProps.CountryCode
  );
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);
  const outsideClickRef = React.useRef<HTMLDivElement>();
  const dropdownContainerRef = React.useRef<HTMLDivElement>();
  const homePagePath = ["/", "/home", "/DJobs/home"];
  const IS_HOME_PAGE = homePagePath.includes(router.pathname);

  useEffect(() => {
    setselectedFlag(flag as DjobsHeaderProps.CountryCode);
  }, [flag]);
  useEffect(() => {
    if (IS_HOME_PAGE) setSearchIsModalOpen(true);
  }, [IS_HOME_PAGE]);
  useEffect(() => {
    const location = (router.query.location as string) || "";
    const cityName = (router.query.cityName as string) || "";
    if (location && cityName) {
      setCitySearchValue({ id: +location, name: cityName });
    } else {
      setCitySearchValue({ id: null, name: "" });
    }
  }, [router.query]);
  useEffect(() => {
    const jobTitle = (router.query.job_title as string) || "";
    setJobSearchValue(jobTitle);
  }, [router.query]);
  useEffect(() => setSearchIsModalOpen(IS_HOME_PAGE), [IS_HOME_PAGE]);
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        (isCountryCityModalOpen ||
          isUserModalOpen ||
          isSearchModalOpen ||
          isJobtitleNotFound) &&
        outsideClickRef.current &&
        !outsideClickRef?.current?.contains(e.target)
      ) {
        if (isSearchModalOpen && !IS_HOME_PAGE) setSearchIsModalOpen(false);
        if (isUserModalOpen) setIsUserModalOpen(false);
        if (isJobtitleNotFound) setIsJobTitleNotFound(false);
        if (isCityNotFound) setIsCityNotFound(false);
        if (isCountryCityModalOpen) {
          setIsCountryCityModalOpen("");
          setSuggestedCity([]);
        }
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [
    isUserModalOpen,
    isSearchModalOpen,
    isCountryCityModalOpen,
    IS_HOME_PAGE,
    isJobtitleNotFound,
    isCityNotFound,
  ]);

  function getCity(cityName) {
    if (cityName.length < 2) {
      setSuggestedCity([]);
      return;
    }
    const formData = new FormData();
    formData.append("query", cityName);
    formData.append("cc", selectedFlag);
    HeaderAPI.getCity(formData)
      .then(response => {
        if (response.data.data.length !== 0) {
          setSuggestedCity(response.data.data);
        } else {
          setSuggestedCity(
            cityName.length >= 2 ? [{ id: 0, name: "Data Not Found" }] : []
          );
        }
      })
      .catch(error => console.error("Error:", error));
  }
  const handleInputChange = value => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getCity(value);
    }, 0);
  };
  const onKeyDowns = e => {
    const KEY_UP = e.keyCode === 38;
    const KEY_DOWN = e.keyCode === 40;
    const KEY_ENTER = e.keyCode === 13;

    if (KEY_UP) {
      setSelectedCityIndex(p => (p === 0 ? 0 : --p));
      if (selectedCityIndex < Object.keys(suggestedCity).length - 4) {
        dropdownContainerRef.current.scrollTop =
          dropdownContainerRef?.current?.scrollTop - 58;
      }
    }

    if (KEY_DOWN) {
      setSelectedCityIndex(p =>
        selectedCityIndex + 1 === Object.keys(suggestedCity).length
          ? selectedCityIndex
          : ++p
      );
      if (selectedCityIndex > 3) {
        dropdownContainerRef.current.scrollTop =
          dropdownContainerRef?.current?.scrollTop + 58;
      }
    }
    //enter
    if (KEY_ENTER) {
      if (
        suggestedCity[selectedCityIndex]?.name &&
        suggestedCity[selectedCityIndex]?.name !== ""
      ) {
        setIsCountryCityModalOpen("");
        setCitySearchValue(suggestedCity[selectedCityIndex]);
        onSearch(suggestedCity[selectedCityIndex], jobSearchValue);
      } else {
        if (!router.query.cityName && router.query.cityName !== null) {
          setIsCityNotFound(true);
        }
        setIsCountryCityModalOpen("");
      }
      if (!jobSearchValue) setIsJobTitleNotFound(true);
    }
  };
  const jobSelectKey = e => {
    const isEnterKey = e.keyCode == 13;
    isEnterKey && onSearch(suggestedCity[selectedCityIndex], jobSearchValue);
  };
  const onSearch = (city, jobtitle) => {
    setIsCountryCityModalOpen("");

    if (!city?.id) setIsCityNotFound(true);
    if (!jobtitle) setIsJobTitleNotFound(true);
    if (city?.id && jobtitle) {
      setIsCountryCityModalOpen("");
      const searchListPath = `/search-list?job_title=${jobtitle}&location=${city?.id}&cityName=${city.name}`;
      router.push(searchListPath);
    }
  };

  const stringMatchingIndex = (searchValue: string, optionValue: string) => {
    let lowerOptionValue = optionValue.toLocaleLowerCase();
    let index = 0;
    for (let i = 0; i < searchValue.length; i++) {
      if (searchValue.toLocaleLowerCase()[i] === lowerOptionValue[i]) {
        index = i;
      } else {
        break;
      }
    }
    return index + 1;
  };

  const contextValue: DjobsHeaderProps.Context = {
    citySearchValue,
    setCitySearchValue,
    isCountryCityModalOpen,
    setIsCountryCityModalOpen,
    jobSearchValue,
    setJobSearchValue,
    selectedCityIndex,
    setSelectedCityIndex,
    selectedFlag,
    setselectedFlag,
    suggestedCity,
    setSuggestedCity,
    isUserModalOpen,
    setIsUserModalOpen,
    isJobtitleNotFound,
    setIsJobTitleNotFound,

    outsideClickRef,
  };

  return (
    <DjobsHeaderContext.Provider value={contextValue}>
      <div style={{ width: "100%" }} ref={outsideClickRef}>
        <HeaderMainContainer>
          <HeaderContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CompanyLogo
                onClick={() => {
                  if (!IS_HOME_PAGE) router.push(DJOBS_ROUTES.home);
                }}
              >
                <DittoJobsLogo />
              </CompanyLogo>
              <SearchMainContainer>
                <div style={{ width: "100%" }}>
                  <HeaderInput
                    width="100%"
                    type="text"
                    color={
                      jobSearchValue === ""
                        ? djobsTheme.colors.black50
                        : djobsTheme.colors.textDarker
                    }
                    name="headerSearchBar"
                    placeholder="Job Title"
                    isSearch={true}
                    value={jobSearchValue}
                    onChangeHandler={e => {
                      setJobSearchValue(e.target.value);
                      setIsJobTitleNotFound(false);
                    }}
                    onKeyDown={jobSelectKey}
                  />
                  {isJobtitleNotFound && (
                    <JobTitleDropDown>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchElementContainer color="white">
                          Please Enter A Job Title
                        </SearchElementContainer>
                      </div>
                    </JobTitleDropDown>
                  )}
                </div>
                <div style={{ width: "100%" }}>
                  <HeaderInput
                    width="100%"
                    color={djobsTheme.colors.textDarker}
                    type="text"
                    name="city"
                    isSearch={true}
                    outline={true}
                    value={citySearchValue.name}
                    onClick={() => {
                      if (!citySearchValue) setIsCountryCityModalOpen("");
                      setIsUserModalOpen(false);
                    }}
                    onChangeHandler={e => {
                      setCitySearchValue({ id: null, name: e.target.value });
                      handleInputChange(e.target.value);
                      setIsCountryCityModalOpen("city");
                      setIsUserModalOpen(false);
                      setSelectedCityIndex(0);
                      setIsCityNotFound(false);
                    }}
                    placeholder="City"
                    suffix={<FlagHeader />}
                    onKeyDown={onKeyDowns}
                  />
                  {isCityNotFound && (
                    <CityNotFoundConatiner>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchElementContainer color="white">
                          City Not Found
                        </SearchElementContainer>
                      </div>
                    </CityNotFoundConatiner>
                  )}
                </div>

                {isCountryCityModalOpen === "city" &&
                  citySearchValue.name?.length >= 2 &&
                  suggestedCity.length > 0 && (
                    <CityDropDownContainer>
                      <CityListMainContainer ref={dropdownContainerRef}>
                        <div>
                          {suggestedCity.map((item, i) => {
                            return item.name === "Data Not Found" ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <SearchElementContainer color="white">
                                  City Not Found
                                </SearchElementContainer>
                              </div>
                            ) : (
                              <Item
                                select={selectedCityIndex === i}
                                onClick={() => {
                                  setCitySearchValue(item);
                                  setIsCountryCityModalOpen("");
                                }}
                                key={i}
                                onMouseOver={() => setSelectedCityIndex(i)}
                              >
                                <SearchElementContainer color="green">
                                  {item.name.substring(
                                    0,
                                    stringMatchingIndex(
                                      citySearchValue.name,
                                      item.name
                                    )
                                  )}
                                </SearchElementContainer>
                                <SearchElementContainer color="white">
                                  {item.name.substring(
                                    stringMatchingIndex(
                                      citySearchValue.name,
                                      item.name
                                    )
                                  )}
                                </SearchElementContainer>
                              </Item>
                            );
                          })}
                        </div>
                      </CityListMainContainer>
                    </CityDropDownContainer>
                  )}
                {isCountryCityModalOpen === "country" && <HeaderPopup />}
                <div style={{ zIndex: "5" }}>
                  <DjobsButton.Main
                    variant="Primary"
                    label="Search"
                    onClick={() => {
                      onSearch(citySearchValue, jobSearchValue);
                    }}
                  />
                </div>
              </SearchMainContainer>
            </div>
            <div>
              <IConsContainer>
                <SearchIconContainer
                  onClick={() => {
                    setIsCountryCityModalOpen("");
                    if (!IS_HOME_PAGE) {
                      setSearchIsModalOpen(!isSearchModalOpen);
                      setIsUserModalOpen(false);
                    }
                  }}
                >
                  <SearchContainer>
                    <SearchIcon />
                  </SearchContainer>
                </SearchIconContainer>{" "}
                <UserIconContainer
                  onClick={() => {
                    setIsUserModalOpen(!isUserModalOpen);
                    setIsCountryCityModalOpen("");
                    if (!IS_HOME_PAGE) {
                      setSearchIsModalOpen(false);
                    }
                  }}
                >
                  {login.isLoggedin && candidateDetails.photo ? (
                    <Image
                      src={candidateDetails.photo}
                      alt="profile-image"
                      width={35}
                      height={35}
                      style={{ borderRadius: "100%" }}
                      loading="lazy"
                    />
                  ) : login.isLoggedin ? (
                    <UserBlueIcon />
                  ) : (
                    <UserIcon />
                  )}
                </UserIconContainer>
                {isUserModalOpen && (
                  <UserPopup
                    ref={outsideClickRef}
                    setIsModalOpen={setIsUserModalOpen}
                    rotate="rotate(0deg)"
                  />
                )}
              </IConsContainer>
              <LoginRegisterButtons />
            </div>
          </HeaderContainer>
        </HeaderMainContainer>
        {isSearchModalOpen && (
          <SearchDropDownContainer
            isHomePage={IS_HOME_PAGE}
            isCountryCityModalOpen={isCountryCityModalOpen}
          >
            <SearchModalWrapper>
              <Row gutter={[0, 25]} style={{ width: "100%" }}>
                <Col xs={24}>
                  <HeaderInput
                    type="text"
                    name="headerSearchBar"
                    color={
                      jobSearchValue === ""
                        ? djobsTheme.colors.black50
                        : djobsTheme.colors.textDarker
                    }
                    value={jobSearchValue}
                    onChangeHandler={e => {
                      setJobSearchValue(e.target.value);
                      setIsJobTitleNotFound(false);
                    }}
                    placeholder="Job Title"
                    isSearch={true}
                    onKeyDown={jobSelectKey}
                  />
                  {isJobtitleNotFound && (
                    <JobTitleDropDown>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchElementContainer color="white">
                          Please Enter A Job Title
                        </SearchElementContainer>
                      </div>
                    </JobTitleDropDown>
                  )}
                </Col>
                <Col xs={24}>
                  <HeaderInput
                    isSearch={true}
                    width="100%"
                    type="text"
                    color={djobsTheme.colors.textDarker}
                    name="city"
                    value={citySearchValue.name}
                    outline={true}
                    onChangeHandler={e => {
                      handleInputChange(e.target.value);
                      setCitySearchValue({ id: null, name: e.target.value });
                      setIsCountryCityModalOpen("city");
                      setSelectedCityIndex(0);
                      setIsCityNotFound(false);
                    }}
                    onClick={() => {
                      if (!citySearchValue) setIsCountryCityModalOpen("");
                      setIsUserModalOpen(false);
                    }}
                    placeholder="City"
                    suffix={<FlagHeader />}
                    onKeyDown={onKeyDowns}
                  />
                  {isCityNotFound && (
                    <CityNotFoundConatiner>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchElementContainer color="white">
                          City Not Found
                        </SearchElementContainer>
                      </div>
                    </CityNotFoundConatiner>
                  )}
                  {isCountryCityModalOpen === "city" &&
                    citySearchValue.name?.length >= 2 &&
                    suggestedCity.length > 0 && (
                      <CityDropDownContainer>
                        <CityListMainContainer ref={dropdownContainerRef}>
                          <div>
                            {suggestedCity.map((item, i) => {
                              return item.name === "Data Not Found" ? (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <SearchElementContainer color="white">
                                    City Not Found
                                  </SearchElementContainer>
                                </div>
                              ) : (
                                <Item
                                  select={selectedCityIndex === i}
                                  onClick={() => {
                                    setCitySearchValue(item);
                                    setIsCountryCityModalOpen("");
                                  }}
                                  key={i}
                                  onMouseOver={() => {
                                    setSelectedCityIndex(i);
                                  }}
                                >
                                  <SearchElementContainer color="green">
                                    {item.name.substring(
                                      0,
                                      stringMatchingIndex(
                                        citySearchValue.name,
                                        item.name
                                      )
                                    )}
                                  </SearchElementContainer>
                                  <SearchElementContainer color="white">
                                    {item.name.substring(
                                      stringMatchingIndex(
                                        citySearchValue.name,
                                        item.name
                                      )
                                    )}
                                  </SearchElementContainer>
                                </Item>
                              );
                            })}
                          </div>
                        </CityListMainContainer>
                      </CityDropDownContainer>
                    )}
                  {isCountryCityModalOpen === "country" && <HeaderPopup />}
                </Col>
                <Col xs={18}>
                  <DjobsButton.Main
                    variant="Primary"
                    label="Search"
                    onClick={() => {
                      onSearch(citySearchValue, jobSearchValue);
                    }}
                  />
                </Col>
              </Row>
            </SearchModalWrapper>
          </SearchDropDownContainer>
        )}
      </div>
    </DjobsHeaderContext.Provider>
  );
};

export default DjobsHeader;
