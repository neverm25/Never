import { PayloadAction } from "@reduxjs/toolkit";

declare namespace Languages {
  type Language = { id: number | string; name: string };
  type LanguageOption = { label: string; value: string };
  type CandidateLanguage = {
    id?: number | string;
    language_id: number | string;
    name: string;
    proficiency: string;
  };
  interface State {
    langugagesList: Language[];
    candidateLanguages: CandidateLanguage[];
    languageOptions: LanguageOption[];
  }

  type setLanguagesList = PayloadAction<LanguagesList[]>;
  type setLanguageOptions = PayloadAction<LanguageOption[]>;
  type setCandidateLanguages = PayloadAction<CandidateLanguage[]>;
}

export { Languages };
