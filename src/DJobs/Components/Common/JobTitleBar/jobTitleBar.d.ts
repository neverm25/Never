import React from "react";
export type JobType = {
    title: string,
    company_name: string,
    company_photo?: string,
}
declare namespace JobTitleBar {

    export interface JobData {
        jobSelected: JobType
    }
}

export { JobTitleBar };
