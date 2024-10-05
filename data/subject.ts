export interface Subject {
    id: string;
    name: string;
    semester: number;
    credits: number;
    evaluationForm: string;
    category: string;
    categoryDescription: string | null;
    subjectType: number;
    lectureHours: number;
    practiceHours: number;
    remoteLectureHours: number;
    remotePracticeHours: number;
    selfStudyHours: number;
    notes: string;
    subGroupsCount: number;
    lecturesCount: number;
    finalProjectExamCount: number;
    otherContactHoursCount: number;
    consultationCount: number;
    gradingNumberCount: number;
    gradingHoursCount: number | null;
    homeworkHoursCount: number;
    practiceReportHoursCount: number;
    remoteTeachingHoursCount: number;
    courseWorkHoursCount: number;
    examHours: number;
    otherNonContactCount: number;
    studyProgramId: string;
    studyProgram: string | null;
    departmentId: string | null;
    department: string | null;
    lecturers: any[];  // You can replace `any[]` with a more specific type if needed
}
