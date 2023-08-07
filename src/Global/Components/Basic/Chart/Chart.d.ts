import { CurveType } from "recharts/types/shape/Curve";

declare namespace IChart {
    export interface IProps {
        children?: React.ReactNode;
        width: string;
        height: string;
        data: Array<{}>;
        type: CurveType;
        dataKey: string;
        stroke: string;
        strokeWidth: string;
    }
}

export { IChart };
