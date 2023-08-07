declare namespace CandidateProfileProps {
  type languageData = { name: string; id: number }[];

  interface Iprops {
    languageData: languageData;
  }
}
export { CandidateProfileProps };
