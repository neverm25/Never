import styled from "styled-components";

export const PageContentWrapper = styled.div`
  min-width: 360px;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    /* DESKTOP */
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/bg-bottom.svg), url(/static/images/bg-left.svg);
    background-position: 700% -30%, 50% 100%, -5% 20%;
    background-size: 90% 50%, 110%, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    padding-bottom: 100px;
    background-color: #fbfbff;
  }

  @media (min-width: 1600px) {
    /* LARGE DESKTOP */
  }
`;
export const ApplicationLoginBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    background: url(/static/images/girl-standing-in-blue.svg),
      url(/static/images/plant-blue.svg), url(/static/images/carpet.svg);
    background-position: calc(50% + 370px) 422px, calc(50% - 300px) 920px,
      calc(50%) 1150px;
    background-size: 308px 752px, 133px 241px, 954px 58px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1200px) {
    background: url(/static/images/girl-standing-in-blue.svg),
      url(/static/images/plant-blue.svg), url(/static/images/carpet.svg);
    background-position: calc(50% + 360px) 422px, calc(50% - 270px) 920px,
      50% 1150px;
    background-size: 308px 752px, 133px 241px, 954px 58px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1600px) {
    background: url(/static/images/girl-standing-in-blue.svg),
      url(/static/images/plant-blue.svg), url(/static/images/carpet.svg);
    background-position: calc(50% + 420px) 422px, calc(50% - 350px) 920px,
      50% 1150px;
    background-size: 308px 752px, 133px 241px, 954px 58px;
    background-repeat: no-repeat;
  }
`;
export const ApplicationBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    background: url(/static/images/bg-left.svg),
      url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/plant.svg);
    background-position: -23px top, calc(100% + 536px) 322px, 4vw bottom;
    background-size: 10%, 866px 897px, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  @media (min-width: 1600px) {
    background: url(/static/images/bg-left.svg), url(/static/images/plant.svg),
      url(/static/images/girl-with-laptop-purple.svg);
    background-position: -37px top, 4vw bottom, calc(100% + 900px) top;
    background-size: 13%, 13%, 1478px 1427px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;

export const CandidateSettingsBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);
  @media (min-width: 992px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/bg-left.svg);
    background-position: calc(100% + 636px) 322px, -2% top;
    background-size: 866px 897px, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
  @media (min-width: 1200px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/bg-left.svg);
    background-position: calc(100% + 436px) 172px, -2% top;
    background-size: 866px 897px, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  @media (min-width: 1600px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/bg-left.svg), url(/static/images/plant.svg);
    background-position: calc(100% + 1000px) top, -8% top, 4vw bottom;
    background-size: 1478px 1427px, 13%, 13%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;
export const CompanyProfileBgWrapper = styled.div`
  background: none;
  min-width: 360px;
  min-height: calc(100vh - 238px);

  @media (min-width: 1200px) {
    background: url(/static/images/bg-img-top-right.svg),
      url(/static/images/bg-left.svg);
    background-position: 81vw top, -3% 480px;
    background-size: 105vh, 10%, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  @media (min-width: 1600px) {
    background: url(/static/images/bg-img-top-right.svg),
      url(/static/images/bg-left.svg);
    background-position: 81vw -5vh, -3% 267px;
    background-size: 140vh, 13%, 13%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;

export const CandidateProfileBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    background: url(/static/images/bg-left.svg), url(/static/images/plant.svg),
      url(/static/images/girl-with-laptop-purple.svg);
    background-position: -2% top, 50px 100%, calc(100% + 550px) 250px;
    background-size: 10%, 10%, 747px 716px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
  @media (min-width: 1200px) {
    background: url(/static/images/bg-left.svg), url(/static/images/plant.svg),
      url(/static/images/girl-with-laptop-purple.svg);
    background-position: -2% top, 50px 100%, calc(100% + 600px) 250px;
    background-size: 10%, 10%, 897px 866px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
  @media (min-width: 1600px) {
    background: url(/static/images/bg-left.svg), url(/static/images/plant.svg),
      url(/static/images/girl-with-laptop-purple.svg);
    background-position: -8% top, 70px 100%, calc(100% + 1000px) top;
    background-size: 13%, 13%, 1478px 1427px;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;
export const LegalBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/legalTopBg1200.svg);
    background-position: calc(100% + 500px) 0px, -4% -130px, 4vw bottom;
    background-size: 797px 766px, 10%, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
  @media (min-width: 1200px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/legalTopBg1200.svg);
    background-position: calc(100% + 600px) 0px, -4% -130px, 4vw bottom;
    background-size: 897px 866px, 10%, 10%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
  @media (min-width: 1600px) {
    background: url(/static/images/girl-with-laptop-purple.svg),
      url(/static/images/legalTopBg1600.svg), url(/static/images/plant.svg);
    background-position: calc(100% + 1000px) 0px, 0% -130px, 4vw bottom;
    background-size: 1478px 1427px, 13%, 13%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;
export const LoginBgWrapper = styled.div`
  background: none;
  min-height: calc(100vh - 238px);

  @media (min-width: 992px) {
    background: url(/static/images/LoginBg.svg);
    background-position: center -130px;
    background-size: 945px 984px;
    background-repeat: no-repeat;
  }
`;
