// #region Global Imports
import { theme } from "@Global/Theme";
import styled from "styled-components";

export const UserImageBox = styled.div`
  /* Effects / Modals */

  filter: drop-shadow(0px 1px 4px rgba(21, 21, 21, 0.02))
    drop-shadow(0px 8px 12px rgba(21, 21, 21, 0.08));
  border-radius: 16px;
  width: 140px;
  height: 140px;
  margin-bottom: 20px;
  background: #a3aed0;
  border: 8px solid ${theme.colors.white100};
  border-radius: 16px;
`;

export const DemoCardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(135deg, #a8daf2 0%, #58b4fa 100%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
`;

export const PipelineWrapper = styled.div`
  width: fit-content;
  position: relative;
  left: 187px;
`;
