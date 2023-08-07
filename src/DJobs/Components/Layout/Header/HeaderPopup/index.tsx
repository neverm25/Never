import React, { useContext, useMemo } from "react";
import { SearchIcon } from "@DJobs/Components/Icons";
import { theme } from "@Global/Theme";
import {
  CountrySearchContainer,
  FlagDropDownContainer,
  FlagListMainContainer,
  Item,
  SearchElementContainer,
} from "../Styles/HeaderStyles";
import HeaderInput from "../HeaderInput";
import { regionNames } from "../Utils/HeaderUtils";
import { djobsTheme } from "@DJobs/Theme";
import { setCookie } from "cookies-next";
import { DjobsHeaderContext } from "../DjobsHeader";

const HeaderPopup = () => {
  const {
    setselectedFlag,
    setIsCountryCityModalOpen,
    setCitySearchValue,
    setIsUserModalOpen,
  } = useContext(DjobsHeaderContext);
  const [searchFilterValue, setSearchFilterValue] = React.useState<string>("");
  const [cur, setCur] = React.useState<number>(0);
  const countrySearchHandler = e => {
    setCur(0);
    setSearchFilterValue(e.target.value);
  };
  const ref = React.useRef(null);
  const filterdSearchValue = useMemo(() => {
    if (searchFilterValue == "") {
      return regionNames;
    } else {
      const tempData = {};
      Object.keys(regionNames).forEach(key => {
        if (
          regionNames[key]
            .toLocaleLowerCase()
            .startsWith(searchFilterValue.toLocaleLowerCase())
        ) {
          tempData[key] = regionNames[key];
        }
      });
      return tempData;
    }
  }, [searchFilterValue]);
  const onKeyDowns = e => {
    //up
    if (e.keyCode == 38) {
      setCur(p => (p === 0 ? 0 : --p));
      if (cur < Object.keys(filterdSearchValue).length - 3) {
        ref.current.scrollTop = ref?.current?.scrollTop - 58;
      }
    }
    //down
    if (e.keyCode == 40) {
      setCur(p =>
        cur + 1 === Object.keys(filterdSearchValue).length ? cur : ++p
      );
      if (cur > 2) {
        ref.current.scrollTop = ref?.current?.scrollTop + 58;
      }
    }
    //enter
    if (e.keyCode == 13) {
      if (Object.keys(filterdSearchValue)[cur]) {
        setselectedFlag(Object.keys(filterdSearchValue)[cur]);
        setCookie("userCountry", Object.keys(filterdSearchValue)[cur]);
        setIsCountryCityModalOpen("");
        setSearchFilterValue("");
        setCitySearchValue("");
      }
    }
  };
  return (
    <FlagDropDownContainer>
      <CountrySearchContainer>
        <HeaderInput
          autofocus={true}
          type="text"
          color={djobsTheme.colors.black110}
          name="countrySearch"
          placeholder="Search Country"
          isSearch={true}
          suffix={<SearchIcon fillColor={theme.colors.black50} />}
          onChangeHandler={countrySearchHandler}
          value={searchFilterValue}
          outline={true}
          onKeyDown={onKeyDowns}
          radius="4px"
          onClick={() => setIsUserModalOpen(false)}
        />
      </CountrySearchContainer>
      <FlagListMainContainer ref={ref}>
        {Object.keys(filterdSearchValue).length !== 0 ? (
          Object.keys(filterdSearchValue).map((item: string, i) => {
            return (
              <Item
                select={cur === i}
                key={i}
                onClick={() => {
                  setIsCountryCityModalOpen("");
                  setselectedFlag(item);
                  setCookie("userCountry", item);
                  setSearchFilterValue("");
                  setCitySearchValue("");
                }}
                onMouseOver={() => {
                  setCur(i);
                }}
              >
                <SearchElementContainer color="green">
                  {filterdSearchValue[item].substring(
                    0,
                    searchFilterValue.length
                  )}
                </SearchElementContainer>
                <SearchElementContainer color="white">
                  {filterdSearchValue[item].slice(searchFilterValue.length)}
                </SearchElementContainer>
              </Item>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchElementContainer color="white">
              Data Not Found
            </SearchElementContainer>
          </div>
        )}
      </FlagListMainContainer>
    </FlagDropDownContainer>
  );
};

export default HeaderPopup;
