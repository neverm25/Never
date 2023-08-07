import { PayloadAction } from "@reduxjs/toolkit";

declare namespace Skills {
  type Skill = { id: string | number; name: string };
  type SkillOption = { label: string; value: string };
  type SkillMap = { [key: string]: Skill };
  type CandidateSkill = {
    id?: string | number;
    skill_id: string | number;
    name: string;
  };

  interface State {
    skillsList: Skill[];
    skillsOptions: SkillOption[];
    skillMap: SkillMap;
    candidateSkillsList: CandidateSkill[];
  }

  type setSkillsList = PayloadAction<Skill[]>;
  type setSkillsOptions = PayloadAction<SkillOption[]>;
  type setSkillsMap = PayloadAction<SkillMap>;
  type setCandidateSkillList = PayloadAction<CandidateSkill[]>;
}

export { Skills };
